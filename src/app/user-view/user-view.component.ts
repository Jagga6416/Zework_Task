import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})


export class UserViewComponent implements OnInit {
  title = "User View"
  viewData : any;

  constructor( public dialogRef: MatDialogRef<UserViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.viewData = data;
      debugger;
    }

  ngOnInit(): void {
    debugger;
    this.data;
  }

  closeModalDialog(){
    this.dialogRef.close();
  }

  
}
 

