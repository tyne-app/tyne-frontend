import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { State } from "@shared/interfaces/common/state";
import { Observable } from "rxjs";
import { TerritorialsService } from "../services/territorials.service";

@Injectable({ providedIn: "root" })
export class StateResolver implements Resolve<Observable<State[]>> {
  public constructor(private territorialService: TerritorialsService) {}

  public resolve(): Observable<State[]> {
    return this.territorialService.getStates(7);
  }
}
