import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  Auth() {
    fetch('http://127.0.0.1:3000/login', {
      method: 'POST',
      body: JSON.stringify({
        Data: '',
        Device: '',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {})
      .catch((response) => {
        //this.LoginMessage = 'Invalid logIn';
      });
  }
}
