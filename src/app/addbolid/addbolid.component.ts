import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';
@Component({
selector: 'AddBolidComponent',
templateUrl: '/addbolid.html',
})
export class AddBolidComponent {
http: Http;
router: Router;
postResponse: Response;
addBolidTypeForm = new FormGroup({
ime_bolida: new FormControl()
});
constructor(http: Http, router: Router) {
this.http = http;
this.router = router;
}
onAddBolid(): void {
  var data = "ime_bolida="+this.addBolidTypeForm.value.ime_bolida;
var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
headers.append("token",localStorage.getItem("token"));
this.http.post('http://localhost/it255v11/addbolidservice.php',data,
{headers:headers})
.map(res => res)
.subscribe( data => this.postResponse = data,
err => alert(JSON.stringify(err)),
() => {
if(this.postResponse["_body"].indexOf("error") === -1){
this.router.navigate(['./allbolid']);
}else{
alert("Neuspesno dodavanje bolida");
}
}
);
}
}
