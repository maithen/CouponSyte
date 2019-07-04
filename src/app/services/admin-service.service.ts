import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  loginAdmin(login) {
    return this.http.post("http://localhost:8080/CouponSystem/rest/admin/", login);
  }
}
