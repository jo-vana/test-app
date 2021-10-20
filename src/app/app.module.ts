import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UserListTableComponent } from './user-list-table/user-list-table.component';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { UserResolver } from './users/user/user-resolver.service';
import { CreateUserComponent } from './users/create-user/create-user.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    EditUserComponent,
    HomeComponent,
    UserListTableComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
