import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

export interface CanComponentDeactivate{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;

}

export class canDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

    canDeactivate(component : CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                return component.canDeactivate();
        }
}