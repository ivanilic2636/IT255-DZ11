import { Component, Directive } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';
@Component({
selector: 'AllBolidComponent',
templateUrl: '/allbolid.html'
})
export class AllBolidComponent {
private data : Object[];
private router: Router;
constructor(private http: Http, router: Router) {
this.router = router;
var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
headers.append('token', localStorage.getItem('token'));
http.get('http://localhost/it255v11/getBolid.php', {headers: headers})
.map(res => res.json()).share()
.subscribe(data => {
this.data = data.bolid;
},
err => {
this.router.navigate(['./']);
}
);
}
public removeBolid(event: Event, item: Number) {
var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
headers.append('token', localStorage.getItem('token'));
this.http.get('http://localhost/it255v11/deleteBolid.php?id_bolida='+item,{headers:headers}) .subscribe( data => {
event.srcElement.parentElement.parentElement.remove();
});
}
}
