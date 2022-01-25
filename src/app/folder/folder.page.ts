import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public folder: string;
  constructor(private activatedRoute: ActivatedRoute, private umsService: UmsService) { }

  ngOnInit() {
  }

  login(username: string, password: string){
    this.umsService.login(username,password).subscribe(response=>{
      this.user=response;
    });

  }

  register(user: User){
    this.umsService.register(user).subscribe(response=>{
      this.user=response;
    });
  }

}
