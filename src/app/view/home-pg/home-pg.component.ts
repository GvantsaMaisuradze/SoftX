import { Component, OnInit } from '@angular/core';
import { NgProxyService } from 'src/app/services/ng-proxy.service';

@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.css']
})
export class HomePgComponent implements OnInit {

  constructor(private proxy:NgProxyService) { }
  users:any;
  ngOnInit(): void {
    this.proxy.getAllData().subscribe((response:any)=>{
      this.users = response;
      console.log(this.users)
    })
  }

}
