import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";
import { Component, NgModule } from "@angular/core";

import { firstModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(firstModule);
