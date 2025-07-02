import { Component } from "@angular/core"
import { RouterOutlet, RouterLink } from "@angular/router"
import { CommonModule } from "@angular/common"
import { MenuComponent } from "./menu/menu.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, MenuComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
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
