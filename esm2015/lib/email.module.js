import { NgModule } from '@angular/core';
import { EmailComponent } from './email.component';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { PermissionStore } from './pics-email/@core/permissions/permission.store';
import { AlertService } from './pics-email/@core/service/alert.service';
import { DataStoreService } from './pics-email/@core/service/data-store.service';
import { HttpService } from './pics-email/@core/service/http.service';
import { PicsEmailModule } from './pics-email/pics-email.module';
import { EmailTemplateService } from './pics-email/@core/service/email-template.service';
import { AuthService } from './pics-email/@core/service/auth.service';
import * as i0 from "@angular/core";
export class CardiEmailModule {
}
CardiEmailModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiEmailModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardiEmailModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiEmailModule, declarations: [EmailComponent], imports: [PicsEmailModule], exports: [EmailComponent] });
CardiEmailModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiEmailModule, providers: [EmailTemplateService, HttpClient, HttpService, AlertService, ConfirmationService, PermissionStore, DataStoreService, AuthService], imports: [[
            PicsEmailModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardiEmailModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EmailComponent
                    ],
                    imports: [
                        PicsEmailModule
                    ],
                    exports: [
                        EmailComponent
                    ],
                    providers: [EmailTemplateService, HttpClient, HttpService, AlertService, ConfirmationService, PermissionStore, DataStoreService, AuthService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvZW1haWwvc3JjL2xpYi9lbWFpbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDekYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztBQWdCdEUsTUFBTSxPQUFPLGdCQUFnQjs7OEdBQWhCLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGlCQVZ6QixjQUFjLGFBR2QsZUFBZSxhQUdmLGNBQWM7K0dBSUwsZ0JBQWdCLGFBRmhCLENBQUMsb0JBQW9CLEVBQUcsVUFBVSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFDLFdBQVcsQ0FBQyxZQU5wSTtZQUNQLGVBQWU7U0FDaEI7NEZBTVUsZ0JBQWdCO2tCQVo1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsY0FBYztxQkFDZjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRyxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUMsV0FBVyxDQUFDO2lCQUM5SSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVtYWlsQ29tcG9uZW50IH0gZnJvbSAnLi9lbWFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uU3RvcmUgfSBmcm9tICcuL3BpY3MtZW1haWwvQGNvcmUvcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZSc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4vcGljcy1lbWFpbC9AY29yZS9zZXJ2aWNlL2FsZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLWVtYWlsL0Bjb3JlL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL3BpY3MtZW1haWwvQGNvcmUvc2VydmljZS9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQaWNzRW1haWxNb2R1bGUgfSBmcm9tICcuL3BpY3MtZW1haWwvcGljcy1lbWFpbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBFbWFpbFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vcGljcy1lbWFpbC9AY29yZS9zZXJ2aWNlL2VtYWlsLXRlbXBsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vcGljcy1lbWFpbC9AY29yZS9zZXJ2aWNlL2F1dGguc2VydmljZSc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBFbWFpbENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgUGljc0VtYWlsTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBFbWFpbENvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbRW1haWxUZW1wbGF0ZVNlcnZpY2UgLCBIdHRwQ2xpZW50LCBIdHRwU2VydmljZSwgQWxlcnRTZXJ2aWNlLCBDb25maXJtYXRpb25TZXJ2aWNlLCBQZXJtaXNzaW9uU3RvcmUsIERhdGFTdG9yZVNlcnZpY2UsQXV0aFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkaUVtYWlsTW9kdWxlIHsgfVxyXG4iXX0=