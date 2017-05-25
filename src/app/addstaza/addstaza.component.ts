import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';
@Component({
selector: 'AddStazaComponent',
templateUrl: './addstaza.html',
})
export class AddStazaComponent {
http: Http;
router: Router;
postResponse: String;
addStazaForm = new FormGroup({
ime_staze: new FormControl(),
grad: new FormControl(),
drzava: new FormControl()
});
constructor(http: Http, router: Router) {
this.http = http;
this.router = router;

}
onAddStaza(): void {
var data = "ime_staze=" + this.addStazaForm.value.ime_staze + "&& grad=" + this.addStazaForm.value.grad + "&& drzava=" +
this.addStazaForm.value.drzava;
var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
this.http.post('http://localhost/it255v11/addstaza.php', data, {
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
