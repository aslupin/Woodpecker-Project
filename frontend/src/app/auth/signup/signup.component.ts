import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit ,OnDestroy{
  private authStatusSub:Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus=>{

      }
    )
  }

  onSignup(form: NgForm){
    if(form.invalid){
      return;
    }
    this.authService.createUser(form.value.email.toLowerCase(),form.value.password,form.value.verify);
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }
}
