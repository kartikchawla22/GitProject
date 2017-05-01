import { Component, OnInit } from '@angular/core';
import { GitServiceService  } from '../git-service.service';
@Component({
  selector: 'app-searchallprojects',
  templateUrl: './searchallprojects.component.html',
  styleUrls: ['./searchallprojects.component.css']
})
export class SearchallprojectsComponent {

  constructor(public GitRepo: GitServiceService) { }
list;
err : Boolean;
Listproject = [];
tot :number;
 OnClickGitRepo(USER) {
    this.GitRepo.getAllRepo(USER.value).subscribe(res => {
      this.list = res;
      this.err = false;
      console.log(this.list.total_count);
      this.tot = this.list.total_count;
      for(var i = 0 ; i <this.list.items.length; i++){
      console.log(this.list.items[i].name + " by " + this.list.items[i].owner.login);
this.Listproject[i]=this.list.items[i];
console.log(this.Listproject[i].html_url);

    }}
      , errorr => {
        alert('name Not Found.')
        this.err = true;
      }
    );
 }
 
}
