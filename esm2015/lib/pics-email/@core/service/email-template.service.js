import { Injectable } from '@angular/core';
import { EmailTemplateServiceConfig } from '../urls/email-template-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./http.service";
export class EmailTemplateService {
    constructor(http) {
        this.http = http;
    }
    getTemplateList(_option) {
        return this.http.get(EmailTemplateServiceConfig.EndPoint.EmailTemp.getList);
    }
    createTemplate(modal) {
        return this.http.post(EmailTemplateServiceConfig.EndPoint.EmailTemp.CreateTemplate, modal);
    }
    getAllEmailTemplateCategories() {
        return this.http.get(EmailTemplateServiceConfig.EndPoint.EmailTemp.GetAllEmailTemplateCategories);
    }
    getEmailTemplateList(id) {
        return this.http.get(EmailTemplateServiceConfig.EndPoint.EmailTemp.GetEmailTemplateList + id);
    }
    UpdateDeleteTemplate(id, modal) {
        return this.http.patch(EmailTemplateServiceConfig.EndPoint.EmailTemp.UpdateDeleteTemplate + id, modal);
    }
    checkDuplicateForUpdate(tempname, id) {
        return this.http.get(EmailTemplateServiceConfig.EndPoint.EmailTemp.CheckDuplicateForUpdate1 +
            tempname +
            '/' +
            id +
            EmailTemplateServiceConfig.EndPoint.EmailTemp.CheckDuplicateForUpdate2);
    }
    checkDuplicateForCreate(tempname) {
        return this.http.get(EmailTemplateServiceConfig.EndPoint.EmailTemp.CheckDuplicateForUpdate1 +
            tempname +
            EmailTemplateServiceConfig.EndPoint.EmailTemp.checkDuplicateCreate);
    }
    getVariableList(category) {
        return this.http.get(EmailTemplateServiceConfig.EndPoint.EmailTemp.templateParameters + category);
    }
}
EmailTemplateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EmailTemplateService, deps: [{ token: i1.HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
EmailTemplateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EmailTemplateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EmailTemplateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtdGVtcGxhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2VtYWlsL3NyYy9saWIvcGljcy1lbWFpbC9AY29yZS9zZXJ2aWNlL2VtYWlsLXRlbXBsYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7O0FBTS9FLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsWUFBb0IsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUFHLENBQUM7SUFFekMsZUFBZSxDQUFDLE9BQVk7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFDRCxjQUFjLENBQUMsS0FBVTtRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFDRCw2QkFBNkI7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUNELG9CQUFvQixDQUFDLEVBQU87UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFDRCxvQkFBb0IsQ0FBQyxFQUFPLEVBQUUsS0FBVTtRQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFDRCx1QkFBdUIsQ0FBQyxRQUFhLEVBQUUsRUFBTztRQUM1QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQiwwQkFBMEIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHdCQUF3QjtZQUNwRSxRQUFRO1lBQ1IsR0FBRztZQUNILEVBQUU7WUFDRiwwQkFBMEIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUN6RSxDQUFDO0lBQ0osQ0FBQztJQUNELHVCQUF1QixDQUFDLFFBQWE7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsMEJBQTBCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0I7WUFDcEUsUUFBUTtZQUNSLDBCQUEwQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQ3JFLENBQUM7SUFDSixDQUFDO0lBQ0QsZUFBZSxDQUFDLFFBQWE7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7O2tIQXBDVSxvQkFBb0I7c0hBQXBCLG9CQUFvQixjQUZuQixNQUFNOzRGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVtYWlsVGVtcGxhdGVTZXJ2aWNlQ29uZmlnIH0gZnJvbSAnLi4vdXJscy9lbWFpbC10ZW1wbGF0ZS11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbFRlbXBsYXRlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwU2VydmljZSkge31cclxuXHJcbiAgZ2V0VGVtcGxhdGVMaXN0KF9vcHRpb246IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoRW1haWxUZW1wbGF0ZVNlcnZpY2VDb25maWcuRW5kUG9pbnQuRW1haWxUZW1wLmdldExpc3QpO1xyXG4gIH1cclxuICBjcmVhdGVUZW1wbGF0ZShtb2RhbDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoRW1haWxUZW1wbGF0ZVNlcnZpY2VDb25maWcuRW5kUG9pbnQuRW1haWxUZW1wLkNyZWF0ZVRlbXBsYXRlLCBtb2RhbCk7XHJcbiAgfVxyXG4gIGdldEFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoRW1haWxUZW1wbGF0ZVNlcnZpY2VDb25maWcuRW5kUG9pbnQuRW1haWxUZW1wLkdldEFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzKTtcclxuICB9XHJcbiAgZ2V0RW1haWxUZW1wbGF0ZUxpc3QoaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoRW1haWxUZW1wbGF0ZVNlcnZpY2VDb25maWcuRW5kUG9pbnQuRW1haWxUZW1wLkdldEVtYWlsVGVtcGxhdGVMaXN0ICsgaWQpO1xyXG4gIH1cclxuICBVcGRhdGVEZWxldGVUZW1wbGF0ZShpZDogYW55LCBtb2RhbDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKEVtYWlsVGVtcGxhdGVTZXJ2aWNlQ29uZmlnLkVuZFBvaW50LkVtYWlsVGVtcC5VcGRhdGVEZWxldGVUZW1wbGF0ZSArIGlkLCBtb2RhbCk7XHJcbiAgfVxyXG4gIGNoZWNrRHVwbGljYXRlRm9yVXBkYXRlKHRlbXBuYW1lOiBhbnksIGlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICBFbWFpbFRlbXBsYXRlU2VydmljZUNvbmZpZy5FbmRQb2ludC5FbWFpbFRlbXAuQ2hlY2tEdXBsaWNhdGVGb3JVcGRhdGUxICtcclxuICAgICAgICB0ZW1wbmFtZSArXHJcbiAgICAgICAgJy8nICtcclxuICAgICAgICBpZCArXHJcbiAgICAgICAgRW1haWxUZW1wbGF0ZVNlcnZpY2VDb25maWcuRW5kUG9pbnQuRW1haWxUZW1wLkNoZWNrRHVwbGljYXRlRm9yVXBkYXRlMlxyXG4gICAgKTtcclxuICB9XHJcbiAgY2hlY2tEdXBsaWNhdGVGb3JDcmVhdGUodGVtcG5hbWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgIEVtYWlsVGVtcGxhdGVTZXJ2aWNlQ29uZmlnLkVuZFBvaW50LkVtYWlsVGVtcC5DaGVja0R1cGxpY2F0ZUZvclVwZGF0ZTEgK1xyXG4gICAgICAgIHRlbXBuYW1lICtcclxuICAgICAgICBFbWFpbFRlbXBsYXRlU2VydmljZUNvbmZpZy5FbmRQb2ludC5FbWFpbFRlbXAuY2hlY2tEdXBsaWNhdGVDcmVhdGVcclxuICAgICk7XHJcbiAgfVxyXG4gIGdldFZhcmlhYmxlTGlzdChjYXRlZ29yeTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChFbWFpbFRlbXBsYXRlU2VydmljZUNvbmZpZy5FbmRQb2ludC5FbWFpbFRlbXAudGVtcGxhdGVQYXJhbWV0ZXJzICsgY2F0ZWdvcnkpO1xyXG4gIH1cclxufVxyXG4iXX0=