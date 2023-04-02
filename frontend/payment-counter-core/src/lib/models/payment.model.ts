// Backendde Payment objesi nasılsa o şekilde alanları burada da belirtiyoruz
export interface IPayment {
  id?: number;
  price: number;
  soldItem: string;
  dateTime: string; // Java'da json'a dönüştürürken Date yerine String olarak göndermekte.
  // Typescript maalesef String'ten date'e dönüştürme yapamıyor çünkü
  // bilinenin aksine Javascriptten farklı bir programlama dilinden ziyade,
  // javascript'in bir üst kümesidir. Dinamik olarak çalışamaz. Sadece ts'ten js'e dönüştürülürken
  // bir dizi işlemlerden geçirilir ve sizin kodunuz javascripte dönüştürülmüş bir şekilde çalıştırılmaktadır.
}
