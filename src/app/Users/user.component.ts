import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { UserViewComponent } from '../user-view/user-view.component'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userID', 'title', 'status', 'edit', 'visibility', 'delete'];
  dataSource: any;
  value = 'Clear me';
  tableData: any;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _userService: UserService
    , public dialog: MatDialog
    ,private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this._userService.getUserData().subscribe(data => {
      this.tableData = data;
      this.dataSource = new MatTableDataSource<any>(this.tableData);
      this.getPagination();
    }, error => {
      console.log(error.message);
    })
  }

  getPagination() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(rowData: any, type: string) {

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      height: '400px',
      data: { pageValue: rowData, type: type }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      debugger;
      this.tableData.push(result);
      this.tableData[this.tableData.length - 1].completed = result.status;
        this.dataSource = new MatTableDataSource<Element>(this.tableData);
        this.getPagination();
    });
  }

  openUserViewDialog(rowData: any) {
    const dialogRef = this.dialog.open(UserViewComponent, {
      width: '350px',
      height: '420px',
      // backdropClass: 'custom-dialog-backdrop-class',
      //panelClass: 'custom-dialog-panel-class',
      data: { pageValue: rowData, clickType: 'view' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  deleteRow(rowData: any) {
    const index = this.tableData.findIndex((element, index) => {
      if (element.id == rowData.id) {
        this.tableData.splice(index,1)
        this.dataSource = new MatTableDataSource<Element>(this.tableData);
        this.getPagination();
        this.openSnackBar('deleted sucessfully','Delete')
        return true;
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
