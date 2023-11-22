export class EmailTemplateServiceConfig {
}
EmailTemplateServiceConfig.EndPoint = {
    EmailTemp: {
        getList: '/intakedastagings/listtemplates',
        GetAllEmailTemplateCategories: '/solution/emailtemplate/getAllEmailTemplateCategories',
        GetEmailTemplateList: '/solution/emailtemplate/category/',
        CreateTemplate: '/solution/emailtemplate/template/create',
        UpdateDeleteTemplate: '/solution/emailtemplate/template/',
        CheckDuplicateForUpdate1: '/solution/emailtemplate/template/',
        CheckDuplicateForUpdate2: '/checkDuplicateForUpdate',
        checkDuplicateCreate: '/checkDuplicate',
        templateParameters: '/solution/emailtemplate/templateParameters/category/'
    }
};
export class RBACINFO {
    constructor() {
        this.apiHost = '';
        this.tokenKey = '';
    }
}
export class Environment {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtdGVtcGxhdGUtdXJsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2VtYWlsL3NyYy9saWIvcGljcy1lbWFpbC9AY29yZS91cmxzL2VtYWlsLXRlbXBsYXRlLXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLDBCQUEwQjs7QUFDdkIsbUNBQVEsR0FBRztJQUN2QixTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsaUNBQWlDO1FBQzFDLDZCQUE2QixFQUFFLHVEQUF1RDtRQUN0RixvQkFBb0IsRUFBRSxtQ0FBbUM7UUFDekQsY0FBYyxFQUFFLHlDQUF5QztRQUN6RCxvQkFBb0IsRUFBRSxtQ0FBbUM7UUFDekQsd0JBQXdCLEVBQUUsbUNBQW1DO1FBQzdELHdCQUF3QixFQUFFLDBCQUEwQjtRQUNwRCxvQkFBb0IsRUFBRSxpQkFBaUI7UUFDdkMsa0JBQWtCLEVBQUUsc0RBQXNEO0tBQzNFO0NBQ0YsQ0FBQztBQUVKLE1BQU0sT0FBTyxRQUFRO0lBQXJCO1FBQ0UsWUFBTyxHQUFFLEVBQUUsQ0FBQztRQUNaLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFJaEIsQ0FBQztDQUFBO0FBQ0QsTUFBTSxPQUFPLFdBQVc7Q0FPdkIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRW1haWxUZW1wbGF0ZVNlcnZpY2VDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBFbWFpbFRlbXA6IHtcclxuICAgICAgZ2V0TGlzdDogJy9pbnRha2VkYXN0YWdpbmdzL2xpc3R0ZW1wbGF0ZXMnLFxyXG4gICAgICBHZXRBbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllczogJy9zb2x1dGlvbi9lbWFpbHRlbXBsYXRlL2dldEFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzJyxcclxuICAgICAgR2V0RW1haWxUZW1wbGF0ZUxpc3Q6ICcvc29sdXRpb24vZW1haWx0ZW1wbGF0ZS9jYXRlZ29yeS8nLFxyXG4gICAgICBDcmVhdGVUZW1wbGF0ZTogJy9zb2x1dGlvbi9lbWFpbHRlbXBsYXRlL3RlbXBsYXRlL2NyZWF0ZScsXHJcbiAgICAgIFVwZGF0ZURlbGV0ZVRlbXBsYXRlOiAnL3NvbHV0aW9uL2VtYWlsdGVtcGxhdGUvdGVtcGxhdGUvJyxcclxuICAgICAgQ2hlY2tEdXBsaWNhdGVGb3JVcGRhdGUxOiAnL3NvbHV0aW9uL2VtYWlsdGVtcGxhdGUvdGVtcGxhdGUvJyxcclxuICAgICAgQ2hlY2tEdXBsaWNhdGVGb3JVcGRhdGUyOiAnL2NoZWNrRHVwbGljYXRlRm9yVXBkYXRlJyxcclxuICAgICAgY2hlY2tEdXBsaWNhdGVDcmVhdGU6ICcvY2hlY2tEdXBsaWNhdGUnLFxyXG4gICAgICB0ZW1wbGF0ZVBhcmFtZXRlcnM6ICcvc29sdXRpb24vZW1haWx0ZW1wbGF0ZS90ZW1wbGF0ZVBhcmFtZXRlcnMvY2F0ZWdvcnkvJ1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJCQUNJTkZPIHtcclxuICBhcGlIb3N0ID0nJztcclxuICB0b2tlbktleSA9ICcnO1xyXG4gIG90aGVycz86IGFueTtcclxuICBvcmdJRD86IGFueTtcclxuICBlbnZpcm9ubWVudD86IEVudmlyb25tZW50O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XHJcbiAgbXN0clVzZXJuYW1lPzogc3RyaW5nO1xyXG4gIG1zdHJQYXNzd29yZD86IHN0cmluZztcclxuICBtc3RyVVJMPzogc3RyaW5nO1xyXG4gIG1zdHJQcm9qZWN0SUQ/OiBzdHJpbmc7XHJcbiAgYXBwbGljYXRpb25pZD86IHN0cmluZztcclxuICBwcmlvcml0eT86IHN0cmluZ1xyXG59XHJcbiJdfQ==