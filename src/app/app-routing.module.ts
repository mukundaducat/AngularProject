import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './module/layouts/blank/blank.component';
import { FullComponent } from './module/layouts/full/full.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        redirectTo:'auth',
        pathMatch:'full'
      },
      {
        path:'auth',
        component:BlankComponent,
        loadChildren:()=> import('./module/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path:'dashboard',
        component:FullComponent,
        loadChildren: ()=> import('./module/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
