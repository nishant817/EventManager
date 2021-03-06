import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './profile.component.html',
  styles: [`
  em {float:right; color:#E05C65; padding-left:10px;}
  .error input {background-color: #E3C3C5}
  .error ::-webkit-input-placeholder { color: #999; }
  .error ::-moz-placeholder { color: #999; }
  .error :-moz-placeholder { color: #999; }
  .error :ms-input-placeholder { color: #999; } 
  `]  
})

export class ProfileComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  ngOnInit(): void {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(this.auth.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')])

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues) {
    if(this.profileForm.valid) {
      this.auth.updateProfile(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }

  validateFirstName() {
    let isValid = (this.firstName.valid || this.firstName.untouched);
    return isValid;
  }

  validateLastName() {
    let isValid = (this.lastName.valid || this.lastName.untouched);
    return isValid;
  }

  cancel() {
    this.router.navigate(['events']);
  }
}