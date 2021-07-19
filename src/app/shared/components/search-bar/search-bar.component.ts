import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public form!: FormGroup;
  public minDate = new Date();

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.initForm();
    this.getQueryParams();
  }

  public searchRestaurants() {
    if (!this.isReadyToSearch()) return;
    let dateReservationParam = null;

    if (this.form.get("dateReservation").value) {
      const date = new Date(this.form.get("dateReservation").value);
      const dd = String(date.getDate()).padStart(2, '0');
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const yyyy = date.getFullYear();
      dateReservationParam = `${yyyy}/${mm}/${dd}`;
    }

    this.route.navigate(["buscar-locales"], {
      queryParams: {
        name: this.form.get("name").value,
        dateReservation: dateReservationParam,
        state: this.form.get("state").value,
      }
    });
  }

  public isReadyToSearch(): boolean {

    if (!this.form.get("name").value && !this.form.get("dateReservation").value && !this.form.get("state").value) {

      this.form.get("name").setErrors({'required': true});
      this.form.get("dateReservation").setErrors({'required': true});
      this.form.get("state").setErrors({'required': true});

      return false;
    } else if (this.form.get("name").hasError("minlength") || this.form.get("dateReservation").hasError("invalidDate")) {
      return false;
    }

    return true;
  }

  public nameErrorMessage() {
    return this.form.get("name").hasError("minlength") ? "Debe tener mínimo 3 caracteres" :
      this.form.get("name").hasError("required") ? "Debe ingresar un nombre" : null;
  }

  public dateReservationErrorMessage() {
    return this.form.get("dateReservation").hasError("required") ? "Debe ingresar una fecha válida" :
      this.form.get("dateReservation").hasError("invalidDate") ? "Debe ser igual o mayor a hoy" : null;
  }

  public stateErrorMessage() {
    return this.form.get("state").hasError("required") ? "Debe seleccionar una comuna" :
      this.form.get("state").hasError("min") ? "Debe seleccionar una comuna" : null;
  }
  
  private initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.minLength(3)]],
      dateReservation: ['', [this.dateValidator]],
      state: [''],
    });
  }

  private getQueryParams() {
    this.router.queryParams.subscribe(x => {
      this.form.get("name").setValue(x.name);
      this.form.get("dateReservation").setValue(x.dateReservation ? new Date(x.dateReservation) : null);
      this.form.get("state").setValue(x.state);
    })
  }

  private dateValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value) {

      var date = new Date(control.value).setHours(0, 0, 0, 0,);
      var today = new Date().setHours(0, 0, 0, 0,);

      if (date < today) {
        return { 'invalidDate': true }
      }
    }

    return null;
  }
}
