import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  public signinForm!: FormGroup;
  public viewpassword: boolean = false;
  ngOnInit(): void {
    this.signinUserForm();
  }

  signinUserForm() {
    this.signinForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  viewPassword() {
    let input = document.querySelector('#password');
    if (this.viewpassword) {
      this.viewpassword = false;
      input?.setAttribute('type', 'password');
    } else {
      input?.setAttribute('type', 'text');
      this.viewpassword = true;
    }
  }

  loginUsuario() {
    if (
      this.signinForm.value.name == 'Joe Sam' &&
      this.signinForm.value.password == '1234567890'
    ) {
      localStorage.setItem('name', this.signinForm.value.name);
      localStorage.setItem(
        'token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9lIFNhbSJ9.RpYD7qsSX8UvhHeBarSe67yJo-OXU2UNtIvmme0u2vo'
      );
      this.router.navigate(['/home']);
    } else {
      let error = document.getElementById('error');
      console.log(error)
      error?.classList.remove("hidden");
      setTimeout(function () {
        //Remove a classe hide
      error?.classList.add("hidden");
      }, 5 * 1000);
      
    }
  }
}
