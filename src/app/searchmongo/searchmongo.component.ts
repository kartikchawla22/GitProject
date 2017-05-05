import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service'
@Component({
  selector: 'app-searchmongo',
  templateUrl: './searchmongo.component.html',
  styleUrls: ['./searchmongo.component.css']
})
export class SearchmongoComponent implements OnInit {
  list = [];
  // LoginName = [];
  // ProList = [];
  err: Boolean = false;
  // err2: Boolean;
  rollno: Number;
  username: String;
  lastname: String;
  age: Number;
  // language: String;
  // branch: String;
  HiddenVisible = "visible";
  constructor(public GitRepo: GitServiceService) { }
  OnClickGitRepo() {
    this.GitRepo.GetMongo().subscribe(res => {
      this.list = res;
      this.err = false;
      console.log(this.list);
    }
      , errorr => {
        alert('name Not Found.')
        this.err = true;
      }
    );
    // console.log(this.err);
    // if (this.err == false) {
    //   this.GitRepo.GetUserRepo(USER.value).subscribe(res => {
    //     this.LoginName = res;
    //     this.err2 = false;
    //     for (var i = 0; i < this.LoginName.length; i++) {
    //       console.log(this.LoginName[i].name);
    //       this.ProList[i] = this.LoginName[i].name
    //     }
    //   }
    //     , errorr => {
    //       alert('Name Not Found')
    //       this.err2 = true;
    //     }
    //   );
    // }
  }
ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}
}
