import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private http: HttpClient) { }

  getCompanies() {
    return this.http.get("http://localhost:8080/CouponSystem/rest/customer/getCoupons/");
  }

  loginCompany(login) {
    return this.http.post("http://localhost:8080/CouponSystem/rest/company", login);
  }
}
