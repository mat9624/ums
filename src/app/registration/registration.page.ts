import {Component, OnInit} from '@angular/core';
import {User} from '../classes/User';
import { RegisterCommand } from '../commands/register.command';
import {UmsService} from '../services/ums.service';

@Component({
  selector: 'app-login',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss']
})
export class RegistrationPage implements OnInit {
  public folder: string;
  user: User = new User();
  created =false;
  registerCmd: RegisterCommand

  constructor(private umsService: UmsService) {
  }

  ngOnInit() {
  }

  createUser(user: User) {
    this.registerCmd=new RegisterCommand(user.name, user.surname, user.email, user.password)
    this.umsService.register(this.registerCmd).subscribe(response => {
      if(response.email===user.email){
        this.created=true;
      }
    });
  }

  assignProperty(index: string, $event: any) {
    if (index === '0') {
      this.user.name = $event.detail.value;
    }
    else if (index === '1') {
      this.user.surname = $event.detail.value;
    }
    else if (index === '2') {
      this.user.email = $event.detail.value;
    }
    else if (index === '3') {
      this.user.password = $event.detail.value;
    }
  }
}
