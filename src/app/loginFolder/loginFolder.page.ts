import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../classes/User';

@Component({
  selector: 'app-login',
  templateUrl: './loginFolder.page.html',
  styleUrls: ['./loginFolder.page.scss']
})
export class FolderLoginPage implements OnInit {
  public folder: string;
  user: User=new User();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
