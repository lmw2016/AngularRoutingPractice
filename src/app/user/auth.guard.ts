import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService:AuthService,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLoggIn(state.url);
  }

  canLoad(route:Route):boolean{
    return this.checkLoggIn(route.path);
  }

  checkLoggIn(url:string):boolean {
    if(this.authService.isLoggedIn){
      return true;
    }
    this.authService.redirectUrl=url;
    this.router.navigate(['/login']);
    return false;
  }
}
