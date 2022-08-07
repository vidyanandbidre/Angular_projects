import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConterComponent } from './conter/conter.component';

const routes: Routes = [
  {path:'counter',component:ConterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
