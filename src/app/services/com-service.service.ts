import { MobParts } from "./../products/mobile/mob-parts";
import { HttpModule } from "@angular/http";
//import { MOBPARTS } from "./../products/mobile/mock";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { from } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ComServiceService {
  constructor(private http: Http) {}
  getMobParts() {
    //return MOBPARTS;

    return this.http
      .get("../../assets/data.json")
      .pipe(map(response => response.json().mobParts));
  }
}
