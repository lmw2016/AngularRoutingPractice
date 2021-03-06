import { NgModule } from "@angular/core";
import { RouterModule, PreloadAllModules } from "@angular/router";
import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { AuthGuard } from "./user/auth.guard";
import { AuthService } from "./user/auth.service";

@NgModule({
    imports:[
        RouterModule.forRoot([
            //4th video
            {
                path:'products',
                /*component:ProductListComponent,
                resolve:{resolvedData:ProductListResolver},*/
                canActivate:[AuthGuard],
                //canLoad:[AuthGuard], 
                loadChildren:"./products/product.module#ProductModule"
            },
            {
                path:'orders',
                //canActivate:[AuthGuard],
                canLoad:[AuthGuard], 
                loadChildren:"./orders/order.module#OrderModule"
            },
            {path:'welcome',component:WelcomeComponent},
            {path:'', redirectTo:'welcome',pathMatch:'full'},
            {path:'**',component:PageNotFoundComponent}
              //8th video : explicitly declard module are processed lastly!!
          ],{enableTracing:true, preloadingStrategy:PreloadAllModules}) // no , here
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}