import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
// import { userInfo } from 'os';
import { UserService } from '../user.service';

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

  profileForm: FormGroup;

  constructor(private usersService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    console.log("Edit user");
    
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.user = this.usersService.getUser(id);
    this.userFirst = this.user.firstName;
    this.userLast = this.user.lastName;
    this.userBirth = this.user.dateOfBirth;

    this.profileForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      'dateOfBirth': new FormControl(null, [Validators.required])
    });

    this.profileForm.setValue({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        dateOfBirth: this.user.dateOfBirth
    });

    this.profileForm.valueChanges.subscribe(selectedValue => {
      console.log('form value changed')
      console.log(selectedValue)
    })

    
  }


  onSubmit() {
    this.changesSaved = true;
    this.router.navigate(['../../'], {relativeTo: this.route});
    console.log(this.profileForm);
  }
}