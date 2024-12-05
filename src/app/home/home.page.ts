import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cryptoList: any[] = []; // Menyimpan daftar cryptocurrency

  constructor(private http: HttpClient) {}

  // Fungsi untuk mengambil data dari API
  getCryptoData() {
    const apiUrl = 'https://api.coinlore.net/api/tickers/';

    this.http.get(apiUrl).subscribe((response: any) => {
      this.cryptoList = response.data.map((item: any) => ({
        rank: item.rank,
        name: item.name,
        symbol: item.symbol,
        price_usd: parseFloat(item.price_usd).toFixed(2), // Format harga menjadi dua desimal
      }));
    });
  }
}
