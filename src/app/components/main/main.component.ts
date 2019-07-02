import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderTitleService } from 'src/app/services/header-title.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  userformServer = { fname: "levi", lname: "yhoaraz" };
  constructor(private headertitle: HeaderTitleService) {

  }
  title = 'Home';
  
  ngOnInit() {
    this.headertitle.title.subscribe(title => {
      this.title = title;
    });
  }
}



