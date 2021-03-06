import { Component, Directive } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';
@Component({
selector: 'AllVozaciComponent',
templateUrl: '/allvozaci.html'
})
export class AllVozaciComponent {
private data : Object[];
private router: Router;
constructor(private http: Http, router: Router) {
this.router = router;
var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
headers.append('token', localStorage.getItem('token'));
http.get('http://localhost/it255v11/getVozaci.php', {headers: headers})
.map(res => res.json()).share()
.subscribe(data => {
this.data = data.vozaci;
},
err => {
this.router.navigate(['./']);
}
);
}
public removeVozac(event: Event, item: Number) {
var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
headers.append('token', localStorage.getItem('token'));
this.http.get('http://localhost/it255v11/deleteVozac.php?id='+item,{headers:headers}) .subscribe( data => {
event.srcElement.parentElement.parentElement.remove();
});
}
public viewVozac(item: Number){

  this.router.navigate(['/vozac', item]);
  }

  public editVozac(id:number){
      this.router.navigateByUrl('editvozac/' + id);
    }
  }
