import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AlertService } from './alert.service';
import { HttpService } from './http.service';
import { LocalService } from './local.service';
import * as i0 from "@angular/core";
export declare class AuthService {
    private httpService;
    private _router;
    private localstore;
    sharedInfo: any;
    alertService: AlertService;
    constructor(injector: Injector, httpService: HttpService, _router: Router, localstore: LocalService);
    orgInfo: BehaviorSubject<any>;
    currentOrgInfo: import("rxjs").Observable<any>;
    currentMenu: BehaviorSubject<any>;
    currentMenuInfo: import("rxjs").Observable<any>;
    getRoleKey(): any;
    isAdmin(): boolean;
    getOrgID(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
