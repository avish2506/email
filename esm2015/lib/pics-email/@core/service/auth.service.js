import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AlertService } from './alert.service';
import * as i0 from "@angular/core";
import * as i1 from "./http.service";
import * as i2 from "@angular/router";
import * as i3 from "./local.service";
export class AuthService {
    constructor(injector, httpService, _router, localstore) {
        this.httpService = httpService;
        this._router = _router;
        this.localstore = localstore;
        this.orgInfo = new BehaviorSubject('');
        this.currentOrgInfo = this.orgInfo.asObservable();
        this.currentMenu = new BehaviorSubject('');
        this.currentMenuInfo = this.currentMenu.asObservable();
        this.alertService = injector.get(AlertService);
    }
    getRoleKey() {
        const user = this.localstore.getObj('user');
        if (user && user.role) {
            return user.role.rolekey;
        }
    }
    isAdmin() {
        return 'ADM' === this.getRoleKey();
    }
    getOrgID() {
        const user = this.localstore.getObj('user');
        if (user && user.userWorkInfo && user.userWorkInfo.organization && user.userWorkInfo.organization.id) {
            return user.userWorkInfo.organization.id;
        }
        else {
            return '';
        }
    }
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, deps: [{ token: i0.Injector }, { token: i1.HttpService }, { token: i2.Router }, { token: i3.LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.HttpService }, { type: i2.Router }, { type: i3.LocalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvZW1haWwvc3JjL2xpYi9waWNzLWVtYWlsL0Bjb3JlL3NlcnZpY2UvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBUy9DLE1BQU0sT0FBTyxXQUFXO0lBR3RCLFlBQ0UsUUFBa0IsRUFDVixXQUF3QixFQUN4QixPQUFlLEVBQ2YsVUFBd0I7UUFGeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGVBQVUsR0FBVixVQUFVLENBQWM7UUFLM0IsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLG1CQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV0QyxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELG9CQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQVBoRCxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQWUsWUFBWSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQVFNLFVBQVU7UUFDZixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRU0sT0FBTztRQUNaLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU0sUUFBUTtRQUNiLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFO1lBQ3BHLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1NBQzFDO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQzs7eUdBcENVLFdBQVc7NkdBQVgsV0FBVyxjQUhWLE1BQU07NEZBR1AsV0FBVztrQkFMdkIsVUFBVTttQkFDWDtvQkFDRSxVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU2VydmljZSB9IGZyb20gJy4vbG9jYWwuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZShcclxue1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59XHJcbilcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBzaGFyZWRJbmZvOiBhbnk7XHJcbiAgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2U7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSxcclxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2NhbHN0b3JlOiBMb2NhbFNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuYWxlcnRTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PEFsZXJ0U2VydmljZT4oQWxlcnRTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcmdJbmZvID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KCcnKTtcclxuICBjdXJyZW50T3JnSW5mbyA9IHRoaXMub3JnSW5mby5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgcHVibGljIGN1cnJlbnRNZW51ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KCcnKTtcclxuICBjdXJyZW50TWVudUluZm8gPSB0aGlzLmN1cnJlbnRNZW51LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwdWJsaWMgZ2V0Um9sZUtleSgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLmxvY2Fsc3RvcmUuZ2V0T2JqKCd1c2VyJyk7XHJcbiAgICBpZiAodXNlciAmJiB1c2VyLnJvbGUpIHtcclxuICAgICAgcmV0dXJuIHVzZXIucm9sZS5yb2xla2V5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQWRtaW4oKSB7XHJcbiAgICByZXR1cm4gJ0FETScgPT09IHRoaXMuZ2V0Um9sZUtleSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE9yZ0lEKCkge1xyXG4gICAgY29uc3QgdXNlciA9IHRoaXMubG9jYWxzdG9yZS5nZXRPYmooJ3VzZXInKTtcclxuICAgIGlmICh1c2VyICYmIHVzZXIudXNlcldvcmtJbmZvICYmIHVzZXIudXNlcldvcmtJbmZvLm9yZ2FuaXphdGlvbiAmJiB1c2VyLnVzZXJXb3JrSW5mby5vcmdhbml6YXRpb24uaWQpIHtcclxuICAgICAgcmV0dXJuIHVzZXIudXNlcldvcmtJbmZvLm9yZ2FuaXphdGlvbi5pZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=