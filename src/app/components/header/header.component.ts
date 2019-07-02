import { Component, OnInit, Input } from '@angular/core';
import { HeaderTitleService } from 'src/app/services/header-title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Coupony';
  setTitle(string) {
    this.headerTitle.setTitle(string);
  }
  user1;
  @Input() user;
  constructor(private headerTitle: HeaderTitleService) { }

  ngOnInit() {

  }

}
