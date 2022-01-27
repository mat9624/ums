import { Component,  OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../classes/User';
import { UmsService } from '../services/ums.service';
import { LoginCommand } from '../commands/login.command';
import { RegisterCommand } from '../commands/register.command';
import { DeleteCommand } from '../commands/delete.command';

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
  loginCmd: LoginCommand
  deleteCmd: DeleteCommand
  public folder: string;

  constructor(private umsService: UmsService, private router: Router) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.loginCmd=new LoginCommand(email,password)

    this.umsService.login(this.loginCmd).subscribe(response => {
      if(response.length>0){
        this.isHidden=true;
        this.user = response;
        localStorage.setItem('token',this.user[0].token);
      }
      else{
      }

    });
  }

  elimina(){
    this.deleteCmd=new DeleteCommand(this.user[0].email);
    this.umsService.delete(this.deleteCmd).subscribe(response=>{
      this.isHidden=false;
    })
  }

  goToRegistration(){
    this.router.navigate(['/register']);
  }

}
