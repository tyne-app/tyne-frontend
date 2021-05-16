import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  form! : FormGroup;

  type: 'name' | 'date_reservation' | 'commune'
  valid = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.required]],
      dateReservation: ['', [Validators.required]],
      commune: ['', [Validators.required]],
    });
  }

}
