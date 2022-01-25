import {Component, OnInit} from '@angular/core';
import {User} from '../classes/User';
import {UmsService} from '../services/ums.service';

@Component({
  selector: 'app-login',
  templateUrl: './loginFolder.page.html',
  styleUrls: ['./loginFolder.page.scss']
})
export class FolderLoginPage implements OnInit {
  public folder: string;
  user: User = new User();
  created =false;

  constructor(private umsService: UmsService) {
  }

  ngOnInit() {
  }

  createUser(user: User) {
    this.umsService.register(user).subscribe(response => {
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
