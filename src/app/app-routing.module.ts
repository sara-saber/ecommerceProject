import { AdminComponent } from './modules/admin/admin/admin.component';
import { ShellModule } from './modules/shell/shell.module';
import { ShellComponent } from './modules/shell/shell.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path:'',
    component:ShellComponent,
    loadChildren:()=>ShellModule
  },
  {
    path:'admin',
    component:AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
