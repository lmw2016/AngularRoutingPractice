import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import { Product, ProductListResolved } from "./product";
import { Observable, of } from "rxjs";
import { ProductService } from "./product.service";
import { map, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class ProductListResolver implements Resolve<ProductListResolved>{
    constructor(private productService: ProductService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<ProductListResolved> {
        return this.productService.getProducts()
        .pipe(
            map(pdts=>({products:pdts})),
            catchError(error=>{
                const message=`Retrieval error:${error}`;
                return of({products:null,error:message})
            })
        )
       
      
    }
    
}