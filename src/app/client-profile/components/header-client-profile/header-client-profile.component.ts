import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-client-profile',
  templateUrl: './header-client-profile.component.html',
  styleUrls: ['./header-client-profile.component.scss']
})
export class HeaderClientProfileComponent implements OnInit {

  @Input() username = "Cristopher"
  constructor() { }

  ngOnInit(): void {
  }

}
