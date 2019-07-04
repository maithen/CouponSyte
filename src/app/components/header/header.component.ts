import { Component, OnInit, Input } from '@angular/core';
import { HeaderTitleService } from 'src/app/services/header-title.service';
import { LoginComponent } from '../login/login.component';
import { CompanyServiceService } from 'src/app/services/company-service.service';

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

  constructor(private headerTitle: HeaderTitleService, private companyservice: CompanyServiceService) {

  }

  ngOnInit() {

    this.user1 = this.companyservice.username;
  }

  logOut() {
    this.user1 = null;
    
  }
}


