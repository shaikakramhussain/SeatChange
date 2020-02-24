import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    msg: any;
    status: boolean = false;
    fnPattern: any;
    lnPattern: any;
    emailPattern: any;
    mobPattern: any;

    constructor(private formBuilder: FormBuilder,private router: Router) { }
    date = new Date().toISOString().slice(0,10);
    ngOnInit() {
        this.fnPattern = /^[a-zA-Z \-\']+$/;
        this.lnPattern = /^[a-zA-Z \-\']+$/;
        this.emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        this.mobPattern = /^[7-9]\d{9}$/;

        
        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.pattern(this.fnPattern)]],
            lastName: ['', [Validators.required, Validators.pattern(this.lnPattern)]],
            email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
            mobile: ['', [Validators.required, Validators.pattern(this.mobPattern)]],
            dob: ['', Validators.required]
        });
    }
    get f() { return this.registerForm.controls; }
    onSubmit() {
        //debugger;
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }else{
            this.msg = "You have been successfully registered";
            this.registerForm.reset();
            this.submitted = false;
            this.status = true;
        }
    }
    goHome() {
        this.router.navigate(['/student']); (3)
      }
}
