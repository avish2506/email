import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./data-store.service";
export class HttpService {
    constructor(http, _storeservice) {
        this.http = http;
        this._storeservice = _storeservice;
        this.overrideUrl = true;
        this.baseUrl = '';
        this.headers = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('role', 'role=CP_PUBLIC');
        this.showSpinner = new BehaviorSubject(false);
        this.outsideShowSpinner = new BehaviorSubject(false);
        this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                this.url = this.RBACORG['apiHost'] ? this.RBACORG['apiHost'] : 'http://localhost:3000/api';
                this.tokenKey = this.RBACORG['tokenKey'];
            }
        });
        this.url1 = '';
    }
    get(apiRoute) {
        return this.http.get(`${this.url + apiRoute}`, {
            headers: this.getHttpNewHeaders()
        });
    }
    post(apiRoute, body) {
        return this.http.post(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    put(apiRoute, body) {
        return this.http.put(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    patch(apiRoute, body) {
        return this.http.patch(`${this.url + apiRoute}`, body, {
            headers: this.getHttpNewHeaders()
        });
    }
    delete(apiRoute) {
        return this.http.delete(`${this.url + apiRoute}`, {
            headers: this.getHttpNewHeaders()
        });
    }
    getHttpHeaders() {
        return new HttpHeaders().set('key', 'value');
    }
    getHttpNewHeaders() {
        return this.headers.set('Authorization', `Bearer ${this.getToken()}`);
    }
    getAttachmentHttpHeaders(contentType) {
        return new HttpHeaders().set('Content-Type', contentType).set('x-ms-blob-type', 'BlockBlob');
    }
    putUpload(apiRoute, body, contentType) {
        return this.http.put(`${this.url1 + apiRoute}`, body, { headers: this.getAttachmentHttpHeaders(contentType) });
    }
    putupload2(apiRoute, body, contenttype) {
        return this.http
            .put(`${this.url1 + apiRoute}`, body, {
            headers: this.getAttachmentHttpHeaders(contenttype),
            observe: 'response'
        })
            .pipe(map(data => {
            return data;
        }));
    }
    /**
     *
     * @param apiRoute
     * This function will download the stream file from the API service.
     * No HTTP required for this stream. So used Window.location.href to download the file
     */
    getFormDownloaded(apiRoute) {
        window.location.href = `${this.url + apiRoute}`;
    }
    //common http service(optional)
    handleError(error) {
        var _a, _b;
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) ? (_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.message : error.message}`;
        }
        return throwError(errorMessage);
    }
    getToken() {
        const token = this.tokenKey ? this.tokenKey : 'jwt-token';
        return sessionStorage.getItem(token);
    }
}
HttpService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService, deps: [{ token: i1.HttpClient }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvZW1haWwvc3JjL2xpYi9waWNzLWVtYWlsL0Bjb3JlL3NlcnZpY2UvaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUlyQyxNQUFNLE9BQU8sV0FBVztJQWVwQixZQUFvQixJQUFnQixFQUFVLGFBQStCO1FBQXpELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFiN0UsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFbkIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUVOLFlBQU8sR0FBRyxJQUFJLFdBQVcsRUFBRTthQUMvQixHQUFHLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDO2FBQ2pDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7YUFDdkMsR0FBRyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTFCLGdCQUFXLEdBQTZCLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQzVFLHVCQUFrQixHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUl4RixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNy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QUM7SUFDRCxRQUFRO1FBQ04sTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzFELE9BQU8sY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDOzt5R0E1R1EsV0FBVzs2R0FBWCxXQUFXOzRGQUFYLFdBQVc7a0JBRHZCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS90aHJvd0Vycm9yJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG4gICAgUkJBQ09SRzogYW55O1xyXG4gICAgb3ZlcnJpZGVVcmwgPSB0cnVlO1xyXG4gICAgZXJyb3JEYXRhITogSHR0cEVycm9yUmVzcG9uc2U7XHJcbiAgICBiYXNlVXJsID0gJyc7XHJcbiAgICB0b2tlbktleTogYW55O1xyXG4gICAgcHVibGljIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxyXG4gICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXHJcbiAgICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcclxuICAgICAgLnNldCgncm9sZScsICdyb2xlPUNQX1BVQkxJQycpO1xyXG5cclxuICAgIHB1YmxpYyBzaG93U3Bpbm5lcjogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgICBwdWJsaWMgb3V0c2lkZVNob3dTcGlubmVyOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIHVybDE6IHN0cmluZztcclxuICAgIHVybDogYW55O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2UpIHtcclxuICAgICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc1snUkJBQ09SRyddICYmIHJlc1snUkJBQ09SRyddICE9PSAnJykge1xyXG4gICAgICAgICAgdGhpcy5SQkFDT1JHID0gcmVzWydSQkFDT1JHJ107XHJcbiAgICAgICAgICB0aGlzLnVybCA9IHRoaXMuUkJBQ09SR1snYXBpSG9zdCddID8gdGhpcy5SQkFDT1JHWydhcGlIb3N0J10gOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaSc7XHJcbiAgICAgICAgICB0aGlzLnRva2VuS2V5ID0gdGhpcy5SQkFDT1JHWyd0b2tlbktleSddO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudXJsMSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChhcGlSb3V0ZTogc3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsICsgYXBpUm91dGV9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SHR0cE5ld0hlYWRlcnMoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0KGFwaVJvdXRlOiBzdHJpbmcsIGJvZHk6IGFueSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cmwgKyBhcGlSb3V0ZX1gLCBib2R5LCB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5nZXRIdHRwTmV3SGVhZGVycygpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1dChhcGlSb3V0ZTogc3RyaW5nLCBib2R5OiBhbnkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7dGhpcy51cmwgKyBhcGlSb3V0ZX1gLCBib2R5LCB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5nZXRIdHRwTmV3SGVhZGVycygpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdGNoKGFwaVJvdXRlOiBzdHJpbmcsIGJvZHk/OiBhbnkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChgJHt0aGlzLnVybCArIGFwaVJvdXRlfWAsIGJvZHksIHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEh0dHBOZXdIZWFkZXJzKClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKGFwaVJvdXRlOiBzdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoYCR7dGhpcy51cmwgKyBhcGlSb3V0ZX1gLCB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5nZXRIdHRwTmV3SGVhZGVycygpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEh0dHBIZWFkZXJzKCk6IEh0dHBIZWFkZXJzIHtcclxuICAgICAgcmV0dXJuIG5ldyBIdHRwSGVhZGVycygpLnNldCgna2V5JywgJ3ZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBnZXRIdHRwTmV3SGVhZGVycygpOiBIdHRwSGVhZGVycyB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgYEJlYXJlciAke3RoaXMuZ2V0VG9rZW4oKX1gKTtcclxuICAgIH1cclxuICAgIGdldEF0dGFjaG1lbnRIdHRwSGVhZGVycyhjb250ZW50VHlwZTogYW55KTogSHR0cEhlYWRlcnMge1xyXG4gICAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSkuc2V0KCd4LW1zLWJsb2ItdHlwZScsICdCbG9ja0Jsb2InKTtcclxuICAgIH1cclxuICAgIHB1dFVwbG9hZChhcGlSb3V0ZTogc3RyaW5nLCBib2R5OiBhbnksIGNvbnRlbnRUeXBlOiBhbnkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7dGhpcy51cmwxICsgYXBpUm91dGV9YCwgYm9keSwgeyBoZWFkZXJzOiB0aGlzLmdldEF0dGFjaG1lbnRIdHRwSGVhZGVycyhjb250ZW50VHlwZSkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0dXBsb2FkMihhcGlSb3V0ZTogc3RyaW5nLCBib2R5OiBhbnksIGNvbnRlbnR0eXBlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLnB1dChgJHt0aGlzLnVybDEgKyBhcGlSb3V0ZX1gLCBib2R5LCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEF0dGFjaG1lbnRIdHRwSGVhZGVycyhjb250ZW50dHlwZSksXHJcbiAgICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIG1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYXBpUm91dGVcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBkb3dubG9hZCB0aGUgc3RyZWFtIGZpbGUgZnJvbSB0aGUgQVBJIHNlcnZpY2UuXHJcbiAgICAgKiBObyBIVFRQIHJlcXVpcmVkIGZvciB0aGlzIHN0cmVhbS4gU28gdXNlZCBXaW5kb3cubG9jYXRpb24uaHJlZiB0byBkb3dubG9hZCB0aGUgZmlsZVxyXG4gICAgICovXHJcbiAgICBnZXRGb3JtRG93bmxvYWRlZChhcGlSb3V0ZTogc3RyaW5nKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dGhpcy51cmwgKyBhcGlSb3V0ZX1gO1xyXG4gICAgfVxyXG4gICAgLy9jb21tb24gaHR0cCBzZXJ2aWNlKG9wdGlvbmFsKVxyXG5cclxuICAgIGhhbmRsZUVycm9yKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkge1xyXG4gICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgIGlmIChlcnJvci5lcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcclxuICAgICAgICAvLyBDbGllbnQtc2lkZSBlcnJvcnNcclxuICAgICAgICBlcnJvck1lc3NhZ2UgPSBgRXJyb3I6ICR7ZXJyb3IuZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFNlcnZlci1zaWRlIGVycm9yc1xyXG4gICAgICAgIGVycm9yTWVzc2FnZSA9IGBFcnJvciBDb2RlOiAke2Vycm9yLnN0YXR1c31cXG5NZXNzYWdlOiAke1xyXG4gICAgICAgICAgZXJyb3I/LmVycm9yPy5tZXNzYWdlID8gZXJyb3I/LmVycm9yPy5tZXNzYWdlIDogZXJyb3IubWVzc2FnZVxyXG4gICAgICAgIH1gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBnZXRUb2tlbigpOiBhbnkge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5LZXkgPyB0aGlzLnRva2VuS2V5IDogJ2p3dC10b2tlbic7XHJcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHRva2VuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4iXX0=