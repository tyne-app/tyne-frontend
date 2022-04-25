import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateMenuDto } from "@app/business/business-menus/interfaces/create-menu-dto";
import { GetMenuDto } from "@app/business/business-menus/interfaces/get-menu-dto";
import { environment } from "@src/environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class MenuService {
  private urlBase: string = environment.apiTyne;

  public constructor(private http: HttpClient) {}

  public getMenusByBranch(branchId: number): Observable<GetMenuDto> {
    const urlBase = `${this.urlBase}/menus/${branchId}`;
    return this.http.get<GetMenuDto>(urlBase);
  }

  public createMenuByBranch(menu: CreateMenuDto): Observable<any> {
    const urlBase = `${this.urlBase}/menus`;
    return this.http.post<any>(urlBase, menu);
  }

  public getAllCategory(): Observable<Array<any>> {
    const url = this.urlBase + `/menus/categories`;
    return this.http.get<Array<any>>(url);
  }
}
