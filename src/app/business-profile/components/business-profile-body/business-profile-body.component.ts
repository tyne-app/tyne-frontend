import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-business-profile-body',
  templateUrl: './business-profile-body.component.html',
  styleUrls: ['./business-profile-body.component.scss']
})
export class BusinessProfileBodyComponent implements OnInit {

  public form: FormGroup;
  
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  public initForm() {
    this.form = this.fb.group({
    });
  }

}
