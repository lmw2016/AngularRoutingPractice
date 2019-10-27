import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list.component';
import { OrderDetailComponent } from './order-detail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OrderListComponent, OrderDetailComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path:'', component:OrderListComponent},
      {path:':id',component:OrderDetailComponent},  

    ])

  ]
})
export class OrderModule { }
