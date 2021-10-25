import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../user.service";


interface User {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

@Injectable()

export class UserResolver implements Resolve<{id: number, firstName: string, lastName: string, dateOfBirth: string}> {
  
    constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<User> | Promise<User> | User {
    return this.userService.getUser(+route.params['id']);
  }
}
