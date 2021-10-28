import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "@src/environments/environment";
import { MenuData} from "./menu-response";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  private urlBase: string = environment.apiLocals;

  public constructor(private client: HttpClient) {}

  public getMenusByBranch(branchId: number): Observable<MenuData> {
    const urlBase = `${this.urlBase}/locals/menu/${branchId}`;
    return this.client.get<MenuData>(urlBase);
  
  }


  public createMenu(){

  }
}
