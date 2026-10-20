import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';
import { portuguese } from './translations';

type Language = 'en' | 'pt';
type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class PreferencesService {
  private readonly document = inject(DOCUMENT);
  private readonly window = this.document.defaultView;
  private readonly selectedLanguage = signal<Language>(this.read('language') === 'pt' ? 'pt' : 'en');
  private readonly selectedTheme = signal<Theme>(this.initialTheme());
  readonly language = this.selectedLanguage.asReadonly();
  readonly theme = this.selectedTheme.asReadonly();

  constructor() {
    effect(() => {
      const language = this.language();
      const theme = this.theme();
      this.document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
      this.document.documentElement.dataset['theme'] = theme;
      this.document.title = language === 'pt' ? 'Paulo Freire — Engenheiro de Software' : 'Paulo Freire — Software Engineer';
      this.document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0b0b0b' : '#faf8f2');
      this.document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'pt'
        ? 'Portfólio de Paulo Henrique de Oliveira Freire, engenheiro de software especializado em frontend e desenvolvimento full stack.'
        : 'Personal portfolio of Paulo Henrique de Oliveira Freire, software engineer focused on frontend and full stack development.');
    });
  }

  text(english: string): string {
    return this.language() === 'pt' ? portuguese[english] ?? english : english;
  }

  setLanguage(language: Language): void {
    this.selectedLanguage.set(language);
    this.save('language', language);
  }

  toggleTheme(): void {
    const theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.selectedTheme.set(theme);
    this.save('theme', theme);
  }

  private initialTheme(): Theme {
    const saved = this.read('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return this.window?.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  private read(key: string): string | null {
    try { return this.window?.localStorage.getItem(`portfolio-${key}`) ?? null; }
    catch { return null; }
  }

  private save(key: string, value: string): void {
    try { this.window?.localStorage.setItem(`portfolio-${key}`, value); }
    catch { /* Preferences remain usable when browser storage is unavailable. */ }
  }
}
