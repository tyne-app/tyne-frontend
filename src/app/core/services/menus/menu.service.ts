/** ANGULAR */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
/** ENVIRONMENT */
import { environment } from "@src/environments/environment";
import { Observable } from "rxjs";
import { MenuAdd } from "./menu-add";
/** INTERFACES */
import { MenuData } from "./menu-response";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  private urlBase: string = environment.apiTyne;

  public constructor(private http: HttpClient) {}

  public getMenusByBranch(branchId: number): Observable<MenuData> {
    const urlBase = `${this.urlBase}/menus/${branchId}`;
    return this.http.get<MenuData>(urlBase);
  }

  public createMenuByBranch(branchId: number, menu: MenuAdd): Observable<any> {
    const urlBase = `${this.urlBase}/menus/${branchId}`;
    return this.http.post<any>(urlBase, menu);
  }
}
