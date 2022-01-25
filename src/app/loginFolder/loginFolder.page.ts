import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './loginFolder.page.html',
  styleUrls: ['./loginFolder.page.scss'],
})
export class FolderLoginPage implements OnInit {
  public folder: string;
  user: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
