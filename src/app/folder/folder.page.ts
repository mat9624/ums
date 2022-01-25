import { Component,  OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../classes/User';
import { UmsService } from '../services/ums.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  username: string;
  password: string;
  user: User;
  isHidden = false;
  public folder: string;

  constructor(private umsService: UmsService, private router: Router) { }

  ngOnInit() {
  }

  login(username: string, password: string) {

    this.umsService.login(username, password).subscribe(response => {
      // eslint-disable-next-line no-debugger
      if(response.length>0){
        this.isHidden=true;
        this.user[0] = response;
      }
      else{
      }

    });
  }

  register(user: User){
    this.umsService.register(user).subscribe(response=>{
      this.user=response;
    });
  }

  goToRegistration(){
    this.router.navigate(['/register']);
  }

}
