import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  form!: FormGroup;

  type: 'name' | 'date_reservation' | 'commune';
  valid = false;

  constructor(
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.required]],
      dateReservation: ['', [Validators.required]],
      commune: ['', [Validators.required]],
    });
  }

  public search() {

    if (this.form.invalid) return;

    this.route.navigate(["buscar-locales"], {queryParams: {
      name: this.form.get("name").value,
      dateReservation: this.form.get("dateReservation").value,
      country: this.form.get("commune").value,
    }});
  }
}
