import { Component, OnInit } from '@angular/core';
import { LoginPageModule } from './login.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/folder', 'inbox']);
  }

  ngOnInit() {
  }

}
