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
  user: any;
  isHidden = false;
  public folder: string;

  constructor(private umsService: UmsService, private router: Router) { }

  ngOnInit() {
  }

  login(username: string, password: string) {

    this.umsService.login(username, password).subscribe(response => {
      if(response.length>0){
        this.isHidden=true;
        this.user = response;
        localStorage.setItem('token',this.user[0].token);
      }
      else{
      }

    });
  }

  register(user: User){
    this.umsService.register(user).subscribe(response=>{
      this.user[0]=response;
    });
  }
  elimina(){
    this.umsService.delete(this.user[0].email).subscribe(response=>{
      this.isHidden=false;
    })
  }

  goToRegistration(){
    this.router.navigate(['/register']);
  }

}
