import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs/index';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = this.fb.group({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.form.value.email, this.form.value.password);
  }
}
