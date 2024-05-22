import { DOCUMENT, NgClass, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Renderer2, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public showPassword: Boolean = false;
  private interval: any;
  constructor(
    private router: Router,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // ...
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Code to execute only on the client-side
      this.animation();
    }
  }

  toggleIcon() {
    this.showPassword = !this.showPassword;
  }

  goToForgotPassword() {
    this.router.navigate(['/', 'reset-password']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToRegister() {
    this.router.navigate(['/', 'register']);
  }

  animation(): void {
    this.renderer.addClass(this.document.body, 'active-loader');
    this.interval = setInterval(() => {
      this.renderer.addClass(this.document.body, 'active-loader2');
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
