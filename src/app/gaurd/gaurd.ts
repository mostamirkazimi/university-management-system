import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = ()=>{
    const router = inject(Router);
        const loggeUser = localStorage.getItem("login");

        if(loggeUser != null){
            return true;
        }
        else{
            router.navigateByUrl('/login');
            return false;
        }
    

}