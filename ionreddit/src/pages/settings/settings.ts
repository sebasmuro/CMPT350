import { Component } from '@angular/core';
import { AlertController ,  NavController, Platform } from 'ionic-angular';

import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  form;

  constructor(public navCtrl: AlertController, public platform: Platform) {
    if (this.platform.is('ios'))
    {
        alert("I am an apple designed device...... I wish I was android.");
    }
    else if (this.platform.is('android'))
    {
        alert("I am an android designed device.... I am the master race");
    }
    else
    {
        alert("I am a web based application!!! I am the old school!");
    }
    
    this.form = new FormGroup({
      firstName: new FormControl("", Validators.required),
    
    });

  }

  processForm() {
    let alert = this.navCtrl.create({
      title: "Account Created",
      message: "Created Account for: " + this.form.value.firstName ,
      buttons: [{
        text: 'Ok',
      }]
    });

    if (this.form.status === 'VALID') {
      alert.present()
    }
  }
  

}
