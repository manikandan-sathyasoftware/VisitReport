import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisiterEntryComponent } from './visiter-entry/visiter-entry.component';
import { MyrequestComponent } from './myrequest/myrequest.component';
import { VisitorDirectoryComponent } from './visitor-directory/visitor-directory.component';

const routes: Routes = [
  {path:'',component:VisiterEntryComponent},
  {path:'request',component:MyrequestComponent},
  {path:'directory',component:VisitorDirectoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
