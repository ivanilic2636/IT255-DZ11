import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';
@Component({

selector: 'AddVozacComponent',
templateUrl: './addvozac.html',
})
export class AddVozacComponent {
http: Http;
router: Router;
postResponse: String;
addVozacForm = new FormGroup({
ime: new FormControl(),
prezime: new FormControl(),
bolid: new FormControl()
});
constructor(http: Http, router: Router) {
this.http = http;
this.router = router;

}
onAddVozac(): void {
var data = "ime=" + this.addVozacForm.value.ime + "&& prezime=" + this.addVozacForm.value.prezime + "&& bolid=" +
this.addVozacForm.value.bolid;
var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
this.http.post('http://localhost/it255v11/addvozac.php', data, {
headers: headers })
.subscribe(
data => {
if (data["_body"] == "ok") {
this.router.navigate(['/']);
}
}
);
}
}
