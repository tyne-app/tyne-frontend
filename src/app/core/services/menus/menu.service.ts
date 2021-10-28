import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "@src/environments/environment";
import { Menu, MenuData} from "./menu-response";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  private urlBase: string = environment.apiLocals;

  public constructor(private http: HttpClient) {}

  public getMenusByBranch(branchId: number): Observable<MenuData> {
    const urlBase = `${this.urlBase}/locals/menu/${branchId}`;
    return this.http.get<MenuData>(urlBase);
  }

  public createMenuByBranch(branchId: number, menu:Menu): Observable<any>{
    const urlBase = `${this.urlBase}/locals/menu/${branchId}`;
    return this.http.post<any>(urlBase,menu);
  }
}
