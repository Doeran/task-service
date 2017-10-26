import {Component} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(public authService: AuthService, private fb: FormBuilder) {
    this.createForm();
  }

  authForm = new FormGroup({
    login: new FormControl(),
    pass: new FormControl()
  });

  createForm() {
    this.authForm = this.fb.group({
      login: '',
      pass: ''
    });
  }

  login() {
    if (this.authForm.getRawValue().login.toLowerCase() === 'admin' &&
    +this.authForm.getRawValue().pass === 123) {
      this.authService.login().subscribe(() => {
      });
    }
  }

  logout() {
    this.authService.logout();
  }
}
