import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'myProject';


  animateOut: string = "animated fadeOut fast";

  fadeOut(e) {
    console.log(e);
  }


}
