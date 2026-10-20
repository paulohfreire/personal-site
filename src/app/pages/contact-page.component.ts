import { Component, inject } from '@angular/core';
import { PreferencesService } from '../preferences.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent {
  protected readonly ui = inject(PreferencesService);
}
