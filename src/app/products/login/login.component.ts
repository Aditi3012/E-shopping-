import { Routes, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../../services/myservice.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  constructor(private service: AuthService, private routes: Router) {}
  msg;
  ngOnInit() {}

  check(uname: string, p: string) {
    var output = this.service.checkUsernameAndPassword(uname, p);
    if (output == true) {
      this.routes.navigate(["./checkout"]);
    } else {
      this.msg = " Invalid username or password";
    }
  }
}
