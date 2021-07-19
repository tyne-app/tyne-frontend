import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.required]],
      dateReservation: ['', [Validators.required]],
      state: ['', [Validators.required]],
    });
  }

  public search() {

    if (this.form.invalid) return;

    this.route.navigate(["buscar-locales"], {
      queryParams: {
        name: this.form.get("name").value,
        dateReservation: this.form.get("dateReservation").value,
        state: this.form.get("state").value,
      }
    });
  }

  public nameErrorMessage() {
    return this.form.get("name").hasError("minlength") ? "Debe tener mínimo 3 caracteres" :
      this.form.get("name").hasError("required") ? "Debe ingresar un nombre" : null;
  }

  public dateReservationErrorMessage() {
    return this.form.get("dateReservation").hasError("required") ? "Debe ingresar una fecha" : null;
  }

  public stateErrorMessage() {
    return this.form.get("state").hasError("required") ? "Debe seleccionar una comuna" : null;
  }
}
