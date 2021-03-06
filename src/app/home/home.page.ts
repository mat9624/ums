import { Component,  OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UmsService } from '../services/ums.service';
import { LoginCommand } from '../commands/login.command';
import { DeleteCommand } from '../commands/delete.command';

@Component({
  selector: 'app-folder',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
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
      if(response){
        this.isHidden=true;
        this.user = response;
        localStorage.setItem('token',this.user.token);
      }
      else{
      }

    });
  }

  elimina(){
    this.deleteCmd=new DeleteCommand(this.user.email);
    this.umsService.delete(this.deleteCmd).subscribe(response=>{
      this.isHidden=false;
    })
  }

  goToRegistration(){
    this.router.navigate(['/register']);
  }

}
