import { Component, HostListener, inject } from '@angular/core';
import { PreferencesService } from './preferences.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected readonly ui = inject(PreferencesService);
  protected readonly currentYear = new Date().getFullYear();
  protected menuOpen = false;

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  protected closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('window:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }
}
