import { DOCUMENT, NgClass, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Renderer2, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
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

  goToHome() {
    this.router.navigate(['/']);
  }

  goToLogin() {
    this.router.navigate(['/', 'login']);
  }

  toggleIcon() {
    this.showPassword = !this.showPassword;
  }

  animation(): void {
    this.renderer.addClass(this.document.body, 'active-loader');
    this.interval = setInterval(() => {
      this.renderer.addClass(this.document.body, 'active-loader2');
    }, 2000);
  }
}
