import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { GitinfoComponent } from './gitinfo/gitinfo.component';
import { GitServiceService  } from './git-service.service';
import { SearchGitComponent } from './search-git/search-git.component';
const All = [
{path: "gitinfo", component:GitinfoComponent},
{path: "search-git", component:SearchGitComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    GitinfoComponent,
    SearchGitComponent
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
