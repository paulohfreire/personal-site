import { Component, inject } from '@angular/core';
import { PreferencesService } from '../preferences.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  protected readonly ui = inject(PreferencesService);
}
