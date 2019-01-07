import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import{Router, ActivatedRoute} from '@angular/router'
import {UserService} from '../Services/user-service.service'
import { AlertService } from '../Services/alert.service';
import { Gracz } from '../Models/Gracz';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-aktualizacja',
  templateUrl: './aktualizacja.component.html',
  styleUrls: ['./aktualizacja.component.css']
})
export class AktualizacjaComponent implements OnInit {
  updateForm: FormGroup;
  gracz: Gracz;
  loading = false;
  submitted = false;
  currentUser: Gracz;
  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private router: Router,
    private alertService:AlertService,
    private authenticationService: AuthServiceService) { 
      this.currentUser=this.authenticationService.currentUserValue;
    }

  ngOnInit() {
    this.updateForm=this.formBuilder.group({
      Imie:['',Validators.required],
      Nazwisko: ['',Validators.required],
      Login: ['',Validators.required],
      Email: ['',Validators.required],
      Wiek: ['',Validators.required],
      Wyksztalcenie:['',Validators.required]     
    });
  }
  get f(){return this.updateForm.controls;}

  onSubmit(){
    this.submitted=true;
    if(this.updateForm.invalid){
      return; 
    }
    this.gracz=Object.assign({},this.updateForm.value);
    
    this.loading=true;
    this.userService.updateUser(this.currentUser.id,this.gracz)
    .pipe(first())
    .subscribe(
      data=>{
        this.alertService.success('Aktualizacja zakończona powowdzeniem', true);
        this.router.navigate(['/moje-konto']);
      }
    )
  }
}
