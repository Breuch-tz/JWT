import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  public async login() {
    console.log(this.form.value)
    const val = this.form.value;

    if (val.email && val.password) {
      console.log("value")
      this.authService.login(val).subscribe((res) => {  //warum obs und nicht promise
        
        const token =  res;
        document.cookie = `token=${token}`

        console.log('User is logged in');
      });
    }
  }

//   public async logout(){
// this.authService.logout()

//   }

public async getExpiration(){
  this.authService.getExpiration();


}

  
}
