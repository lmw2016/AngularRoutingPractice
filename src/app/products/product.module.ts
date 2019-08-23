import { NgModule, Component } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductResolver } from './product-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([ //7th video
      {path:'products', component: ProductListComponent},
      {path:'products/:id',
        component:ProductDetailComponent,
        resolve:{resolvedData:ProductResolver}},  //with this change the resloved already worked
      {path:'products/:id/edit',
      component:ProductEditComponent,
        resolve:{resolvedData:ProductResolver}}
    ])  
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
