import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "@src/environments/environment";
import { GenericDataResponse } from "@shared/interfaces/generic-data-response";
import { MenuResponse } from "./menu-response";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  private url: string = environment.apiMenus;

  public constructor(private client: HttpClient) {}

  public getMenusByBranch(branchId: number): Observable<MenuResponse[]> {
    const url = this.url + branchId + "/menu";

    return this.client.get<GenericDataResponse<MenuResponse[]>>(url).pipe(
      map((res) => {
        return res.data ? res.data : null;
      })
    );
  }
}
