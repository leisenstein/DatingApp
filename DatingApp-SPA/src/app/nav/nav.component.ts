import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};  // hold the username/password

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
      console.log('Failed to login');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;  // return false if empty, else return ture
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }
}
