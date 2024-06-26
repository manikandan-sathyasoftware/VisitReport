import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VisiterEntryComponent } from './visiter-entry/visiter-entry.component';
import { MyrequestComponent } from './myrequest/myrequest.component';
import { VisitorDirectoryComponent } from './visitor-directory/visitor-directory.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VisiterEntryComponent,
    MyrequestComponent,
    VisitorDirectoryComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
