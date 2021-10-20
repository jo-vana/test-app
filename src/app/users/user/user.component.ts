import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router, Data, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: {id: number, firstName: string, lastName: string, dateOfBirth: string};

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.user = this.userService.getUser(id);

    this.route.params.subscribe((params: Params) => {
      id = +params['id'];
      this.user = this.userService.getUser(id);
    });
  }

  

}
