import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from 'src/app/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  profileForm: FormGroup;
  user: {id: number, firstName: string, lastName:string, dateOfBirth: string}
  
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder
              ) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      'firstName': ['',Validators.required],
      'lastName': ['',Validators.required],
      'dateOfBirth': ['',Validators.required]
    });
    
  }

  onAddUser() {
    
    const value = this.profileForm.value;
    const newUser = new User(value.firstName, value.lastName, value.dateOfBirth);
    this.userService.createUser(newUser);
        
  }

  onSubmit() {
    this.onAddUser();
    this.router.navigate(['users']);
  }

}