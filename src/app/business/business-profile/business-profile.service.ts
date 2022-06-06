import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BusinessProfileService {
  public branchImageIndexDataSource = new BehaviorSubject<number>(null);
  public currentBranchImageIndex = this.branchImageIndexDataSource.asObservable();
}
