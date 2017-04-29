import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';
@Injectable()
export class GitServiceService {
Url = "https://api.github.com/users/";
data=[];
Repos = [];
count = 0;
  constructor( public GitHttp : Http) { }
getUserData(Name1): Observable<any>{
return this.GitHttp.get(this.Url+Name1).map(
  data => data.json()
);

}
GetUserRepo(Name1): Observable<any>{
 return this.GitHttp.get(this.Url+Name1+"/repos").map(
   Repos=>Repos.json());

}
}
