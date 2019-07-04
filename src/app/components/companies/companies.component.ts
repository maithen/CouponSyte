import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from 'src/app/services/header-title.service';
import { CompanyServiceService } from 'src/app/services/company-service.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies;
  constructor(private headertitle: HeaderTitleService, private companyService: CompanyServiceService) { }

  ngOnInit() {
    this.headertitle.setTitle('Companies');
    this.companies = this.companyService.getCompanies();
    this.companies.subscribe((res) => {
      console.log(res)
    })
  }


}
