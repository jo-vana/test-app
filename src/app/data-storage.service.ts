import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { UserService } from "./users/user.service";


@Injectable({providedIn: 'root'})

export class DataStorageService {
    constructor(private http: HttpClient, private userService: UserService) {

    }

    storeUsers() {
        const users = this.userService.getUsers();
        this.http.post('https://test-app-171e0-default-rtdb.firebaseio.com/users.json', users).subscribe(
            response => {
                console.log(response);
            }
        );
    }

    fetchUsers() {
        
        this.http.get<User[]>('https://test-app-171e0-default-rtdb.firebaseio.com/users.json')
            
            .subscribe(users => {
                this.userService.setUsers(users);
                console.log('This is a new users list:', users);

            })
    }
}