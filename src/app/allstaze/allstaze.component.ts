import { Component, Directive } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';
@Component({
selector: 'AllStaze',
templateUrl: '/allstaze.html'
})
export class AllStazeComponent {
private data : Object[];
private router: Router;
constructor(private http: Http, router: Router) {
this.router = router;
var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
headers.append('token', localStorage.getItem('token'));
http.get('http://localhost/it255v11/getStazeservice.php', {headers: headers})
.map(res => res.json()).share()
.subscribe(data => {
this.data = data.staze;
},
err => {
this.router.navigate(['./']);
}
);
}
}
