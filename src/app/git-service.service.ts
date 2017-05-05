import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';
@Injectable()
export class GitServiceService {
Url = "https://api.github.com/users/";
Url2 = "https://api.github.com/search/repositories?q="
data=[];
Repos = [];
Url3 = "http://192.168.15.148:2000/api/try/userinfo";
  constructor( public GitHttp : Http) { }
getUserData(Name1): Observable<any>{
return this.GitHttp.get(this.Url+Name1).map(
  data => data.json()
);

}
GetMongo(): Observable<any>{
return this.GitHttp.get(this.Url3).map(
  data => data.json()
);

}
GetUserRepo(Name1): Observable<any>{
 return this.GitHttp.get(this.Url+Name1+"/repos").map(
   Repos=>Repos.json());

}

getAllRepo(Name1): Observable<any>{
return this.GitHttp.get(this.Url2+Name1).map(
  data => data.json()
);

}

PostMongo(form){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    console.log(form);
    
    return this.GitHttp.post(this.Url3, form, headers).map((res: Response) => res.json());
  
}
}
