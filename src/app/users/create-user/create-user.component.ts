import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  profileForm: FormGroup;
  user: {id: number, firstName: string, lastName:string, dateOfBirth: string}
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      'dateOfBirth': new FormControl(null, [Validators.required])
    });
    
  }

  onAddUser() {
    const value = this.profileForm.value;
    const newUser = new User(value.firstName, value.lastName, value.dateOfBirth);
    this.userService.createUser(newUser);
    console.log("New user", newUser)
    
  }

  onSubmit() {
    this.onAddUser();
    // console.log('New user:', this.profileForm.value);
  }

}