import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '@app/core/services/reservation.service';
import { ButtonCustom } from '@app/shared/controls/customs/buttons/shared/interfaces/button-custom';
import { TyneRoutes } from '@app/shared/inmutable/enums/url-routes.enum';
import { UpdateReservationPaymentDto } from '@app/shared/interfaces/reservation/reservation-payment';
import { reservationStatus } from '@shared/inmutable/enums/reservation-status.enum';
@Component({
  selector: 'app-cancel-pay',
  templateUrl: './cancel-pay.component.html',
  styleUrls: ['./cancel-pay.component.scss']
})
export class CancelPayComponent implements OnInit {

  public localId:string;
  public retryCustomButton: ButtonCustom = {
    buttonMaterialType: "mat-raised-button",
    buttonType: "button",
    buttonTypeClass: "btn-submit",
  };
  public constructor(
    private reservationService: ReservationService,
    private router:Router
  ) { }

  public ngOnInit(): void {

    const path: any = this.router.parseUrl(this.router.url);
    const paymentNumber: string = path.queryParams["payment_id"];
    const paymentId:string = localStorage.getItem("payment_id");
    const reservationId:number = +localStorage.getItem("reservation_id");
    this.localId = localStorage.getItem("local_id");

    
    const updateReservation: UpdateReservationPaymentDto = {
      payment_id: paymentId,
      reservation_id : reservationId,
      payment_number: paymentNumber,
      status : reservationStatus.payCancelByClient
    };
    this.reservationService.putReservation(updateReservation).subscribe(
      (response) =>{

      },
      (error) =>{

      }
    );
  }

  public retry(): void{
    this.router.navigate([`/${TyneRoutes.ClientMenu}`], {
      queryParams: {
        id: this.localId
      },
    });
  }
  
}
