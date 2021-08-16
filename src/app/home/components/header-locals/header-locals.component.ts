import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-locals',
  templateUrl: './header-locals.component.html',
  styleUrls: ['./header-locals.component.scss']
})
export class HeaderLocalsComponent implements OnInit {

  public isWhiteLogo = false;

  constructor() { }

  ngOnInit() {
  }

  public getLogo() {
    return this.isWhiteLogo ? "/assets/logo-home.png" : "/assets/logo2 1.png";
  }

}
