import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharesRoutingModule } from './shares-routing.module';
import { FooterpageComponent } from './footerpage/footerpage.component';
import { NavbarpageComponent } from './navbarpage/navbarpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    FooterpageComponent,
    NavbarpageComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharesRoutingModule
  ]
})
export class SharesModule { }
