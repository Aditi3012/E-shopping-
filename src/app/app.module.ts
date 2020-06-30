import { CartServiceService } from "./cart-service.service";
import { AuthService } from "./services/myservice.service";
import { AuthGuard } from "./auth.guard";
import { HpComponent } from "./products/laptop/hp/hp.component";
import { LenovoComponent } from "./products/laptop/lenovo/lenovo.component";
import { SamsungComponent } from "./products/tv/samsung/samsung.component";
import { ToshibaComponent } from "./products/tv/toshiba/toshiba.component";
import { SonyComponent } from "./products/camera/sony/sony.component";
import { NikonComponent } from "./products/camera/nikon/nikon.component";
import { ComServiceService } from "./services/com-service.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MyStyleDirective } from "./directives/my-style.directive";
import { HostDirective } from "./host.directive";
import { NavComponent } from "./layouts/nav/nav.component";
import { BannerOneComponent } from "./layouts/banner-one/banner-one.component";
import { ProductsComponent } from "./layouts/products/products.component";
import { BannerTwoComponent } from "./layouts/banner-two/banner-two.component";
import { ContactUsComponent } from "./layouts/contact-us/contact-us.component";
import { BannerThreeComponent } from "./layouts/banner-three/banner-three.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { MobileComponent } from "./products/mobile/mobile.component";
import { LaptopComponent } from "./products/laptop/laptop.component";
import { TvComponent } from "./products/tv/tv.component";
import { CameraComponent } from "./products/camera/camera.component";
import { HomeComponent } from "./layouts/home/home.component";
import { MenuComponent } from "./products/mobile/menu/menu.component";
import { PageNotFoundComponent } from "./layouts/page-not-found/page-not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { LapMenuComponent } from "./products/laptop/lap-menu/lap-menu.component";
import { TvMenuComponent } from "./products/tv/tv-menu/tv-menu.component";
import { CamMenuComponent } from "./products/camera/cam-menu/cam-menu.component";
import { MotoComponent } from "./products/mobile/moto/moto.component";
import { VivoComponent } from "./products/mobile/vivo/vivo.component";
import { from } from "rxjs";
import { LoginComponent } from "./products/login/login.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CartComponent } from "./shopping-cart/cart/cart.component";
import { CartItemsComponent } from "./shopping-cart/cart/cart-items/cart-items.component";
import { CheckoutComponent } from "./shopping-cart/cart/checkout/checkout.component";
import { LogoutComponent } from "./logout/logout.component";

@NgModule({
  declarations: [
    AppComponent,
    MyStyleDirective,
    HostDirective,
    NavComponent,
    BannerOneComponent,
    ProductsComponent,
    BannerTwoComponent,
    ContactUsComponent,
    BannerThreeComponent,
    FooterComponent,
    MobileComponent,
    LaptopComponent,
    TvComponent,
    CameraComponent,
    HomeComponent,
    PageNotFoundComponent,
    MenuComponent,
    VivoComponent,
    MotoComponent,
    CamMenuComponent,
    TvMenuComponent,
    LapMenuComponent,
    NikonComponent,
    SonyComponent,
    ToshibaComponent,
    SamsungComponent,
    LenovoComponent,
    HpComponent,
    LoginComponent,
    ShoppingCartComponent,
    CartComponent,
    CartItemsComponent,
    CheckoutComponent,
    LogoutComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule],
  providers: [AuthGuard, ComServiceService, AuthService, CartServiceService],
})
export class firstModule {}
