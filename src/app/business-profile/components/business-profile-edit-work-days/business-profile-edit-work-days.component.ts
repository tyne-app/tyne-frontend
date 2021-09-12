import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-business-profile-edit-work-days",
  templateUrl: "./business-profile-edit-work-days.component.html",
  styleUrls: ["./business-profile-edit-work-days.component.scss"],
})
export class BusinessProfileEditWorkDaysComponent implements OnInit {
  public checked = false;

  public constructor() {}

  public ngOnInit(): void {}

  public isChecked(value): string {
    return value === false ? "Cerrado" : "Abierto";
  }

  public weeksValues = [
    { day: "Lunes", check: false, openValue: "", closeValue: "" },
    { day: "Martes", check: false, openValue: "", closeValue: "" },
    { day: "Miércoles", check: true, openValue: "9:00", closeValue: "20:00" },
    { day: "Jueves", check: true, openValue: "12:00", closeValue: "23:00" },
    { day: "Viernes", check: true, openValue: "11:00", closeValue: "22:00" },
    { day: "Sábado", check: true, openValue: "12:00", closeValue: "21:00" },
    { day: "Domingo", check: true, openValue: "9:00", closeValue: "20:00" },
  ];
}
