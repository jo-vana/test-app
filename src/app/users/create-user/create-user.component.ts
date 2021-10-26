import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from 'src/app/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  profileForm: FormGroup;
  user: {id: number, firstName: string, lastName:string, dateOfBirth: string}
  birthDate = "";
  currentDate: Date;
  wrongDate= false;
  
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              public datePipe: DatePipe
              ) { 
  }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      'firstName': ['',Validators.required],
      'lastName': ['',Validators.required],
      'dateOfBirth': ['',[Validators.required]]
    });
    
  }

  onAddUser() {
    const value = this.profileForm.value;
    const newUser = new User(value.firstName, value.lastName, value.dateOfBirth);
    this.birthDate = newUser.dateOfBirth;
    this.currentDate = new Date();
    let currentDateTransform = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
    
    if (this.birthDate >= currentDateTransform) {
      // console.log("This is wrong date",currentDateTransform);
      return this.wrongDate === true;
    }
    this.userService.createUser(newUser);
    this.router.navigate(['users']);
        
  }

  onSubmit() {
    this.onAddUser();
  }

}