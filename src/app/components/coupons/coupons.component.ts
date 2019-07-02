import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { HeaderTitleService } from 'src/app/services/header-title.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CouponServiceService } from 'src/app/services/coupon-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],

})
export class CouponsComponent implements OnInit {
  items;
  constructor(private headertitle: HeaderTitleService, private couponService: CouponServiceService) { }

  ngOnInit() {
    this.headertitle.setTitle('Coupons');
    let stuff = this.couponService.getCoupons();
    stuff.subscribe((res) => { this.items = res; console.log(res) });
    console.log("items")
    console.log(this.items)
  }





}
