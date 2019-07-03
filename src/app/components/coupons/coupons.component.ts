import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { HeaderTitleService } from 'src/app/services/header-title.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CouponServiceService } from 'src/app/services/coupon-service.service';
import { Observable, observable } from 'rxjs';
import { all } from 'q';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],

})
export class CouponsComponent implements OnInit {
  coupons;

  couponType = [
    'ALL',
    'RESTAURANTS',
    'ELECTRONICS',
    'FOOD',
    'HEALTH',
    'SPORTS',
    'CAMPING',
    'TRAVELLING',

  ];
  sortBy = this.couponType[0];
  constructor(private headertitle: HeaderTitleService, private couponService: CouponServiceService) { }

  ngOnInit() {
    console.log(this.couponType)
    this.headertitle.setTitle('Coupons');
    let stuff = this.couponService.getCoupons();
    stuff.subscribe((res) => { this.getCoupon(res); });
  }
  getCoupon(v) {
    this.coupons = v.coupon;
    console.log("items")
    console.log(this.coupons)
  }

  sortByPrice(s) {
    switch (s) {
      case 'HTL':
        this.coupons.sort((a, b) => b.price - a.price)

        break;
      case 'LTH':
        this.coupons.sort((a, b) => a.price - b.price)
        break;
      default:
        break;
    }

    console.log(this.coupons)
  }






}
