import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgProxyService } from 'src/app/services/ng-proxy.service';

@Component({
  selector: 'app-details-pg',
  templateUrl: './details-pg.component.html',
  styleUrls: ['./details-pg.component.css']
})
export class DetailsPgComponent implements OnInit {
user:any;
users:any[] = [];
  constructor( private router:Router, private proxy:NgProxyService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.proxy.getAllData().subscribe((response:any)=>{
      this.users = response;
      console.log(this.users)
      });
      
  }
  

}
