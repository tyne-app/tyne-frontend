import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UpdateReservationPaymentDto , CreateReservationPaymentDto} from "@app/shared/interfaces/reservation/reservation-payment";
import { ReservationAdd } from "@app/business/bussines-home/interfaces/reservation-add";
import { LocalReservationDetailResponse } from "@app/business/shared/interfaces/local-reservation-detail-response";
import { environment } from "@src/environments/environment";
import { Observable } from "rxjs";
import { LocalReservationsResponse } from "@app/business/shared/interfaces/local-reservations-response";

@Injectable({
  providedIn: "root", 
})
export class ReservationService {
  private urlBase = environment.apiTyne;
  public constructor(private http: HttpClient) {}

  public getReservations(
    reservation_date: string,
    status_reservation: number,
    result_for_page: number,
    page_number: number
  ): Observable<LocalReservationsResponse> {
    const url = this.urlBase + `/reservations`;

    let params = new HttpParams();
    params = params.append("reservation_date", reservation_date.toString());
    params = params.append("status_reservation", status_reservation.toString());
    params = params.append("result_for_page", result_for_page.toString());
    params = params.append("page_number", page_number.toString());

    return this.http.get<LocalReservationsResponse>(url, { params });
  }

  public getReservationById(id: number): Observable<LocalReservationDetailResponse> {
    const url = this.urlBase + `/reservations/${id}`;
    return this.http.get<LocalReservationDetailResponse>(url);
  }

  public postReservation(reservation:ReservationAdd): Observable<CreateReservationPaymentDto>{
    const url = this.urlBase + `/reservations`;
    return this.http.post<CreateReservationPaymentDto>(url, reservation);
  }

  public putReservation(reservation:UpdateReservationPaymentDto): Observable<any>{
    const url = this.urlBase + `/reservations`;
    return this.http.put<any>(url, reservation);
  }


}
