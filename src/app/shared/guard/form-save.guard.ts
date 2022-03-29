import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CanDeactivate, UrlTree } from "@angular/router";
import { Observable} from "rxjs";
import { map } from "rxjs/operators";
import { ExitFormComponent } from "../components/exit-form/exit-form.component";

export interface SafeFormData {
  isDataSaved(): boolean;
  saveFormData(): void;
}

@Injectable({
  providedIn: "root",
})
export class FormSaveGuard implements CanDeactivate<SafeFormData> {
  public constructor(public dialog: MatDialog) {}
  public canDeactivate(
    component: SafeFormData
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component?.isDataSaved()) {
      const dialogRef = this.dialog.open(ExitFormComponent, {
        maxWidth: "50%",
        minWidth: "50%",
      });

      return dialogRef.afterClosed().pipe(map(result=>{
        if(result){
          component.saveFormData();
          return true;
        }else{
          return false;
        }
      }));

    } else{
      return true;
    }
  }
}
