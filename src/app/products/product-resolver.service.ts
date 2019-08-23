import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Product, ProductResolved } from "./product";
import { Injectable } from "@angular/core";
import {Observable, of} from 'rxjs'
import { ProductService } from "./product.service";
import { catchError, map } from "rxjs/operators";


@Injectable({
    providedIn:'root'
})
export class ProductResolver implements Resolve<ProductResolved>{  //Product

   constructor(private productService:ProductService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<ProductResolved> { //Product

        //no error handling
       // const id=+route.paramMap.get('id');
       // return this.productService.getProduct(id);

       const id=route.paramMap.get('id');
       if(isNaN(+id)){
           const message=`Product id was not a number; ${id}`;
           console.error(message);
           return of({product:null,error:message});
       }

       return this.productService.getProduct(+id)
       .pipe(
           map(pdt=>({product:pdt})),
           catchError(error=>{
               const message=`Retrieval error: ${error}`;
               console.error(message);
               return of({product:null,error:message})
           })
       )
    }
    
}