import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: {id: number, firstName: string, lastName:string, dateOfBirth: string}
  userFirst='';
  userLast='';
  userBirth='';
  changesSaved = false;
  id: number;
  profileForm: FormGroup;

  constructor(private usersService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      
      
      let userId = +params.get('id');
      let users = this.usersService.getUsers();

      this.user = users.find(u => u.id == userId);
      
      console.log(userId);
      this.profileForm = this.formBuilder.group({
        'firstName': ['',Validators.required],
        'lastName': ['',Validators.required],
        'dateOfBirth': ['',Validators.required]
      });
  
      this.profileForm.setValue({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          dateOfBirth: this.user.dateOfBirth
      });

    })

    // this.profileForm = new FormGroup({
    //   'firstName': new FormControl(null, [Validators.required]),
    //   'lastName': new FormControl(null, [Validators.required]),
    //   'dateOfBirth': new FormControl(null, [Validators.required])
    // });
    
    
  }

  onUpdateUser() {
    const newValue = this.profileForm.value;
    this.usersService.updateUser(this.user.id, {firstName: newValue.firstName, lastName: newValue.lastName, dateOfBirth: newValue.dateOfBirth});

  }


  onSubmit() {
    this.onUpdateUser();
    this.changesSaved = true;
    this.router.navigate(['../../'], {relativeTo: this.route});
    // console.log(this.profileForm);
  }
}