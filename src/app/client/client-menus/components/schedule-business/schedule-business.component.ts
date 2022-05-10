import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BusinessDetailsResponse } from "@app/business/business-details/interfaces/business-details-response";
import { ButtonCustom } from "@app/shared/controls/customs/buttons/shared/interfaces/button-custom";
import { ScheduleService } from "@app/shared/helpers";

@Component({
  selector: "app-schedule-business",
  templateUrl: "./schedule-business.component.html",
  styleUrls: ["./schedule-business.component.scss"],
})
export class ScheduleBusinessComponent implements OnInit {
  public backButton: ButtonCustom = {
    buttonMaterialType: "mat-raised-button",
    buttonType: "submit",
    buttonTypeClass: "btn-submit",
  };
  public constructor(
    private scheduleService: ScheduleService,
    @Inject(MAT_DIALOG_DATA) public data: { restaurant: BusinessDetailsResponse }
  ) {}

  public ngOnInit(): void {}

  public getDay = (dayNumber: number): string => this.scheduleService.getDay(dayNumber);
}
