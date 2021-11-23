import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-business-menu',
  templateUrl: './business-menu.component.html',
  styleUrls: ['./business-menu.component.scss']
})
export class BusinessMenuComponent implements OnInit {
  public localName:string = 'Local';

  public navigation = [
    {
      name: 'Entradas',
      link: 'entries',
      icon: 'fastfood'
    },
    {
      name: 'Fondos',
      link: 'bottomPlates',
      icon: 'local_dining'
    },
    {
      name: 'Bebidas',
      link: 'drinks',
      icon: 'local_drink'
    },
    {
      name: 'Postres',
      link: 'desserts',
      icon: 'restaurant'
    },
    {
      name: 'Otros',
      link: 'others',
      icon: 'local_pizza'
    }
  ];
  public activeLink = this.navigation[0].link;

  public constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  public addProduct(){
    this.router.navigateByUrl('my-menu/menu-add');
  }

}
