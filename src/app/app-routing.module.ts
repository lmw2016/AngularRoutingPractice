import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from "./page-not-found.component";

@NgModule({
    imports:[
        RouterModule.forRoot([
            //4th video
            {path:'welcome',component:WelcomeComponent},
            {path:'', redirectTo:'welcome',pathMatch:'full'},
            {path:'**',component:PageNotFoundComponent}
              //8th video : explicitly declard module are processed lastly!!
          ]) // no , here
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}