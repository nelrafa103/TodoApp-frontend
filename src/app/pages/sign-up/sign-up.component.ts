import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public FormData: any;
  private serverMessage: string;
  constructor() {
    this.FormData = {
      Name: '',
      Email: '',
      Password: '',
    };
    this.serverMessage = '';
  }

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
      .catch((response) => {});
  }

  public NameRegex(): boolean {
    const numbersRegex = /1234567890/;
    const specialChaRegex = '/[`~!@#$%^&*()_|+-=?;:,.<>{}[]\\/]';
    //const nameValue = this.nameRef.nativeElement.value;
    if (this.FormData.Name.match(numbersRegex) != null) {
      return false;
    }
    if (this.FormData.Name.match(specialChaRegex) != null) {
      return false;
    }
    return true;
  }
  public EmailRegex(): boolean {
    const emailRegex =
      /^[a-zA-Z.!#$%&’*+/=?^_`{|}~-]+[a-zA-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const emailValue = this.emailRef.nativeElement.value;
    // Probing the diferent cases
    if (this.FormData.Email.match(emailRegex) != null) {
      this.serverMessage = 'Invalid Email';
      return false;
    }
    return true;
  }

  public PassRegex(): boolean {
    //  const passwordValue = this.passwordRef.nativeElement.value;
    const numbersRegex = /[0-9]/;
    const specialChaRegex = /[`~!@#$%^&*()_|+\-=?;:,.<>\{\}\[\]\\\/]/;
    // console.log(passwordValue);
    if (this.FormData.Password.match(numbersRegex) == null) {
      this.serverMessage = 'Numbers needed';
      return false;
    }
    if (this.FormData.Password.match(specialChaRegex) == null) {
      this.serverMessage = 'Special characters needed';
      return false;
    }

    if (this.FormData.Password.length < 8) {
      this.serverMessage = 'The password must need 8 characters';
      return false;
    }
    this.serverMessage = '';
    return true;
  }
}
