import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';
@Component({
selector: 'AddVozac',
templateUrl: '/addvozac.html',
})
export class AddVozacComponent {
http: Http;
router: Router;
postResponse: Response;
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
var data =
"ime="+this.addVozacForm.value.ime + "&& prezime="+this.addVozacForm.value.prezime+
"&& bolid="+this.addVozacForm.value.bolid;
var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
headers.append("token",localStorage.getItem("token"));
this.http.post('http://localhost/it255v11/addvozacservice.php',data,
{headers:headers})
.map(res => res)
.subscribe( data => this.postResponse = data,
err => alert(JSON.stringify(err)),
() => {
if(this.postResponse["_body"].indexOf("error") === -1){
this.router.navigate(['./allvozaci']);
}else{
alert("Neuspesno dodavanje vozaca");
}
}
);
}
}
