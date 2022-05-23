/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Inject, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BranchScheduleDto, ScheduleDto } from "@app/business/shared/interfaces/branch-schedule-dto";
import { BusinessService } from "@app/business/shared/services/business.service";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";
import { RestaurantAccount, Schedule } from "@app/shared/interfaces/restaurant/restaurant-account";
import { DateValidator } from "@app/shared/validations/date-validator";

@Component({
  selector: "app-business-profile-edit-work-days",
  templateUrl: "./business-profile-edit-work-days.component.html",
  styleUrls: ["./business-profile-edit-work-days.component.scss"],
})
export class BusinessProfileEditWorkDaysComponent implements OnInit {
  public form: FormGroup;
  public checked = false;
  public workingHours: Schedule[] = [];

  public get schedule(): FormArray {
    return this.form.controls["schedule"] as FormArray;
  }

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: RestaurantAccount,
    public dialogRef: MatDialogRef<BusinessProfileEditWorkDaysComponent>,
    private businessService: BusinessService,
    private dialogService: DialogService,
    public formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public updateSchedule(): void {
    if (this.form.invalid) {
      this.dialogService.openDialog({
        isSuccessful: false,
        messageButton: "Aceptar",
        subtitle: "Verifique que el formulario sea correcto",
        title: "Ha ocurrido un problema",
      });
      return;
    }

    const schedule: ScheduleDto[] = [];
    const scheduleControls: FormArray = this.schedule;

    scheduleControls.controls.forEach((section) => {
      schedule.push({
        active: section.get("active").value,
        closing_hour: section.get("closing_hour").value,
        day: section.get("day").value,
        opening_hour: section.get("opening_hour").value,
      });
    });

    const request: BranchScheduleDto = {
      branch_id: this.data.branch.id,
      schedule,
    };

    this.businessService.updateBranchSchedule(request).subscribe((x) => {
      this.dialogService.openDialogReloadCurrentPage({
        isSuccessful: true,
        messageButton: "Aceptar",
        redirectTo: undefined,
        subtitle: "Se ha actualizado correctamente el horario",
        title: "Horario actualizado",
      });
    });
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

  public onToggle(event: any, control: any): void {
    control.get("active").value = event.checked;
  }

  public isChecked(value): string {
    return value === false ? "Cerrado" : "Abierto";
  }

  public getDayName(day: number): string {
    switch (day) {
      case 0:
        return "Lunes";
      case 1:
        return "Martes";
      case 2:
        return "Miércoles";
      case 3:
        return "Jueves";
      case 4:
        return "Viernes";
      case 5:
        return "Sábado";
      default:
        return "Domingo";
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      schedule: this.formBuilder.array([]),
    });
    this.getWorkingHours();
  }

  private getWorkingHours() {
    const missingDays: Schedule[] = [];

    for (let index = 0; index < 7; index++) {
      const missingDay = this.data.schedule_list.find((x) => x.day === index);
      if (!missingDay) {
        missingDays.push({
          active: false,
          opening_hour: "09:00",
          closing_hour: "20:00",
          day: index,
          id: 0,
        });
      }
    }

    this.data.schedule_list.map((x) => this.workingHours.push(x));
    missingDays.map((x) => this.workingHours.push(x));
    this.workingHours.sort((x, y) => x.day - y.day);

    this.workingHours.forEach((x) => {
      this.schedule.push(
        this.formBuilder.group({
          active: [x.active],
          opening_hour: [x.opening_hour, [Validators.required, Validators.pattern(DateValidator.timeRegex())]],
          closing_hour: [x.closing_hour, [Validators.required, Validators.pattern(DateValidator.timeRegex())]],
          day: [x.day],
        })
      );
    });
  }
}
