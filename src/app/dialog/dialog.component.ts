import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../model/user.model';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  userFormGroup = new FormGroup({});
  userViewModel: User = new User();

  constructor(private _userService: UserService, 
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.userViewModel = new User();
    this.userViewModel = this.data.pageValue == "" ? new User() : this.data.pageValue;
    this.userFormGroup.addControl('userId', new FormControl(this.userViewModel.userId ? this.userViewModel.userId : '', [Validators.required]));
    this.userFormGroup.addControl('id', new FormControl(this.userViewModel.id ? this.userViewModel.id : '', [Validators.required]));
    this.userFormGroup.addControl('title', new FormControl(this.userViewModel.title ? this.userViewModel.title : '', [Validators.required]));
    this.userFormGroup.addControl('status', new FormControl(this.userViewModel.completed ? this.userViewModel.completed : '', [Validators.required]));
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  clearInput(control: any) {
    this.userFormGroup.controls[control].setValue('');
  }

  saveUserDetails() {
    this.userViewModel = new User();
    this.userViewModel = this.userFormGroup.value;
  
   if(this.data.type == "Create"){
    this._userService.postUserData(this.userViewModel).subscribe(data => {
      debugger;
      this.closeModalDialog(data);
      this.openSnackBar('Created Sucessfully', 'Created')
    }, error => {
      console.log(error.message);
    });
    
   }else{
    this._userService.putUserData(this.userViewModel).subscribe(data => {
      debugger;
      console.log("Sucuss: " + data);
      this.openSnackBar('Updated Sucessfully', 'Updated')
    }, error => {
      console.log(error.message);
    })
   }
  }

  closeModalDialog(savedData: any) {
    this.dialogRef.close(savedData);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
