import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nx-angular-nest-starter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:9000/api').subscribe((res) => {
      console.log(res);
    });
  }
}
