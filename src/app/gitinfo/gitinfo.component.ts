import { Component, OnInit } from '@angular/core';
import { GitServiceService  } from '../git-service.service';


@Component({
  selector: 'app-gitinfo',
  templateUrl: './gitinfo.component.html',
  styleUrls: ['./gitinfo.component.css'],
  providers: [GitServiceService]
})
export class GitinfoComponent implements OnInit {
  data = [];
  err : Boolean;
  constructor(public GitObj: GitServiceService) { }
GetGitInfo(USER){
  
this.GitObj.getUserData(USER.value).subscribe(res=>{
 this.data=res
 this.err = false;
 console.log(this.data);
 
}
,errorr =>{
alert('Name not Found') 
this.err = true;
});
}
  ngOnInit() {
  }

}
