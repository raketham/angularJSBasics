import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {ChildComponent} from './child/child.component';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, HeaderComponent,FooterComponent,
     NavbarComponent, FormsModule, ChildComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
  name="Raja";
  username="";
  count=0;
  showUsers=true;
  users:string[];
  constructor(private userService:UserService){
    this.users=userService.getUsers();
  }
  toggleUser(){
    this.showUsers=!this.showUsers
  }
  increseCount(){
    this.count++;
  }
  msg="";
  onChildMesssage(data:string){
    this.msg = data;
  }
}
