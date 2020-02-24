import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  url: any = "assets/p9.png";
  obj: any;
  constructor(private formBuilder: FormBuilder, private service: DataService) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      temporaryaddress: this.formBuilder.array([
        this.formBuilder.group({
          city: ['', Validators.required],
          state: ['', Validators.required],
          country: ['', Validators.required],
          pincode: ['', Validators.required],
          mobilenumber: ['', Validators.required]
        })
      ]),
      permananetaddress: this.formBuilder.array([
        this.formBuilder.group({
          city: ['', Validators.required],
          state: ['', Validators.required],
          country: ['', Validators.required],
          pincode: ['', Validators.required],
          mobilenumber: ['', Validators.required]
        })
      ]),
      image: ['']
    });
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: Event) => {
        this.url = reader.result;
        localStorage.setItem('imageurl', this.url)
        console.log(this.url)
      }
    }
  }
  get f() { return this.registerForm.controls }

  onSubmit() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.service.Data(this.registerForm.value).subscribe(resp => {
      console.log(resp)
      alert("Registered Successfully")
    })
    this.registerForm.reset();

  }
}
