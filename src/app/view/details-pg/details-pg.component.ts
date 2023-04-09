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
  constructor( private router:Router, private proxy:NgProxyService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.proxy.getDataById(id).subscribe((response: any) => {
        this.user = response;
        console.log(this.user);
      });
    }
  }

}
