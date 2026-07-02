import { AfterViewInit, Component, DestroyRef, HostListener, Renderer2, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  private readonly renderer = inject(Renderer2);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  protected isHomeRoute = true;
  protected readonly currentYear = new Date().getFullYear();

  ngAfterViewInit(): void {
    this.setScrollRestoration();

    window.setTimeout(() => {
      this.renderer.removeClass(document.body, 'is-preload');
    }, 100);

    this.applyRouteState(this.router.url);

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => this.applyRouteState(event.urlAfterRedirects));
  }

  @HostListener('document:click')
  protected onDocumentClick(): void {
    if (!this.isHomeRoute) {
      void this.router.navigateByUrl('/');
    }
  }

  @HostListener('window:keyup', ['$event'])
  protected onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Escape' && !this.isHomeRoute) {
      void this.router.navigateByUrl('/');
    }
  }

  private applyRouteState(url: string): void {
    this.isHomeRoute = url.split(/[?#]/)[0].replace(/^\/+|\/+$/g, '') === '';

    if (this.isHomeRoute) {
      this.renderer.removeClass(document.body, 'is-article-visible');
    } else {
      this.renderer.addClass(document.body, 'is-article-visible');
    }

    window.scrollTo(0, 0);
  }

  private setScrollRestoration(): void {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }
}
