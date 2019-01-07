import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';
import {Router,ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AlertService} from '../Services/alert.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  loading=false;
  submitted=false;
  returnUrl: string;
  error='';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthServiceService,
    private alertService: AlertService,
    private formBuilder:FormBuilder) { 
      //przekieruje do home jesli zalogowany
      if(this.authenticationService.currentUserValue){
        this.router.navigate(['/']);
    }
  }
  
  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      Login:['',Validators.required],
      Haslo:['',Validators.required]
    });
    this.returnUrl=this.route.snapshot.queryParams['returnUrl']||'/';
    }

  get f(){return this.loginForm.controls;}

  onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return;
    }
    this.loading=true;
    this.authenticationService.login(this.f.Login.value, this.f.Haslo.value)
    .pipe(first())
    .subscribe(
      data=>{
        console.log("zalogowany");
        
        this.router.navigate([this.returnUrl]);
        
      },
      error=>{
        this.error=error;
        this.loading=false;
      }
    )
  }
}


