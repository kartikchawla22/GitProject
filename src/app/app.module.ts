import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { GitinfoComponent } from './gitinfo/gitinfo.component';
import { GitServiceService  } from './git-service.service';
import { SearchGitComponent } from './search-git/search-git.component';
import { SearchallprojectsComponent } from './searchallprojects/searchallprojects.component';
import { SearchmongoComponent } from './searchmongo/searchmongo.component';
import { PostmongoComponent } from './postmongo/postmongo.component';
import { MongoregexComponent } from './mongoregex/mongoregex.component';
const All = [
{path: "gitinfo", component:GitinfoComponent},
{path: "search-git", component:SearchGitComponent},
{path:'searchallprojects', component:SearchallprojectsComponent},
{path:'searchmongo', component:SearchmongoComponent},
{path:'postmongo', component:PostmongoComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    GitinfoComponent,
    SearchGitComponent,
    SearchallprojectsComponent,
    SearchmongoComponent,
    PostmongoComponent,
    MongoregexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(All)
  ],
  providers: [GitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
