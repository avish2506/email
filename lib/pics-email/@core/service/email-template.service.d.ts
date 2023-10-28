import { HttpService } from './http.service';
import * as i0 from "@angular/core";
export declare class EmailTemplateService {
    private http;
    constructor(http: HttpService);
    getTemplateList(_option: any): import("rxjs").Observable<Object>;
    createTemplate(modal: any): import("rxjs").Observable<Object>;
    getAllEmailTemplateCategories(): import("rxjs").Observable<Object>;
    getEmailTemplateList(id: any): import("rxjs").Observable<Object>;
    UpdateDeleteTemplate(id: any, modal: any): import("rxjs").Observable<Object>;
    checkDuplicateForUpdate(tempname: any, id: any): import("rxjs").Observable<Object>;
    checkDuplicateForCreate(tempname: any): import("rxjs").Observable<Object>;
    getVariableList(category: any): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailTemplateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EmailTemplateService>;
}
