import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPayment } from '../models/payment.model';
import { HttpClient } from '@angular/common/http';

// Projemizde bir çok yerde constructorda kullanmak için injectable gerekiyor
// ve tekrar bir tanımlama yapmamak için "providedIn: 'root'" kullandık. Bazı durumlarda iyi olmayabilir ama şu anda her yerde salgılanmasında bir problem yok.
@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  /**
   * Projede neredeyse tek bir pattern kullandık.
   * Burada url entity'e göre url verdik ve buna göre birden çok metota
   * anlamlı bir şekilde böldük
   *  */
  readonly baseUrl = '/api/payment';

  constructor(private http: HttpClient) {}

  /**
   * Tümünü çek
   * @returns
   */
  fetchPayments(): Observable<IPayment[]> {
    return this.http.get(`${this.baseUrl}`).pipe(map((a) => a as IPayment[]));
  }

  /**
   * İdsine göre çek
   * @param id
   * @returns
   */
  fetchPaymentById(id: number): Observable<IPayment> {
    return this.http
      .get(`${this.baseUrl}/${id}`)
      .pipe(map((a) => a as IPayment));
  }

  /**
   * Yeni ekle
   * @param payment
   * @returns
   */
  addPayment(payment: IPayment) {
    return this.http
      .post(`${this.baseUrl}`, payment)
      .pipe(map((a) => a as IPayment));
  }

  /**
   * Var olanı sil
   * @param id
   * @returns
   */
  removePayment(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe();
  }
}
