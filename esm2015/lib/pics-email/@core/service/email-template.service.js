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
        return this.http.patch('/solution/emailtemplate/template' + id, modal);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtdGVtcGxhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2VtYWlsL3NyYy9saWIvcGljcy1lbWFpbC9AY29yZS9zZXJ2aWNlL2VtYWlsLXRlbXBsYXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7O0FBTS9FLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsWUFBb0IsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUFHLENBQUM7SUFFekMsZUFBZSxDQUFDLE9BQVk7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFDRCxjQUFjLENBQUMsS0FBVTtRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFDRCw2QkFBNkI7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUNELG9CQUFvQixDQUFDLEVBQU87UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFDRCxvQkFBb0IsQ0FBQyxFQUFPLEVBQUUsS0FBVTtRQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsdUJBQXVCLENBQUMsUUFBYSxFQUFFLEVBQU87UUFDNUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsMEJBQTBCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0I7WUFDcEUsUUFBUTtZQUNSLEdBQUc7WUFDSCxFQUFFO1lBQ0YsMEJBQTBCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FDekUsQ0FBQztJQUNKLENBQUM7SUFDRCx1QkFBdUIsQ0FBQyxRQUFhO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLDBCQUEwQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsd0JBQXdCO1lBQ3BFLFFBQVE7WUFDUiwwQkFBMEIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUNyRSxDQUFDO0lBQ0osQ0FBQztJQUNELGVBQWUsQ0FBQyxRQUFhO1FBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUNwRyxDQUFDOztrSEFwQ1Usb0JBQW9CO3NIQUFwQixvQkFBb0IsY0FGbkIsTUFBTTs0RkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFbWFpbFRlbXBsYXRlU2VydmljZUNvbmZpZyB9IGZyb20gJy4uL3VybHMvZW1haWwtdGVtcGxhdGUtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1haWxUZW1wbGF0ZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cFNlcnZpY2UpIHt9XHJcblxyXG4gIGdldFRlbXBsYXRlTGlzdChfb3B0aW9uOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEVtYWlsVGVtcGxhdGVTZXJ2aWNlQ29uZmlnLkVuZFBvaW50LkVtYWlsVGVtcC5nZXRMaXN0KTtcclxuICB9XHJcbiAgY3JlYXRlVGVtcGxhdGUobW9kYWw6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEVtYWlsVGVtcGxhdGVTZXJ2aWNlQ29uZmlnLkVuZFBvaW50LkVtYWlsVGVtcC5DcmVhdGVUZW1wbGF0ZSwgbW9kYWwpO1xyXG4gIH1cclxuICBnZXRBbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllcygpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEVtYWlsVGVtcGxhdGVTZXJ2aWNlQ29uZmlnLkVuZFBvaW50LkVtYWlsVGVtcC5HZXRBbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllcyk7XHJcbiAgfVxyXG4gIGdldEVtYWlsVGVtcGxhdGVMaXN0KGlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEVtYWlsVGVtcGxhdGVTZXJ2aWNlQ29uZmlnLkVuZFBvaW50LkVtYWlsVGVtcC5HZXRFbWFpbFRlbXBsYXRlTGlzdCArIGlkKTtcclxuICB9XHJcbiAgVXBkYXRlRGVsZXRlVGVtcGxhdGUoaWQ6IGFueSwgbW9kYWw6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCgnL3NvbHV0aW9uL2VtYWlsdGVtcGxhdGUvdGVtcGxhdGUnICsgaWQsIG1vZGFsKTtcclxuICB9XHJcbiAgY2hlY2tEdXBsaWNhdGVGb3JVcGRhdGUodGVtcG5hbWU6IGFueSwgaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgIEVtYWlsVGVtcGxhdGVTZXJ2aWNlQ29uZmlnLkVuZFBvaW50LkVtYWlsVGVtcC5DaGVja0R1cGxpY2F0ZUZvclVwZGF0ZTEgK1xyXG4gICAgICAgIHRlbXBuYW1lICtcclxuICAgICAgICAnLycgK1xyXG4gICAgICAgIGlkICtcclxuICAgICAgICBFbWFpbFRlbXBsYXRlU2VydmljZUNvbmZpZy5FbmRQb2ludC5FbWFpbFRlbXAuQ2hlY2tEdXBsaWNhdGVGb3JVcGRhdGUyXHJcbiAgICApO1xyXG4gIH1cclxuICBjaGVja0R1cGxpY2F0ZUZvckNyZWF0ZSh0ZW1wbmFtZTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcclxuICAgICAgRW1haWxUZW1wbGF0ZVNlcnZpY2VDb25maWcuRW5kUG9pbnQuRW1haWxUZW1wLkNoZWNrRHVwbGljYXRlRm9yVXBkYXRlMSArXHJcbiAgICAgICAgdGVtcG5hbWUgK1xyXG4gICAgICAgIEVtYWlsVGVtcGxhdGVTZXJ2aWNlQ29uZmlnLkVuZFBvaW50LkVtYWlsVGVtcC5jaGVja0R1cGxpY2F0ZUNyZWF0ZVxyXG4gICAgKTtcclxuICB9XHJcbiAgZ2V0VmFyaWFibGVMaXN0KGNhdGVnb3J5OiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEVtYWlsVGVtcGxhdGVTZXJ2aWNlQ29uZmlnLkVuZFBvaW50LkVtYWlsVGVtcC50ZW1wbGF0ZVBhcmFtZXRlcnMgKyBjYXRlZ29yeSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==