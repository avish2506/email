export declare class EmailTemplateServiceConfig {
    static EndPoint: {
        EmailTemp: {
            getList: string;
            GetAllEmailTemplateCategories: string;
            GetEmailTemplateList: string;
            CreateTemplate: string;
            UpdateDeleteTemplate: string;
            CheckDuplicateForUpdate1: string;
            CheckDuplicateForUpdate2: string;
            checkDuplicateCreate: string;
            templateParameters: string;
        };
    };
}
export declare class RBACINFO {
    apiHost: string;
    tokenKey: string;
    others?: any;
    orgID?: any;
    environment?: Environment;
}
export declare class Environment {
    mstrUsername?: string;
    mstrPassword?: string;
    mstrURL?: string;
    mstrProjectID?: string;
    applicationid?: string;
    priority?: string;
}
