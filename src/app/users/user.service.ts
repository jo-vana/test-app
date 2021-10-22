import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class UserService {

  private users = [
    {
      id: 1,
      firstName: 'Tim',
      lastName: 'Roth',
      dateOfBirth: '6/15/1970'
    },
    {
      id: 2,
      firstName: 'Bob',
      lastName: 'Seget',
      dateOfBirth: '6/20/1980'
    },
    {
      id: 3,
      firstName: 'Anna',
      lastName: 'Faris',
      dateOfBirth: '6/30/1990'
    }
  ]


  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find((u) => u.id === id);
   
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
    this.users.push(user);
  }

  removeUser(id: number, index: number) {
    this.users.splice(index, 1);
    // console.log('remove', index);
    
  }
}
