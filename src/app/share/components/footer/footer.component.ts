import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public hideFooter: Boolean = false;
  public path: Array<any> = ['/login', '/register', '/new-password', '/reset-password'];
  public currentUrl: String = '';

  constructor( private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = this.router.url;
        // console.log("Current URL Path:", this.currentUrl, this.path.includes(this.currentUrl));
        this.hideFooter = this.path.includes(this.currentUrl);
      }
    });
  }
}
