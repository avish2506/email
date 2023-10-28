import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Store } from '../service/store.service';
import * as i0 from "@angular/core";
export class PermissionStore extends Store {
    constructor() {
        super({});
    }
    setStore(data) {
        if (data) {
            this.setState(Object.assign(Object.assign({}, this.state), data));
        }
    }
    getStore(type = 'P') {
        if (type === 'P')
            return of(this.state);
        else
            return of(this.state);
    }
    flat(array) {
        let result = [];
        if (array) {
            array.forEach(item => {
                result.push(item);
                if (item && Array.isArray(item)) {
                    result = result.concat(this.flat(item));
                }
            });
        }
        return result;
    }
}
PermissionStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PermissionStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2VtYWlsL3NyYy9saWIvcGljcy1lbWFpbC9AY29yZS9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRWpELE1BQU0sT0FBTyxlQUFnQixTQUFRLEtBQVU7SUFDN0M7UUFDRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVM7UUFDaEIsSUFBRyxJQUFJLEVBQUM7WUFDTixJQUFJLENBQUMsUUFBUSxpQ0FBTSxJQUFJLENBQUMsS0FBSyxHQUFLLElBQUksRUFBRyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUFlLEdBQUc7UUFDekIsSUFBSSxJQUFJLEtBQUssR0FBRztZQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFDbkMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTyxJQUFJLENBQUMsS0FBWTtRQUN2QixJQUFJLE1BQU0sR0FBVSxFQUFFLENBQUM7UUFDdkIsSUFBRyxLQUFLLEVBQUM7WUFDUCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ3pDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OzZHQTNCVSxlQUFlO2lIQUFmLGVBQWU7NEZBQWYsZUFBZTtrQkFEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuLi9zZXJ2aWNlL3N0b3JlLnNlcnZpY2UnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uU3RvcmUgZXh0ZW5kcyBTdG9yZTxhbnk+IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHt9KTtcclxuICB9XHJcblxyXG4gIHNldFN0b3JlKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgaWYoZGF0YSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCAuLi5kYXRhIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U3RvcmUodHlwZTogc3RyaW5nID0gJ1AnKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGlmICh0eXBlID09PSAnUCcpIHJldHVybiBvZih0aGlzLnN0YXRlKTtcclxuICAgIGVsc2UgcmV0dXJuIG9mKHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmbGF0KGFycmF5OiBhbnlbXSkge1xyXG4gICAgbGV0IHJlc3VsdDogYW55W10gPSBbXTtcclxuICAgIGlmKGFycmF5KXtcclxuICAgICAgYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcclxuICAgICAgICBpZiAoaXRlbSAmJiBBcnJheS5pc0FycmF5KGl0ZW0pKSB7XHJcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHRoaXMuZmxhdChpdGVtKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==