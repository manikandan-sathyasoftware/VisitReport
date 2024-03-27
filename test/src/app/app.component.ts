import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  isSidebarShowing = false;

  openSidebar(){
    this.isSidebarShowing=true;
  }

  closeSidebar(){
    this.isSidebarShowing=false;
  }
}
