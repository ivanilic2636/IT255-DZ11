import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';
@Component({
selector: 'AddStaza',
templateUrl: '/addstaza.html',
})
export class AddStazaComponent {
http: Http;
router: Router;
postResponse: Response;
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
var data =
"ime_staze="+this.addStazaForm.value.ime_staze + "&grad="+this.addStazaForm.value.grad+
"&drzava="+this.addStazaForm.value.drzava;
var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
headers.append("token",localStorage.getItem("token"));
this.http.post('http://localhost/it255v11/addstazaservice.php',data,
{headers:headers})
.map(res => res)
.subscribe( data => this.postResponse = data,
err => alert(JSON.stringify(err)),
() => {
if(this.postResponse["_body"].indexOf("error") === -1){
this.router.navigate(['./allstaze']);
}else{
alert("Neuspesno dodavanje staze");
}
}
);
}
}
