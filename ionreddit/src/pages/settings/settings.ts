import { Component } from '@angular/core';
import { AlertController ,  NavController } from 'ionic-angular';

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  form;

  constructor(public navCtrl: AlertController) {
    
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
