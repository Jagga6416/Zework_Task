import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatFormFieldModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
