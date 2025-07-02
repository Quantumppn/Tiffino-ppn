<<<<<<< HEAD
import { Component } from "@angular/core"
import { RouterOutlet, RouterLink } from "@angular/router"
import { CommonModule } from "@angular/common"
import { MenuComponent } from "./menu/menu.component"

=======
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> a93465fc2550ffd74eca08cdbb708efd4b88e1ac
@Component({
  selector: "app-root",
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, RouterLink, CommonModule, MenuComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
=======
  imports: [RouterOutlet,RouterLink,HomeComponent,ReactiveFormsModule], // <-- Add this line
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
>>>>>>> a93465fc2550ffd74eca08cdbb708efd4b88e1ac
})
export class AppComponent {
  title = "Tiffino"
  menuOpen = false
  sidebarOpen = false

  toggleMenu() {
    this.menuOpen = !this.menuOpen
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen
  }

  closeSidebar() {
    this.sidebarOpen = false
  }
}
