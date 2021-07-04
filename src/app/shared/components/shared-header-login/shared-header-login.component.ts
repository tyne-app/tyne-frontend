import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-header-login',
  templateUrl: './shared-header-login.component.html',
  styleUrls: ['./shared-header-login.component.scss']
})
export class SharedHeaderLoginComponent implements OnInit {

  @Input() username:string = "Cristopher"
  constructor() { }

  ngOnInit(): void {
  }
}
