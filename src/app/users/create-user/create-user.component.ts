import { Component, OnInit } from '@angular/core';
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
              private router: Router
              ) { }

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
    
    
  }

  onSubmit() {
    this.onAddUser();
    this.router.navigate(['users']);
  }

}