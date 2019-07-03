import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { HeaderTitleService } from 'src/app/services/header-title.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CouponServiceService } from 'src/app/services/coupon-service.service';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],

})
export class CouponsComponent implements OnInit {
  items;
  couponType = [
    'RESTAURANTS',
    'ELECTRONICS',
    'FOOD',
    'HEALTH',
    'SPORTS',
    'CAMPING',
    'TRAVELLING'
  ];
  constructor(private headertitle: HeaderTitleService, private couponService: CouponServiceService) { }

  ngOnInit() {
    console.log(this.couponType)
    this.headertitle.setTitle('Coupons');
    let stuff = this.couponService.getCoupons();
    stuff.subscribe((res) => { this.getCoupon(res); });
  }
  getCoupon(v) {
    this.items = v.coupon;
    console.log("items")
    console.log(this.items)
  }








}
