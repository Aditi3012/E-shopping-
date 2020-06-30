import { CheckoutComponent } from "./shopping-cart/cart/checkout/checkout.component";
import { AuthGuard } from "./auth.guard";
import { CartItemsComponent } from "./shopping-cart/cart/cart-items/cart-items.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CartComponent } from "./shopping-cart/cart/cart.component";
import { LoginComponent } from "./products/login/login.component";
import { TvMenuComponent } from "./products/tv/tv-menu/tv-menu.component";
import { CamMenuComponent } from "./products/camera/cam-menu/cam-menu.component";
import { HpComponent } from "./products/laptop/hp/hp.component";
import { LenovoComponent } from "./products/laptop/lenovo/lenovo.component";
import { SamsungComponent } from "./products/tv/samsung/samsung.component";
import { ToshibaComponent } from "./products/tv/toshiba/toshiba.component";
import { SonyComponent } from "./products/camera/sony/sony.component";
import { NikonComponent } from "./products/camera/nikon/nikon.component";
import { MenuComponent } from "./products/mobile/menu/menu.component";
import { MotoComponent } from "./products/mobile/moto/moto.component";
import { VivoComponent } from "./products/mobile/vivo/vivo.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { PageNotFoundComponent } from "./layouts/page-not-found/page-not-found.component";
import { LaptopComponent } from "./products/laptop/laptop.component";
import { TvComponent } from "./products/tv/tv.component";
import { CameraComponent } from "./products/camera/camera.component";
import { MobileComponent } from "./products/mobile/mobile.component";
import { HomeComponent } from "./layouts/home/home.component";
import { LapMenuComponent } from "./products/laptop/lap-menu/lap-menu.component";
import { from } from "rxjs";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "cart", component: CartComponent },
  {
    path: "checkout",
    component: CheckoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "mobile",
    component: MenuComponent,

    children: [
      {
        path: "mobiles",
        component: MobileComponent,
      },

      {
        path: "vivo",
        component: VivoComponent,
      },
      {
        path: "moto",
        component: MotoComponent,
      },
    ],
  },

  {
    path: "camera",
    component: CamMenuComponent,

    children: [
      {
        path: "",
        component: CameraComponent,
      },
      {
        path: "nikon",
        component: NikonComponent,
      },
      {
        path: "sony",
        component: SonyComponent,
      },
    ],
  },

  {
    path: "Tv",
    component: TvMenuComponent,
    children: [
      {
        path: "",
        component: TvComponent,
      },
      {
        path: "toshiba",
        component: ToshibaComponent,
      },
      {
        path: "sam",
        component: SamsungComponent,
      },
    ],
  },
  {
    path: "laptops",
    component: LapMenuComponent,

    children: [
      {
        path: "",
        component: LaptopComponent,
      },
      {
        path: "lenovo",
        component: LenovoComponent,
      },

      {
        path: "hp",
        component: HpComponent,
      },
    ],
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
