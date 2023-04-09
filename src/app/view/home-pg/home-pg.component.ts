import { Component, OnInit } from '@angular/core';
import { NgProxyService } from 'src/app/services/ng-proxy.service';

@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.css']
})
export class HomePgComponent implements OnInit {

  users:any[]=[];
  userId:any;
  leftPanelStyle:any = {};
  currentRecord:any;
  constructor(private proxy:NgProxyService) { }
  
  ngOnInit(): void {
    this.proxy.getAllData().subscribe((response:any)=>{
      this.users = response;
      console.log(this.users)
      });
      this.closeContextMenu()
    }

    detechLeftMouseClick($event:any, user:any) {
      if($event.which === 1){
        this.leftPanelStyle = {
          'display': 'block',
          'position' : 'absolute',
         
        };
        this.currentRecord = user;
      }
    }
    closeContextMenu(){
      this.leftPanelStyle = {
        'display': 'none'
      };
    }

    goToDetailsPage(id:number){
      console.log(id)
    }

    onDelete(id:number):void{    
      this.closeContextMenu();
      confirm("Are you sure you want to delete "+ this.currentRecord.name +' details ?');
      console.log(id)

    }

  }
  // $("#context-menu").kendoContextMenu({
  //   target: "#grid",
  //   filter: "tr[role='row']",
  //   select: function(e) {
  //     var grid = $("#grid").data("kendoGrid");
  //     var model = grid.dataItem(e.target);
  //     alert( model.age + " " + model.name);
  //   }
  // });
