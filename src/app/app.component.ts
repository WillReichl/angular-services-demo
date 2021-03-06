import { AccountsService } from './accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor (private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts; // reference type, accessing actual same array in memory
  }
}
