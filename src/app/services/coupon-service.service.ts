import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponServiceService {

  constructor(private http: HttpClient) { }

  getCoupons() {


    let coupons = this.http.get("http://localhost:8080/CouponSystem/rest/customer/getCoupons/")
    return coupons;
  }

}
