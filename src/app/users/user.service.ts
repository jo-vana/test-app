import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "../user.model";

@Injectable({providedIn: 'root'})

export class UserService {
  usersChanged = new Subject<User[]>();

  private users: User[] = [
    {
      id: 1,
      firstName: 'Tim',
      lastName: 'Roth',
      dateOfBirth: '1970-06-26'
    },
    {
      id: 2,
      firstName: 'Bob',
      lastName: 'Seget',
      dateOfBirth: '1980-07-01'
    },
    {
      id: 3,
      firstName: 'Anna',
      lastName: 'Faris',
      dateOfBirth: '1990-09-11'
    }
  ]

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find((u) => u.id === id);
   
  }

  setUsers(users: User[]) {
    this.users = users;
    this.usersChanged.next(this.users.slice());
  }

  updateUser(id: number, userInfo: {firstName: string, lastName: string, dateOfBirth: string}) {
    
    const user = this.users.find((u: any) => u.id === id);
    if (user) {
      user.firstName = userInfo.firstName;
      user.lastName = userInfo.lastName;
      user.dateOfBirth = userInfo.dateOfBirth;
    }
    console.log('Changed', user);
  }

  

  createUser(user: any) {
    let maxId = Math.max(...this.users.map(item => item.id));
    console.log('this is max',maxId)
    let newId = maxId > 0 ? maxId+1 : 1; //if id doesn't exist add id 1
    let objectTwo = {id: newId};
    let objectOne = user;
    let newObject = {...objectOne, ...objectTwo}
    const completeUser = (this.users.push(newObject));
  }

  removeUser(id: number, index: number) {
    this.users.splice(index, 1);
    // console.log('remove', index);  
  }
}
