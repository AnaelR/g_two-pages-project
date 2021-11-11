import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  contactForm: FormGroup
  static readonly EMAIL = /^.+\@\S+\.\S+$/
  validForm: boolean = false
  sendForm: boolean = false

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern(FormComponent.EMAIL)]),
      subject: new FormControl(null, [Validators.required]),
      comments: new FormControl(null, [Validators.required]),
      conditions: new FormControl(null, [Validators.required])
    })
  }

  submitForm(){
    if (this.contactForm.invalid) {
      this.validForm = true
    } else {
      console.log(this.contactForm.value)
      this.sendForm = true
    }
  }

  resetForm(): void{
    this.sendForm = false
    this.contactForm.reset()
  }

  ngOnInit(): void {
  }

}
