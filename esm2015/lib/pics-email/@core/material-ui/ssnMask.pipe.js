import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class MaskPipe {
    transform(value, showSsnMask) {
        if (showSsnMask === true) {
            if (String(value).startsWith('*')) {
                return '';
            }
            else if (String(value).match('^d{9}$')) {
                return '***-**-' + String(value).substring(String(value).length - 4);
            }
            else {
                return '';
            }
        }
        else {
            const cleaned = ('' + value).replace(/\D/g, '');
            const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
            if (match) {
                return '(' + match[1] + ') ' + match[2] + '-' + match[3];
            }
            else if (String(value).startsWith('*')) {
                return '';
            }
            else if (String(value).match('^d{9}$')) {
                return (String(value).substring(0, 3) + '-' + String(value).substring(3, 5) + '-' + String(value).substring(5, 9));
            }
            else {
                return '';
            }
        }
    }
}
MaskPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MaskPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
MaskPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MaskPipe, name: "ssnMask" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MaskPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ssnMask' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NuTWFzay5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvZW1haWwvc3JjL2xpYi9waWNzLWVtYWlsL0Bjb3JlL21hdGVyaWFsLXVpL3Nzbk1hc2sucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHcEQsTUFBTSxPQUFPLFFBQVE7SUFDbkIsU0FBUyxDQUFDLEtBQWEsRUFBRSxXQUFvQjtRQUMzQyxJQUFJLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDeEIsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQzthQUNYO2lCQUFNLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDeEMsT0FBTyxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3RFO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDO2FBQ1g7U0FDRjthQUFNO1lBQ0wsTUFBTSxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsT0FBTyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxRDtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDO2FBQ1g7aUJBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN4QyxPQUFPLENBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDMUcsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDO2FBQ1g7U0FDRjtJQUNILENBQUM7O3NHQXpCVSxRQUFRO29HQUFSLFFBQVE7NEZBQVIsUUFBUTtrQkFEcEIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdzc25NYXNrJyB9KVxyXG5leHBvcnQgY2xhc3MgTWFza1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgc2hvd1Nzbk1hc2s6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgaWYgKHNob3dTc25NYXNrID09PSB0cnVlKSB7XHJcbiAgICAgIGlmIChTdHJpbmcodmFsdWUpLnN0YXJ0c1dpdGgoJyonKSkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfSBlbHNlIGlmIChTdHJpbmcodmFsdWUpLm1hdGNoKCdeZHs5fSQnKSkge1xyXG4gICAgICAgIHJldHVybiAnKioqLSoqLScgKyBTdHJpbmcodmFsdWUpLnN1YnN0cmluZyhTdHJpbmcodmFsdWUpLmxlbmd0aCAtIDQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY2xlYW5lZCA9ICgnJyArIHZhbHVlKS5yZXBsYWNlKC9cXEQvZywgJycpO1xyXG4gICAgICBjb25zdCBtYXRjaCA9IGNsZWFuZWQubWF0Y2goL14oXFxkezN9KShcXGR7M30pKFxcZHs0fSkkLyk7XHJcbiAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgIHJldHVybiAnKCcgKyBtYXRjaFsxXSArICcpICcgKyBtYXRjaFsyXSArICctJyArIG1hdGNoWzNdO1xyXG4gICAgICB9IGVsc2UgaWYgKFN0cmluZyh2YWx1ZSkuc3RhcnRzV2l0aCgnKicpKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9IGVsc2UgaWYgKFN0cmluZyh2YWx1ZSkubWF0Y2goJ15kezl9JCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIFN0cmluZyh2YWx1ZSkuc3Vic3RyaW5nKDAsIDMpICsgJy0nICsgU3RyaW5nKHZhbHVlKS5zdWJzdHJpbmcoMywgNSkgKyAnLScgKyBTdHJpbmcodmFsdWUpLnN1YnN0cmluZyg1LCA5KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==