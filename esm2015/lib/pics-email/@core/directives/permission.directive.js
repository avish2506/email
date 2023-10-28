import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../permissions/permission.store";
export class PermissionDirective {
    constructor(renderer, elementRef, dataStore) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataStore = dataStore;
    }
    ngAfterViewInit() {
        const permissions = this.dataStore.state;
        console.log(permissions, 'permissions event scheduler');
        if (permissions) {
            if (!permissions[this.fieldKey]) {
                const template = this.elementRef.nativeElement;
                if (template.tagName === 'A') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.href = 'javascript:void(0);';
                        r['disabled'] = true;
                        r.className = template.className;
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else if (template.tagName === 'P-MULTISELECT' ||
                    template.tagName === 'P-DROPDOWN' ||
                    template.tagName === 'P-CHECKBOX' ||
                    template.tagName === 'P-TREESELECT' ||
                    template.tagName === 'P-RADIOBUTTON' ||
                    template.tagName === 'P-CALENDAR') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.className = template.className;
                        r.className += ' p-disabled';
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else {
                    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                    const childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                    childInputNodes.forEach((elem) => {
                        this.renderer.setAttribute(elem, 'disabled', 'true');
                    });
                }
            }
        }
    }
}
PermissionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
PermissionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fieldKey]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.PermissionStore }]; }, propDecorators: { fieldKey: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLW1vZHVsZS9lbWFpbC9zcmMvbGliL3BpY3MtZW1haWwvQGNvcmUvZGlyZWN0aXZlcy9wZXJtaXNzaW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7OztBQVF2RixNQUFNLE9BQU8sbUJBQW1CO0lBRzlCLFlBQ21CLFFBQW1CLEVBQzVCLFVBQXNCLEVBQ3RCLFNBQTBCO1FBRmpCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDNUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFpQjtJQUVwQyxDQUFDO0lBQ0QsZUFBZTtRQUNiLE1BQU0sV0FBVyxHQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFDdkQsSUFBSSxXQUFXLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQy9CLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO2dCQUMvQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssR0FBRyxFQUFFO29CQUM1QixJQUFJLFFBQVEsRUFBRTt3QkFDWixNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3dCQUN0RixDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7d0JBQy9CLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQ3JCLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQ3BFO2lCQUNGO3FCQUFNLElBQ0wsUUFBUSxDQUFDLE9BQU8sS0FBSyxlQUFlO29CQUNwQyxRQUFRLENBQUMsT0FBTyxLQUFLLFlBQVk7b0JBQ2pDLFFBQVEsQ0FBQyxPQUFPLEtBQUssWUFBWTtvQkFDakMsUUFBUSxDQUFDLE9BQU8sS0FBSyxjQUFjO29CQUNuQyxRQUFRLENBQUMsT0FBTyxLQUFLLGVBQWU7b0JBQ3BDLFFBQVEsQ0FBQyxPQUFPLEtBQUssWUFBWSxFQUNqQztvQkFDQSxJQUFJLFFBQVEsRUFBRTt3QkFDWixNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3dCQUN0RixDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQzt3QkFDakMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxhQUFhLENBQUM7d0JBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUNwRTtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzdFLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUNwRSwyREFBMkQsQ0FDNUQsQ0FBQztvQkFDRixlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7d0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ3ZELENBQUMsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7U0FDRjtJQUNILENBQUM7O2lIQWxEVSxtQkFBbUI7cUdBQW5CLG1CQUFtQjs0RkFBbkIsbUJBQW1CO2tCQUgvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjt1SkFFVSxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25TdG9yZSB9IGZyb20gJy4uL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5cclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tmaWVsZEtleV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgZmllbGRLZXkhOiBzdHJpbmc7XHJcbiAgcGVybWlzc2lvbnM6IGFueTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgZGF0YVN0b3JlOiBQZXJtaXNzaW9uU3RvcmVcclxuICApIHtcclxuICB9XHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgY29uc3QgcGVybWlzc2lvbnMgPSAgdGhpcy5kYXRhU3RvcmUuc3RhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhwZXJtaXNzaW9ucywgJ3Blcm1pc3Npb25zIGV2ZW50IHNjaGVkdWxlcicpO1xyXG4gICAgIGlmIChwZXJtaXNzaW9ucykge1xyXG4gICAgICBpZiAoIXBlcm1pc3Npb25zW3RoaXMuZmllbGRLZXldKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBpZiAodGVtcGxhdGUudGFnTmFtZSA9PT0gJ0EnKSB7XHJcbiAgICAgICAgICBpZiAodGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgci5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIHIuaHJlZiA9ICdqYXZhc2NyaXB0OnZvaWQoMCk7JztcclxuICAgICAgICAgICAgclsnZGlzYWJsZWQnXSA9IHRydWU7XHJcbiAgICAgICAgICAgIHIuY2xhc3NOYW1lID0gdGVtcGxhdGUuY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyLCB0ZW1wbGF0ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIHRlbXBsYXRlLnRhZ05hbWUgPT09ICdQLU1VTFRJU0VMRUNUJyB8fFxyXG4gICAgICAgICAgdGVtcGxhdGUudGFnTmFtZSA9PT0gJ1AtRFJPUERPV04nIHx8XHJcbiAgICAgICAgICB0ZW1wbGF0ZS50YWdOYW1lID09PSAnUC1DSEVDS0JPWCcgfHxcclxuICAgICAgICAgIHRlbXBsYXRlLnRhZ05hbWUgPT09ICdQLVRSRUVTRUxFQ1QnIHx8XHJcbiAgICAgICAgICB0ZW1wbGF0ZS50YWdOYW1lID09PSAnUC1SQURJT0JVVFRPTicgfHxcclxuICAgICAgICAgIHRlbXBsYXRlLnRhZ05hbWUgPT09ICdQLUNBTEVOREFSJ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKHRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIHIuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICByLmNsYXNzTmFtZSA9IHRlbXBsYXRlLmNsYXNzTmFtZTtcclxuICAgICAgICAgICAgci5jbGFzc05hbWUgKz0gJyBwLWRpc2FibGVkJztcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQociwgdGVtcGxhdGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgY29uc3QgY2hpbGRJbnB1dE5vZGVzID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBidXR0b24sIGEsIG5nLXNlbGVjdCwgZGl2LCBsYWJsZSdcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjaGlsZElucHV0Tm9kZXMuZm9yRWFjaCgoZWxlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW0sICdkaXNhYmxlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19