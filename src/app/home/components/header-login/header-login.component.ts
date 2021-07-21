import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss']
})
export class HeaderLoginComponent implements OnInit {

  @Input() username:string = "Cristopher"
  constructor() { }

  ngOnInit(): void {
  }
}
