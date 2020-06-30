import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  checkUsernameAndPassword(uname: string, pwd: string) {
    if (uname == "admin" && pwd == "admin") {
      localStorage.setItem("uname", "admin");

      return true;
    } else {
      return false;
    }
  }
}
