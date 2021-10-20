import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
        // firstName: 'Tim',
        // lastName: 'Roth',
        // dateOfBirth: '6/15/1970'
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        dateOfBirth: this.user.dateOfBirth
    })
  }

  onUpdateUser() {
    console.log('Saved', this.userFirst)
    this.usersService.updateUser(this.user.id, {firstName: this.userFirst, lastName: this.userLast, dateOfBirth: this.userBirth});
    this.changesSaved = true;
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onSubmit() {
    console.log(this.profileForm);
  }
}