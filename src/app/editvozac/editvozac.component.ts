import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'EditVozacComponent',
  templateUrl: `./editvozac.html`,
})

export class EditVozacComponent {
  http: Http;
  router: Router;
  postResponse: Response;
  route: ActivatedRoute;
  data: Object[];
  editVozacForm = new FormGroup({
    ime: new FormControl(),
    prezime: new FormControl(),

  });

   constructor(route: ActivatedRoute, http: Http, router: Router) {
    this.http = http;
    this.router = router;
    this.route = route;
    	if(localStorage.getItem('token') == null){
      		this.router.navigate(['']);
    	}
  	}

  onEditVozac(): void {
  	  this.route.params.subscribe((params: Params) => {
	      let id = params['id'];
	      let headers = new Headers();
	      var data = "id=" + id+ "&ime=" + this.editVozacForm.value.ime + "&prezime=" + this.editVozacForm.value.prezime;
	      headers.append('Content-Type', 'application/x-www-form-urlencoded');
	      headers.append("token",localStorage.getItem("token"));
	      this.http.post('http://localhost/it255v11/editVozac.php', data, { headers: headers })
	      .map(res => res)
	      .subscribe( data => this.postResponse = data,
	        err => alert(JSON.stringify(err)),() => {
	          if(this.postResponse["_body"].indexOf("error") === -1){
	            this.router.navigate(['/allvozaci']);
	          }else{
	            alert("Error, unseccessfull");
	          }
	        }
	      );
	  	}
	  	);
	}
}
