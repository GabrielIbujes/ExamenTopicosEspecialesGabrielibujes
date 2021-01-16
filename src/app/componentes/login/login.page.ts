// login.page.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from "../servicios/auth.service";

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app'
import "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class  LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  
  constructor(

    private navCtrl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth

  ) { }

  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }


  validation_messages = {
    'email': [
      { type: 'required', message: 'Ingresa un email porfavor.' },
      { type: 'pattern', message: 'Ingresa un email válido.' }
    ],
    'password': [
      { type: 'required', message: 'Ingresa tu contraseña porfavor.' },
      { type: 'minlength', message: 'La contraseña debe ser mínimo de 5 caractéres.' }
    ]
  };


  loginUser(value) {
    this.authService.loginUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.navCtrl.navigateForward('/dashboard');
      }, err => {
        this.errorMessage = err.message;
      })
  }



  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }

}
