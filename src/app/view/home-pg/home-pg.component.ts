import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgProxyService } from 'src/app/services/ng-proxy.service';

@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.css']
})
export class HomePgComponent implements OnInit {
  user:any;
  users:any[]=[];
  leftPanelStyle:any = {};
  currentRecord:any;
  constructor(private proxy:NgProxyService, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.proxy.getAllData().subscribe((response:any)=>{
      this.users = response;
    });
    this.closeContextMenu()
  }

  detechLeftMouseClick($event:any, user:any) {
    if($event.which === 1){
      this.leftPanelStyle = {
        'display': 'grid',
        'position' : 'absolute',
        'left.px' : $event.layerX,
        'top.px' : $event.layerY,
      };
      this.currentRecord = user;
    }
  }
  
  closeContextMenu(){
    this.leftPanelStyle = {
      'display': 'none'
    };
  }

  onDelete(id:number):void{    
    this.closeContextMenu();
    if (confirm("Are you sure you want to delete "+ this.currentRecord.name +' details ?')) {
      const index = this.users.findIndex(user => user.id === id);
      this.users.splice(index, 1);
    }
  }
}