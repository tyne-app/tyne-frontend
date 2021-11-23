import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Commission} from "@shared/inmutable/constants/amount";
import {Router} from "@angular/router";


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss']
})
export class MenuAddComponent implements OnInit {

  public foods: Food[] = [
    {value: 'tacos-2', viewValue: 'Entrada'},
    {value: 'steak-0', viewValue: 'Fondo'},
    {value: 'tacos-2', viewValue: 'Bebida'},
    {value: 'pizza-1', viewValue: 'Postre'},
    {value: 'tacos-2', viewValue: 'Otros'},
  ];

  public menuAddForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.menuAddForm = this.fb.group({
      name: '',
      description: '',
      price: '',
      kind: '',
      commission_tyne: Commission,
      url_image: ''
    })
  }

  public onSubmit(){
    this.router.navigateByUrl('my-menu/others');
  }

}
