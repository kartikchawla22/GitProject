import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';

@Component({
  selector: 'app-postmongo',
  templateUrl: './postmongo.component.html',
  styleUrls: ['./postmongo.component.css']
})
export class PostmongoComponent implements OnInit {

  constructor(public saveMongo:GitServiceService) { }
Name:String;
Last:String;
age:String;
roll_no:String;

  ngOnInit() {
  }
PostInMongo(MongoForm){
  // var formdata = JSON.stringify(MongoForm.value);
this.saveMongo.PostMongo(MongoForm.value).subscribe(data => {return true;}

,errorr=>{console.log(errorr)}

)
};

}
