import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: {id: number, firstName: string, lastName: string, dateOfBirth: string}[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'dateOfBirth'];


  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();

  }

  onRemoveUser(index: number) {
    this.userService.removeUser(index);
  }


}
