import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissionStore } from './pics-email/@core/permissions/permission.store';
import { DataStoreService } from './pics-email/@core/service/data-store.service';
import { RBACINFO } from './pics-email/@core/urls/email-template-url.config';
import * as i0 from "@angular/core";
export declare class EmailComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    emailEvent: Observable<any>;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmailComponent, "email", never, { "RBACORG": "RBACORG"; "PERMISSION": "PERMISSION"; "emailEvent": "emailEvent"; }, {}, never, never>;
}
