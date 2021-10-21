import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListTableComponent } from './user-list-table/user-list-table.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserResolver } from './users/user/user-resolver.service';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: 'create', component: CreateUserComponent},
    {path: ':id', component: UserComponent, resolve: {User: UserResolver}},
    {path: ':id/edit', component: EditUserComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
