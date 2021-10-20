import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: {id: number, firstName: string, lastName:string, dateOfBirth: string}

  constructor(private usersService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    console.log("Edit user");
  }

}