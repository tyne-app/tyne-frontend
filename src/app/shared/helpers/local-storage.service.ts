import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  public setValue(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getValue(key: string): string {
    return localStorage.getItem(key);
  }
}
