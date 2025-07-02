import type { Routes } from "@angular/router"

import { HomeComponent } from "./home/home.component"
import { CuisinesComponent } from "./cuisines/cuisines.component"
import { SubscriptionsComponent } from "./subscriptions/subscriptions.component"
import { LoginComponent } from "./login/login.component"
import { RegisterComponent } from "./register/register.component"
import { ProfileComponent } from "./profile/profile.component"
import { ContactComponent } from "./contact/contact.component"
import { AdminLoginComponent } from "./admin-login/admin-login.component"
import { AccountRegistrationComponent } from "./account-registration/account-registration.component"
import { ForgatePasswordComponent } from "./forgate-password/forgate-password.component"
import { FoodcartComponent } from "./foodcart/foodcart.component"
import { AddTocartComponent } from "./add-tocart/add-tocart.component"
import { WishlistComponent } from "./wishlist/wishlist.component"
import { MenuComponent } from "./menu/menu.component"

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cuisines", component: CuisinesComponent },
  { path: "subscriptions", component: SubscriptionsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent },
  { path: "contact", component: ContactComponent },
  { path: "admin-login", component: AdminLoginComponent },
  { path: "account-registration", component: AccountRegistrationComponent },
  { path: "forgate-password", component: ForgatePasswordComponent },
  { path: "foodcart", component: FoodcartComponent },
  { path: "addtocart", component: AddTocartComponent },
  { path: "wishlist", component: WishlistComponent },
  { path: "menu", component: MenuComponent }, // Route with parameter for wishlist item
  { path: "**", redirectTo: "" }, // Wildcard route for 404 page
]
