import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../data-storage.service';
import { User } from '../user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'dateOfBirth'];
  user: User;
  userId: number;
  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    // this.users = this.dataStorageService.fetchUsers();
    
    console.log('The start...', this.users);
  }

  onFetchUser($event: any) {
    
    this.users = this.dataStorageService.fetchUsers();
  }

  onRemoveUser(id: number, index: number) {
    this.userService.removeUser(id, index);
    this.router.navigate(['/users']);
  }


}
