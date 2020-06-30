import { AuthService } from "./services/myservice.service";

import { Injectable } from "@angular/core";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
} from "@angular/router";
import { Observable, from } from "rxjs";
providers: [AuthService];
@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem("uname") != null) {
      return true;
    } else {
      this.router.navigate(["./login"], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
  }
}
