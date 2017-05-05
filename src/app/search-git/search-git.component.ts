import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service'

@Component({
  selector: 'app-search-git',
  templateUrl: './search-git.component.html',
  styleUrls: ['./search-git.component.css'],
  providers: [GitServiceService]
})
export class SearchGitComponent implements OnInit {
  list = [];
  LoginName = [];
  ProList = [];
  err: Boolean = false;
  err2: Boolean;
  id: Number;
  Pro_url: String;
  Pri_Status: String;
  Size: Number;
  language: String;
  branch: String;
  HiddenVisible = "visible";
  constructor(public GitRepo: GitServiceService) { }
  OnClickGitRepo(USER) {
    this.GitRepo.getUserData(USER.value).subscribe(res => {
      this.list = res;
      this.err = false;
      // console.log(this.list);
    }
      , errorr => {
        alert('name Not Found.')
        this.err = true;
      }
    );
    console.log(this.err);
    if (this.err == false) {
      this.GitRepo.GetUserRepo(USER.value).subscribe(res => {
        this.LoginName = res;
        this.err2 = false;
        for (var i = 0; i < this.LoginName.length; i++) {
          console.log(this.LoginName[i].name);
          this.ProList[i] = this.LoginName[i].name
        }
      }
        , errorr => {
          alert('Name Not Found')
          this.err2 = true;
        }
      );
    }
  }
  getdetails(dropdown) {
    this.id = this.LoginName["" + dropdown].id;
    this.Pri_Status = this.LoginName["" + dropdown].private;
    this.Pro_url = this.LoginName["" + dropdown].url;
    this.Size = this.LoginName["" + dropdown].size;
    this.language = this.LoginName["" + dropdown].language;
    this.branch = this.LoginName["" + dropdown].default_branch;
    console.log(dropdown);

  }

  ngOnInit() {
  }

}
