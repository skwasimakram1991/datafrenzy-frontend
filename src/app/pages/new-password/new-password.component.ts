import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [NgClass],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css'
})
export class NewPasswordComponent {
  public showNewPassword: Boolean = false;
  public showConfirmPassword: Boolean = false;

  constructor(private router: Router) {
    // ...
  }

  gotoLogin() {
    this.router.navigate(['/', 'login']);
  }

  togglePassword(type: string) {
    if (type === 'new') {
      this.showNewPassword = !this.showNewPassword
    } else {
      this.showConfirmPassword = !this.showConfirmPassword
    }
  }
}
