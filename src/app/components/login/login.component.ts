import { Component, OnInit, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { CompanyServiceService } from 'src/app/services/company-service.service';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { RouterLink, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _location: Location,
    private companyservice: CompanyServiceService,
    private adminservice: AdminServiceService,
    private routerLink: Router) { }

  backClicked() {
    this._location.back();
  }

  loginType = false;

  ngOnInit() {
  }



  onSubmit(f: NgForm) {
    this.loginType = true;
    this.login(f)
    this.routerLink.navigateByUrl('')

  }

  login(f: NgForm) {
    switch (f.value.type) {
      case 'Company':
        this.companyservice.loginCompany(f.value).subscribe(f.value);
        break;
      case 'Admin':
        this.adminservice.loginAdmin(f.value).subscribe(f.value);

        break;
      default:
        break;
    }
  }
}
