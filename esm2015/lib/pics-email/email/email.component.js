import { Component } from '@angular/core';
import { RBACINFO } from '../@core/urls/email-template-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../@core/service/email-template.service";
import * as i2 from "../@core/service/alert.service";
import * as i3 from "@angular/forms";
import * as i4 from "primeng/api";
import * as i5 from "../@core/service/data-store.service";
import * as i6 from "../@shared/alert/alert.component";
import * as i7 from "primeng/card";
import * as i8 from "primeng/dropdown";
import * as i9 from "primeng/confirmdialog";
import * as i10 from "../@core/directives/permission.directive";
import * as i11 from "primeng/inputtext";
import * as i12 from "primeng/button";
import * as i13 from "primeng/ripple";
import * as i14 from "primeng/tooltip";
import * as i15 from "@angular/common";
export class EmailComponent {
    constructor(_emailTemplateService, _alertService, formBuilder, confirmationService, _storeservice) {
        this._emailTemplateService = _emailTemplateService;
        this._alertService = _alertService;
        this.formBuilder = formBuilder;
        this.confirmationService = confirmationService;
        this._storeservice = _storeservice;
        this.editTemplateId = '';
        this.editStatus = false;
        this.templateList = [];
        this.totalNotificationCount = 0;
        this.allEmailTemplateCategories = [];
        this.templatevaliableList = [];
        this.RBACORG = new RBACINFO();
        this.currentUser = '';
        this.formInitialize();
    }
    ngOnInit() {
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                console.log(this.RBACORG, 'RBACORG Event Scheduler');
                this.environment = this.RBACORG['environment'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.environment) {
                    this.getAllEmailTemplateCategories();
                    this.initEditor();
                }
            }
        });
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    formInitialize() {
        this.emailTemplateForm = this.formBuilder.group({
            templatename: [''],
            senderEmails: [''],
            template: [''],
            id: [''],
            selectTemplate: [''],
            subject: ['']
        });
    }
    editTemplate(templateinfo) {
        try {
            this.editTemplateId = templateinfo ? templateinfo.id : '';
            this.editStatus = true;
            const editData = this.templateList.filter((data) => data.emailtemplateid === this.editTemplateId)[0];
            this.editor.setComponents(editData.template);
            this.emailTemplateForm.setValue({
                templatename: editData.templatename,
                senderEmails: '',
                template: editData.template,
                id: editData.id,
                selectTemplate: editData,
                subject: editData.subject
            });
        }
        catch (e) {
            console.log(`Error in getTemplateList: ${e}`);
        }
    }
    saveTemplate() {
        try {
            const getEditorHTML = this.editor.runCommand('gjs-get-inlined-html');
            const requestObject = this.emailTemplateForm.getRawValue();
            if (this.editStatus) {
                requestObject['emailtemplateid'] = this.editTemplateId;
            }
            requestObject['template'] = getEditorHTML;
            if (requestObject.templatename == '' || requestObject.template == '') {
                this._alertService.error('Template name and template cannot be empty');
                return false;
            }
            const inputRequest = {
                name: requestObject.templatename,
                template: requestObject.template,
                category: this.allEmailTemplateCategories.length > 0 ? this.allEmailTemplateCategories[0].id : 1,
                subject: requestObject.subject
            };
            this._emailTemplateService.createTemplate(inputRequest).subscribe(_Response => {
                this.editTemplateId = '';
                this._alertService.success('Template created successfully');
                this.reset();
                this.getEmailTemplateList();
            });
        }
        catch (e) {
            console.log(`Error in the restoreTrigger: ${e}`);
        }
    }
    updateTemplate(status) {
        const getEditorHTML = this.editor.runCommand('gjs-get-inlined-html');
        const requestObject = this.emailTemplateForm.getRawValue();
        requestObject['template'] = getEditorHTML;
        if (requestObject.templatename == '' || requestObject.template == '') {
            this._alertService.error('Template name and template cannot be empty');
            return false;
        }
        const inputRequest = {
            name: requestObject.templatename,
            template: requestObject.template,
            category: this.allEmailTemplateCategories.length > 0 ? this.allEmailTemplateCategories[0].id : 1,
            subject: requestObject.subject,
            deleted: status === 'DELETE' ? true : false
        };
        this.genericTemplate(inputRequest, status);
    }
    genericTemplate(modal, status) {
        this._emailTemplateService.UpdateDeleteTemplate(this.editTemplateId, modal).subscribe(_Response => {
            this.editTemplateId = '';
            this.editStatus = false;
            if (status === 'DELETE') {
                this._alertService.success('Template deleted successfully');
            }
            else {
                this._alertService.success('Template updated successfully');
            }
            this.reset();
            this.getEmailTemplateList();
        });
    }
    reset() {
        this.editStatus = false;
        this.editTemplateId = '';
        this.editor.Components.clear();
        this.emailTemplateForm.reset();
    }
    initEditor() {
        const user_access_token = this.currentUser.id;
        const uploadURL = +'/attachments/uploadsFile' + '?access_token=' + this.currentUser.id;
        const unique_timestamp = Math.floor(new Date().getTime() / 1000);
        this.editor = grapesjs.init({
            container: '#emailEditor',
            storageManager: { type: 0 },
            fromElement: 1,
            components: '<div class="txt-red">Hello world!</div>',
            style: '.txt-red{color: red}',
            plugins: ['gjs-blocks-basic', 'gjs-preset-newsletter'],
            pluginsOpts: {
                'gjs-blocks-basic': {},
                'gjs-preset-newsletter': {
                    modalTitleImport: 'Import template'
                }
            },
            // uploadName: `files_${unique_timestamp}`,
            assetManager: {
                storageType: '',
                storeOnChange: true,
                storeAfterUpload: true,
                upload: uploadURL,
                uploadName: `files_${unique_timestamp}`,
                assets: [],
                uploadFile: (e) => {
                    const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
                    const formData = new FormData();
                    for (const i in files) {
                        formData.append('file', files[i]); //containing all the selected images from local
                    }
                    $.ajax({
                        url: uploadURL,
                        type: 'POST',
                        data: formData,
                        headers: {
                            access_token: user_access_token
                        },
                        contentType: false,
                        crossDomain: true,
                        dataType: 'json',
                        mimeType: 'multipart/form-data',
                        processData: false,
                        success: (result) => {
                            this.editor.AssetManager.add(result.s3bucketpathname);
                        }
                    });
                }
            }
        });
        this.editorInit();
    }
    editorInit() {
        const block_paragraph = {
            label: 'Paragraph',
            category: 'Text',
            content: `<p>
          {Insert Paragraph Content Here}.
      </p>`,
            select: true
        };
        const block_address = {
            label: 'Address',
            category: 'Text',
            attributes: { title: 'Address' },
            content: `<div id="i59h" style="box-sizing: border-box; padding: 10px;">Address
      </div>
      <div id="ihtj" style="box-sizing: border-box; padding: 10px;">Street: {{street}
      </div>
      <div id="im5z" style="box-sizing: border-box; padding: 10px;">City: {{city}
      </div>`,
            select: true
        };
        this.editor.BlockManager.add('address', block_address);
        this.editor.BlockManager.add('paragraph', block_paragraph);
        this.editor.Panels.getButton('options', 'sw-visibility');
        this.editor.getConfig().showDevices = 0;
        this.editor.Panels.addPanel({ id: 'devices-c' })
            .get('buttons')
            .add([
            {
                id: 'preview',
                command: function (e) {
                    e.runCommand('preview');
                },
                className: 'fa fa-play'
            },
            {
                id: 'print',
                command: function (e) {
                    const win = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
                    const img = win.document.createElement('div');
                    img.innerHTML = e.getHtml();
                    img.style.cssText = e.getCss();
                    img.setAttribute('width', '100%');
                    img.setAttribute('height', '100%');
                    img.setAttribute('id', 'hideForPrint');
                    win.document.body.appendChild(img);
                    win.print();
                    img.onload = function () {
                        win.focus();
                        win.print();
                        win.close();
                    };
                },
                className: 'fa fa-print'
            }
        ]);
        this.editor.RichTextEditor.remove('link');
        this.editor.RichTextEditor.add('dropcap', {
            icon: '<b>D<sup>c</sup></b>',
            attributes: { title: 'Dropcap' },
            result: (rte) => {
                const component = this.editor.getSelected();
                if (component.is('text') && component.getClasses().includes('dropCaps')) {
                    component.replaceWith(`${component.get('content')}`);
                }
                else {
                    const range = rte.selection().getRangeAt(0);
                    let container = range.commonAncestorContainer;
                    if (container.nodeType == 3)
                        container = container.parentNode;
                    if (container.nodeName == 'SPAN' && container.classList.contains('dropCaps')) {
                        const parent = container.parentNode;
                        const content = document.createTextNode(container.innerHTML);
                        // insert all our children before ourselves.
                        parent.insertBefore(content, container);
                        parent.removeChild(container);
                    }
                    else {
                        rte.insertHTML(`<span class="dropCaps">${rte.selection()}</span>`);
                    }
                }
            }
        });
        this.editor.RichTextEditor.add('superscript', {
            icon: '<b>S<sup>s</sup></b>',
            attributes: { title: 'Superscript' },
            result: (rte) => rte.exec('superscript')
        });
        this.editor.RichTextEditor.add('subscript', {
            icon: '<b>S<sub>s</sub></b>',
            attributes: { title: 'Subscript' },
            result: (rte) => rte.exec('subscript')
        });
        this.editor.RichTextEditor.add('hyperlink', {
            icon: '&#128279;',
            attributes: { title: 'Hyperlink' },
            result: (rte) => {
                const component = this.editor.getSelected();
                if (component.is('link')) {
                    component.replaceWith(`${component.get('content')}`);
                }
                else {
                    let range = rte.selection().getRangeAt(0);
                    let container = range.commonAncestorContainer;
                    if (container.nodeType == 3)
                        container = container.parentNode;
                    if (container.nodeName === 'A') {
                        const sel = rte.selection();
                        sel.removeAllRanges();
                        range = document.createRange();
                        range.selectNodeContents(container);
                        sel.addRange(range);
                        rte.exec('unlink');
                    }
                    else {
                        const url = window.prompt('Enter the URL to link to:');
                        if (url)
                            rte.insertHTML(`<a class="link" href="${url}">${rte.selection()}</a>`);
                    }
                }
            }
        });
        this.editor.RichTextEditor.add('indent', {
            icon: '&#8594;',
            attributes: { title: 'Indent' },
            result: (rte) => rte.exec('indent')
        });
        this.editor.RichTextEditor.add('outdent', {
            icon: '&#8592;',
            attributes: { title: 'Outdent' },
            result: (rte) => rte.exec('outdent')
        });
        this.editor.RichTextEditor.add('orderedList', {
            icon: '1.',
            attributes: { title: 'Ordered List' },
            result: (rte) => rte.exec('insertOrderedList')
        });
        this.editor.RichTextEditor.add('unorderedList', {
            icon: '&#8226;',
            attributes: { title: 'Unordered List' },
            result: (rte) => rte.exec('insertUnorderedList')
        });
        this.editor.RichTextEditor.add('fontName', {
            icon: 'A',
            attributes: { title: 'Font' },
            result: (rte) => rte.exec('fontName')
        });
    }
    getAllEmailTemplateCategories() {
        this._emailTemplateService.getAllEmailTemplateCategories().subscribe((res) => {
            if (res) {
                this.allEmailTemplateCategories = [];
                this.allEmailTemplateCategories = res.data;
                this.allEmailTemplateCategories = this.allEmailTemplateCategories.filter((x) => x.key === 'REFERRAL');
                this.getEmailTemplateList();
                this.getVariableList();
            }
        });
    }
    getEmailTemplateList() {
        const id = this.allEmailTemplateCategories.length > 0 ? this.allEmailTemplateCategories[0].id : 1;
        this._emailTemplateService.getEmailTemplateList(id).subscribe((res) => {
            if (res) {
                this.templateList = [];
                this.templateList = res.data;
                this.templateList = this.templateList.map((x) => {
                    return {
                        templatename: x.name,
                        emailtemplateid: x.id,
                        template: x.template,
                        category: x.category,
                        id: x.id,
                        subject: x.subject
                    };
                });
            }
        });
    }
    deleteTemplate() {
        this.editStatus = true;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete?',
            accept: () => {
                this.updateTemplate('DELETE');
            }
        });
    }
    validateTemplateCreate() {
        const requestObject = this.emailTemplateForm.getRawValue();
        this._alertService.warn('Validate template name inprogress!');
        this._emailTemplateService.checkDuplicateForCreate(requestObject.templatename).subscribe((res) => {
            if (res) {
                if (res.data.success === true) {
                    this.saveTemplate();
                }
                else {
                    this._alertService.error(res.data.message);
                }
            }
        }, _error => {
            this._alertService.error('Enter required details.');
        });
    }
    validateTempUpdate() {
        const requestObject = this.emailTemplateForm.getRawValue();
        this._alertService.warn('Validate template name inprogress!');
        this._emailTemplateService.checkDuplicateForUpdate(requestObject.templatename, requestObject.id).subscribe((res) => {
            if (res) {
                if (res.data.success === true) {
                    this.updateTemplate('UPDATE');
                }
                else {
                    this._alertService.error(res.data.message);
                }
            }
        }, _error => {
            this._alertService.error('Unable to process your request.');
        });
    }
    copyText(val) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        navigator.clipboard.writeText(val);
        document.body.removeChild(selBox);
        this._alertService.success('Copied variable');
    }
    getVariableList() {
        const id = this.allEmailTemplateCategories.length > 0 ? this.allEmailTemplateCategories[0].key : 'REFFERAL';
        this._emailTemplateService.getVariableList(id).subscribe((res) => {
            if (res) {
                this.templatevaliableList = [];
                this.templatevaliableList = res.data;
            }
        });
    }
}
EmailComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EmailComponent, deps: [{ token: i1.EmailTemplateService }, { token: i2.AlertService }, { token: i3.FormBuilder }, { token: i4.ConfirmationService }, { token: i5.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
EmailComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EmailComponent, selector: "pics-email", ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"bg-white p-2 mb-3 mt-2 d-none\">\r\n  <h5 class=\"col font-weight-bold mb-0\">Email</h5>\r\n  <div class=\"col rightBtnSeacrch clearfix text-right\">\r\n    <div\r\n      class=\"notificationICon f-left\"\r\n      data-container=\"body\"\r\n      data-toggle=\"tooltip\"\r\n      data-placement=\"left\"\r\n      title=\"Notification\">\r\n      <span class=\"clsCount\"> {{ totalNotificationCount }} </span>\r\n      <svg\r\n        width=\"13\"\r\n        height=\"20\"\r\n        viewBox=\"0 0 16 20\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        class=\"bellBtn\"\r\n        data-test-img=\"bell_btn\">\r\n        <path\r\n          d=\"M7 .5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.525A4.994 4.994 0 0 1 12.502 3 7.512 7.512 0 0 1 14 7.503V14l2 1v2H0v-2l2-1V7.504C2 5.88 2.527 4.3 3.5 3.001A5.002 5.002 0 0 1 7 1.025V.5zM6 18h4a2 2 0 1 1-4 0z\"\r\n          fill-rule=\"evenodd\"></path>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-9 pt-10 mb-4\">\r\n    <p-card styleClass=\"d-block h-100\" [style]=\"{ width: '100%' }\">\r\n      <div class=\"row textLeft m-t-10\" [formGroup]=\"emailTemplateForm\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col mb-3\">\r\n              <label for=\"template-name\" class=\"intake-form-labels\">Template Name <span class=\"requiredfield text-danger\">*</span></label>\r\n              <div class=\"col-12 px-0\">\r\n                <input\r\n                  id=\"template\"\r\n                  aria-labelledby=\"template\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"templatename\"\r\n                  fieldKey=\"EMA_TEM_TEMPLATE_NAME\"\r\n                  type=\"email\"\r\n                  placeholder=\"Enter Template Name\"\r\n                  pInputText />\r\n              </div>\r\n            </div>\r\n            <div class=\"col mb-3\">\r\n              <label for=\"template-list\" class=\"intake-form-labels\">Template List</label>\r\n              <div class=\"col-12 px-0\">\r\n                <div class=\"p-inputgroup\">\r\n                  <p-dropdown\r\n                  inputId=\"template-list\"\r\n                    [options]=\"templateList\"\r\n                    styleClass=\"w-100\"\r\n                    fieldKey=\"EMA_TEM_TEMPLATE_LIST\"\r\n                    placeholder=\"Select Template\"\r\n                    optionLabel=\"templatename\"\r\n                    formControlName=\"selectTemplate\"\r\n                    (onChange)=\"editTemplate($event.value)\">\r\n                  </p-dropdown>\r\n                  <button\r\n                    type=\"button\"\r\n                    aria-label=\"Add-template\"\r\n                    pButton\r\n                    pRipple\r\n                    icon=\"pi pi-plus\"\r\n                    class=\"ml-2\"\r\n                    fieldKey=\"EMA_TEM_ADD_NEW_TEMPLATE\"\r\n                    styleClass=\"p-button-success ml-2\"\r\n                    pTooltip=\"Add New Template\"\r\n                    tooltipPosition=\"top\"\r\n                    (click)=\"reset()\"></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col mb-3\">\r\n              <label for=\"subject\" class=\"intake-form-labels\">Subject</label>\r\n              <div class=\"col-12 px-0\">\r\n                <input\r\n                  id=\"subject\"\r\n                  class=\"form-control\"\r\n                  fieldKey=\"EMA_TEM_SUBJECT\"\r\n                  type=\"text\"\r\n                  placeholder=\"Enter subject here\"\r\n                  formControlName=\"subject\"\r\n                  pInputText />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"pt-10\">\r\n            <label> Template Editor <span class=\"requiredfield text-danger\">*</span></label>\r\n          </div>\r\n          <div id=\"emailEditor\"></div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 text-right mt-4\">\r\n          <button\r\n            class=\"btn btn-md bg-white text-primary border-primary btncancel mr-2\"\r\n            fieldKey=\"EMA_TEM_CANCEL\"\r\n            (click)=\"reset()\">\r\n            Cancel\r\n          </button>\r\n          <button\r\n            class=\"btn btn-md btn-primary btncommon mr-2\"\r\n            fieldKey=\"EMA_TEM_DELETE\"\r\n            *ngIf=\"editStatus\"\r\n            (click)=\"deleteTemplate()\">\r\n            Delete\r\n          </button>\r\n          <button\r\n            class=\"mb-0 btn btn-md btn-primary btncommon\"\r\n            fieldKey=\"EMA_TEM_SAVE\"\r\n            (click)=\"editStatus ? validateTempUpdate() : validateTemplateCreate()\">\r\n            {{ editStatus ? 'Update' : 'Save' }}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </p-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-3 pl-0 pt-10 mb-4\">\r\n    <p-card styleClass=\"d-block h-100 w-100\">\r\n      <div class=\"clearfix pt-10\">\r\n        <div class=\"attach-tb table-theme table-responsive notificationConfig\">\r\n          <label for=\"client-name\" class=\"intake-form-labels\">Variable Name</label>\r\n          <table aria-describedby=\"Variable Name\" class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Variable</th>\r\n                <th scope=\"col\">Copy</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let template of templatevaliableList; let i = index\">\r\n                <td style=\"cursor: pointer\">{{ template.value }}</td>\r\n                <td>\r\n                  <em class=\"pi pi-copy\" (click)=\"copyText(template.value)\"></em>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <ng-template #noRecordFound>\r\n          <div class=\"claerfix\">\r\n            <div class=\"text-center no-record-img mt-5\">\r\n              <p class=\"m-0\">No Record Found</p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </p-card>\r\n  </div>\r\n</div>\r\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n", styles: [".m-10{margin:10px}.config-action{margin:10px}.notificationConfig .assesmentActive{background-color:#f0f8ff!important}.m-b-25{margin-bottom:25px}.email-template-config button{font-size:1.5em!important}.fixedBtnsHoveAction{width:48px;position:fixed;bottom:20px;right:20px;z-index:999}.fixedBtnsHoveAction .triangeBtn{width:48px;height:48px;cursor:pointer;position:relative;border-radius:50%}.fixedBtnsHoveAction .triangeBtn .beforeActionICon{width:100%;height:100%;left:-3px;position:relative;z-index:1;transition:all .3s linear 0s;opacity:1;overflow:hidden;border-radius:50%}.fixedBtnsHoveAction .triangeBtn .beforeActionICon .connectBtn{width:100%;height:100%;fill:var(--primary)}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon{position:absolute;width:100%;height:100%;top:0;left:-3px;z-index:999;background-color:var(--primary);transition:all .3s linear 0s;opacity:0;cursor:pointer;overflow:hidden;border-radius:50%;padding:5px}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon .chatIconNew{width:100%;height:100%;fill:var(--primary)}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon .logoIconChat{width:100%;height:100%;background-color:#fff;border-radius:50%;padding:3px;overflow:hidden}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon .logoIconChat img{width:100%;height:100%;display:block}.fixedBtnsHoveAction .notificationICon{width:48px;height:48px;left:-3px;position:relative;background-color:var(--primary);border-radius:50%;overflow:hidden;margin-bottom:0;transition:all .2s linear 0s;opacity:0;cursor:pointer}.fixedBtnsHoveAction .notificationICon .bellBtn{width:20px;height:20px;margin:0 auto;top:13px;display:block;position:relative;fill:#fff;animation:tada 1.5s ease infinite}.fixedBtnsHoveAction:hover .triangeBtn .beforeActionICon{opacity:0}.fixedBtnsHoveAction:hover .triangeBtn .afterChangeChatIcon{opacity:1}.fixedBtnsHoveAction:hover .notificationICon{margin-bottom:15px;opacity:1;animation:bounce .54s ease;animation-delay:.15s}.topNavigation{width:100%;border-bottom:solid 1px #ddd;box-shadow:10px 2px 10px #0000001a;position:relative;z-index:99;height:50px;padding:0 15px}.topNavigation .leftFlowMenu{padding:15px 15px 15px 0}.topNavigation .leftFlowMenu .pageIcon{height:20px;width:auto;display:inline-block}.topNavigation .leftFlowMenu span,.topNavigation .leftFlowMenu a{display:inline-block;padding:0 6px;line-height:20px;color:#555;font-size:14px;font-weight:400;text-transform:uppercase}.topNavigation .leftFlowMenu span.pageName,.topNavigation .leftFlowMenu a.pageName{color:#222;padding-left:0}.topNavigation .leftFlowMenu span.active,.topNavigation .leftFlowMenu a.active{color:var(--primary)}.topNavigation .rightSearch{padding:6px 0 6px 15px}.topNavigation .rightSearch .search-box{position:relative}.topNavigation .rightSearch .search-box input{line-height:36px;padding:0 15px 0 40px;border:0;border-bottom:1px solid #ddd;display:block;width:100%}.topNavigation .rightSearch .search-box input:focus{border:0;border-bottom:solid 1px #ddd;outline:none}.topNavigation .rightSearch .search-box button,.topNavigation .rightSearch .search-box button:focus{width:36px;height:36px;line-height:36px;color:#777;position:absolute;top:1px;left:-39px;background-color:transparent;font-size:17px;border:0}.topNavigation .rightSearch .notificationICon{width:38px;height:38px;position:relative;background-color:#f7fcff;border-radius:50%;display:inline-block;cursor:pointer}.topNavigation .rightSearch .notificationICon .bellBtn{width:20px;height:20px;margin:0 auto;top:8px;display:block;position:relative;fill:var(--primary)}.topNavigation .rightSearch .notificationICon .clsCount+.bellBtn{animation:tada 1.5s ease infinite}.topNavigation .rightSearch .notificationICon .clsCount{position:absolute;top:-6px;right:0px;width:18px;height:18px;border-radius:50%;text-align:center;line-height:17px;color:var(--primary);font-size:12px;font-weight:700}.table{border:1px solid #ddd;border-color:var(--table-border)}.table thead th{padding:5px;background:var(--background-color);color:var(--text-dark);border-width:1px;border-color:var(--table-border);font-size:var(--base-font-size)}.table tbody td{padding:5px;vertical-align:middle;font-size:var(--font-14);color:var(--text-dark);border-color:var(--table-border)}.table thead th:last-child,.table tbody td:last-child{width:110px}.table .addBtnsNew{padding:0 10px}#emailEditor{height:935px!important;border:1px solid var(--table-border)}.p-button-icon-only{padding:.1rem 0}:host ::ng-deep .p-dropdown .p-dropdown-panel{background:var(--bg-light)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item{color:var(--text-dark)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover{background:var(--primary);color:var(--hover-text)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:focus{background:var(--primary);color:var(--hover-text)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:focus{background:var(--primary);color:var(--hover-text)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items p-dropdownitem:hover,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items p-dropdownitem:focus{background:var(--primary);color:var(--hover-text)}@media print{.hideForPrint{display:none}}:host ::ng-deep .gjs-editor{font-family:\"Roboto\",sans-serif!important}:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{display:flex;align-items:center;justify-content:center}:host ::ng-deep .gjs-editor .gjs-block{display:flex;align-items:center;justify-content:center}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-family:\"Roboto\",sans-serif!important}@media screen and (min-width: 1024px){:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{font-size:var(--base-font-size)}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:45px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:7px}}@media screen and (max-width: 1280px){:host ::ng-deep .gjs-editor .gjs-pn-panel .gjs-blocks-cs .gjs-block{width:100%;min-height:60px;margin:5px 5px 0}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:45px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:10px}}@media screen and (min-width: 1530px){:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{font-size:var(--font-17)}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:52px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:9px}}@media screen and (min-width: 1600px){:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{font-size:var(--font-16)}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:52px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:10px}}\n"], components: [{ type: i6.AlertComponent, selector: "app-alert" }, { type: i7.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i8.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }, { type: i9.ConfirmDialog, selector: "p-confirmDialog", inputs: ["header", "icon", "message", "style", "styleClass", "maskStyleClass", "acceptIcon", "acceptLabel", "acceptAriaLabel", "acceptVisible", "rejectIcon", "rejectLabel", "rejectAriaLabel", "rejectVisible", "acceptButtonStyleClass", "rejectButtonStyleClass", "closeOnEscape", "dismissableMask", "blockScroll", "rtl", "closable", "appendTo", "key", "autoZIndex", "baseZIndex", "transitionOptions", "focusTrap", "defaultFocus", "breakpoints", "visible", "position"], outputs: ["onHide"] }], directives: [{ type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i10.PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i11.InputText, selector: "[pInputText]" }, { type: i12.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading"] }, { type: i13.Ripple, selector: "[pRipple]" }, { type: i14.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { type: i15.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i15.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EmailComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'pics-email',
                    templateUrl: './email.component.html',
                    styleUrls: ['./email.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.EmailTemplateService }, { type: i2.AlertService }, { type: i3.FormBuilder }, { type: i4.ConfirmationService }, { type: i5.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvZW1haWwvc3JjL2xpYi9waWNzLWVtYWlsL2VtYWlsL2VtYWlsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2VtYWlsL3NyYy9saWIvcGljcy1lbWFpbC9lbWFpbC9lbWFpbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBS2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVbkUsTUFBTSxPQUFPLGNBQWM7SUFnQnpCLFlBQ1UscUJBQTJDLEVBQzNDLGFBQTJCLEVBQzNCLFdBQXdCLEVBQ3hCLG1CQUF3QyxFQUN4QyxhQUErQjtRQUovQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO1FBQzNDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBbkJ6QyxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBRXZCLDJCQUFzQixHQUFHLENBQUMsQ0FBQztRQUMzQiwrQkFBMEIsR0FBUSxFQUFFLENBQUM7UUFFckMseUJBQW9CLEdBQVEsRUFBRSxDQUFDO1FBRS9CLFlBQU8sR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBV2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQs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QU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxlQUFlO1FBQ2IsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUM1RyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3BFLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs0R0FwY1UsY0FBYztnR0FBZCxjQUFjLGtEQ2YzQix3Mk1BOEpBOzRGRC9JYSxjQUFjO2tCQUwxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixXQUFXLEVBQUUsd0JBQXdCO29CQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuLi9AY29yZS9zZXJ2aWNlL2FsZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5pbXBvcnQgeyBFbWFpbFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uL0Bjb3JlL3NlcnZpY2UvZW1haWwtdGVtcGxhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFJCQUNJTkZPIH0gZnJvbSAnLi4vQGNvcmUvdXJscy9lbWFpbC10ZW1wbGF0ZS11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmRlY2xhcmUgY29uc3QgJDogYW55O1xyXG5kZWNsYXJlIGxldCBncmFwZXNqczogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BpY3MtZW1haWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lbWFpbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZW1haWwuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1haWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGVtYWlsVGVtcGxhdGVGb3JtITogRm9ybUdyb3VwO1xyXG4gIGVkaXRUZW1wbGF0ZUlkID0gJyc7XHJcbiAgZWRpdFN0YXR1cyA9IGZhbHNlO1xyXG4gIGN1cnJlbnRVc2VyOiBhbnk7XHJcbiAgdGVtcGxhdGVMaXN0OiBhbnkgPSBbXTtcclxuICBlZGl0b3I6IGFueTtcclxuICB0b3RhbE5vdGlmaWNhdGlvbkNvdW50ID0gMDtcclxuICBhbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllczogYW55ID0gW107XHJcbiAgZ2VuZXJhdGVUZW1wbGF0ZTogYW55O1xyXG4gIHRlbXBsYXRldmFsaWFibGVMaXN0OiBhbnkgPSBbXTtcclxuICBlbnZpcm9ubWVudDogYW55O1xyXG4gIFJCQUNPUkc6IFJCQUNJTkZPID0gbmV3IFJCQUNJTkZPKCk7XHJcbiAgUEVSTUlTU0lPTjogYW55O1xyXG4gIG9yZ1N1YnMhOiBTdWJzY3JpcHRpb247XHJcbiAgb3JnSWQ6IGFueTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VtYWlsVGVtcGxhdGVTZXJ2aWNlOiBFbWFpbFRlbXBsYXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgX2FsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuY3VycmVudFVzZXIgPSAnJztcclxuICAgIHRoaXMuZm9ybUluaXRpYWxpemUoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vcmdTdWJzID0gIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzWydSQkFDT1JHJ10gJiYgcmVzWydSQkFDT1JHJ10gIT09ICcnKSB7XHJcbiAgICAgICAgdGhpcy5SQkFDT1JHID0gcmVzWydSQkFDT1JHJ107XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5SQkFDT1JHLCAnUkJBQ09SRyBFdmVudCBTY2hlZHVsZXInKTtcclxuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gdGhpcy5SQkFDT1JHWydlbnZpcm9ubWVudCddO1xyXG4gICAgICAgIHRoaXMub3JnSWQgPSBwYXJzZUludCh0aGlzLlJCQUNPUkdbJ29yZ0lEJ10pO1xyXG4gICAgICAgIGlmKHRoaXMuZW52aXJvbm1lbnQpe1xyXG4gICAgICAgICAgdGhpcy5nZXRBbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllcygpO1xyXG4gICAgICAgICAgdGhpcy5pbml0RWRpdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5vcmdTdWJzLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBmb3JtSW5pdGlhbGl6ZSgpIHtcclxuICAgIHRoaXMuZW1haWxUZW1wbGF0ZUZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgdGVtcGxhdGVuYW1lOiBbJyddLFxyXG4gICAgICBzZW5kZXJFbWFpbHM6IFsnJ10sXHJcbiAgICAgIHRlbXBsYXRlOiBbJyddLFxyXG4gICAgICBpZDogWycnXSxcclxuICAgICAgc2VsZWN0VGVtcGxhdGU6IFsnJ10sXHJcbiAgICAgIHN1YmplY3Q6IFsnJ11cclxuICAgIH0pO1xyXG4gIH1cclxuICBlZGl0VGVtcGxhdGUodGVtcGxhdGVpbmZvOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuZWRpdFRlbXBsYXRlSWQgPSB0ZW1wbGF0ZWluZm8gPyB0ZW1wbGF0ZWluZm8uaWQgOiAnJztcclxuICAgICAgdGhpcy5lZGl0U3RhdHVzID0gdHJ1ZTtcclxuICAgICAgY29uc3QgZWRpdERhdGE6IGFueSA9IHRoaXMudGVtcGxhdGVMaXN0LmZpbHRlcigoZGF0YTogYW55KSA9PiBkYXRhLmVtYWlsdGVtcGxhdGVpZCA9PT0gdGhpcy5lZGl0VGVtcGxhdGVJZClbMF07XHJcbiAgICAgIHRoaXMuZWRpdG9yLnNldENvbXBvbmVudHMoZWRpdERhdGEudGVtcGxhdGUpO1xyXG4gICAgICB0aGlzLmVtYWlsVGVtcGxhdGVGb3JtLnNldFZhbHVlKHtcclxuICAgICAgICB0ZW1wbGF0ZW5hbWU6IGVkaXREYXRhLnRlbXBsYXRlbmFtZSxcclxuICAgICAgICBzZW5kZXJFbWFpbHM6ICcnLFxyXG4gICAgICAgIHRlbXBsYXRlOiBlZGl0RGF0YS50ZW1wbGF0ZSxcclxuICAgICAgICBpZDogZWRpdERhdGEuaWQsXHJcbiAgICAgICAgc2VsZWN0VGVtcGxhdGU6IGVkaXREYXRhLFxyXG4gICAgICAgIHN1YmplY3Q6IGVkaXREYXRhLnN1YmplY3RcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBpbiBnZXRUZW1wbGF0ZUxpc3Q6ICR7ZX1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVUZW1wbGF0ZSgpOiBhbnkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZ2V0RWRpdG9ySFRNTCA9IHRoaXMuZWRpdG9yLnJ1bkNvbW1hbmQoJ2dqcy1nZXQtaW5saW5lZC1odG1sJyk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3RPYmplY3QgPSB0aGlzLmVtYWlsVGVtcGxhdGVGb3JtLmdldFJhd1ZhbHVlKCk7XHJcbiAgICAgIGlmICh0aGlzLmVkaXRTdGF0dXMpIHtcclxuICAgICAgICByZXF1ZXN0T2JqZWN0WydlbWFpbHRlbXBsYXRlaWQnXSA9IHRoaXMuZWRpdFRlbXBsYXRlSWQ7XHJcbiAgICAgIH1cclxuICAgICAgcmVxdWVzdE9iamVjdFsndGVtcGxhdGUnXSA9IGdldEVkaXRvckhUTUw7XHJcbiAgICAgIGlmIChyZXF1ZXN0T2JqZWN0LnRlbXBsYXRlbmFtZSA9PSAnJyB8fCByZXF1ZXN0T2JqZWN0LnRlbXBsYXRlID09ICcnKSB7XHJcbiAgICAgICAgdGhpcy5fYWxlcnRTZXJ2aWNlLmVycm9yKCdUZW1wbGF0ZSBuYW1lIGFuZCB0ZW1wbGF0ZSBjYW5ub3QgYmUgZW1wdHknKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaW5wdXRSZXF1ZXN0ID0ge1xyXG4gICAgICAgIG5hbWU6IHJlcXVlc3RPYmplY3QudGVtcGxhdGVuYW1lLFxyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1ZXN0T2JqZWN0LnRlbXBsYXRlLFxyXG4gICAgICAgIGNhdGVnb3J5OiB0aGlzLmFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyB0aGlzLmFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzWzBdLmlkIDogMSxcclxuICAgICAgICBzdWJqZWN0OiByZXF1ZXN0T2JqZWN0LnN1YmplY3RcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fZW1haWxUZW1wbGF0ZVNlcnZpY2UuY3JlYXRlVGVtcGxhdGUoaW5wdXRSZXF1ZXN0KS5zdWJzY3JpYmUoX1Jlc3BvbnNlID0+IHtcclxuICAgICAgICB0aGlzLmVkaXRUZW1wbGF0ZUlkID0gJyc7XHJcbiAgICAgICAgdGhpcy5fYWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoJ1RlbXBsYXRlIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0RW1haWxUZW1wbGF0ZUxpc3QoKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBpbiB0aGUgcmVzdG9yZVRyaWdnZXI6ICR7ZX1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVRlbXBsYXRlKHN0YXR1czogYW55KTogYW55IHtcclxuICAgIGNvbnN0IGdldEVkaXRvckhUTUwgPSB0aGlzLmVkaXRvci5ydW5Db21tYW5kKCdnanMtZ2V0LWlubGluZWQtaHRtbCcpO1xyXG4gICAgY29uc3QgcmVxdWVzdE9iamVjdCA9IHRoaXMuZW1haWxUZW1wbGF0ZUZvcm0uZ2V0UmF3VmFsdWUoKTtcclxuICAgIHJlcXVlc3RPYmplY3RbJ3RlbXBsYXRlJ10gPSBnZXRFZGl0b3JIVE1MO1xyXG4gICAgaWYgKHJlcXVlc3RPYmplY3QudGVtcGxhdGVuYW1lID09ICcnIHx8IHJlcXVlc3RPYmplY3QudGVtcGxhdGUgPT0gJycpIHtcclxuICAgICAgdGhpcy5fYWxlcnRTZXJ2aWNlLmVycm9yKCdUZW1wbGF0ZSBuYW1lIGFuZCB0ZW1wbGF0ZSBjYW5ub3QgYmUgZW1wdHknKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW5wdXRSZXF1ZXN0ID0ge1xyXG4gICAgICBuYW1lOiByZXF1ZXN0T2JqZWN0LnRlbXBsYXRlbmFtZSxcclxuICAgICAgdGVtcGxhdGU6IHJlcXVlc3RPYmplY3QudGVtcGxhdGUsXHJcbiAgICAgIGNhdGVnb3J5OiB0aGlzLmFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyB0aGlzLmFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzWzBdLmlkIDogMSxcclxuICAgICAgc3ViamVjdDogcmVxdWVzdE9iamVjdC5zdWJqZWN0LFxyXG4gICAgICBkZWxldGVkOiBzdGF0dXMgPT09ICdERUxFVEUnID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgdGhpcy5nZW5lcmljVGVtcGxhdGUoaW5wdXRSZXF1ZXN0LCBzdGF0dXMpO1xyXG4gIH1cclxuICBnZW5lcmljVGVtcGxhdGUobW9kYWw6IGFueSwgc3RhdHVzOiBhbnkpIHtcclxuICAgIHRoaXMuX2VtYWlsVGVtcGxhdGVTZXJ2aWNlLlVwZGF0ZURlbGV0ZVRlbXBsYXRlKHRoaXMuZWRpdFRlbXBsYXRlSWQsIG1vZGFsKS5zdWJzY3JpYmUoX1Jlc3BvbnNlID0+IHtcclxuICAgICAgdGhpcy5lZGl0VGVtcGxhdGVJZCA9ICcnO1xyXG4gICAgICB0aGlzLmVkaXRTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gJ0RFTEVURScpIHtcclxuICAgICAgICB0aGlzLl9hbGVydFNlcnZpY2Uuc3VjY2VzcygnVGVtcGxhdGUgZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9hbGVydFNlcnZpY2Uuc3VjY2VzcygnVGVtcGxhdGUgdXBkYXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgIHRoaXMuZ2V0RW1haWxUZW1wbGF0ZUxpc3QoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuZWRpdFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5lZGl0VGVtcGxhdGVJZCA9ICcnO1xyXG4gICAgdGhpcy5lZGl0b3IuQ29tcG9uZW50cy5jbGVhcigpO1xyXG4gICAgdGhpcy5lbWFpbFRlbXBsYXRlRm9ybS5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEVkaXRvcigpIHtcclxuICAgIGNvbnN0IHVzZXJfYWNjZXNzX3Rva2VuID0gdGhpcy5jdXJyZW50VXNlci5pZDtcclxuICAgIGNvbnN0IHVwbG9hZFVSTCA9ICsnL2F0dGFjaG1lbnRzL3VwbG9hZHNGaWxlJyArICc/YWNjZXNzX3Rva2VuPScgKyB0aGlzLmN1cnJlbnRVc2VyLmlkO1xyXG4gICAgY29uc3QgdW5pcXVlX3RpbWVzdGFtcCA9IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgIHRoaXMuZWRpdG9yID0gZ3JhcGVzanMuaW5pdCh7XHJcbiAgICAgIGNvbnRhaW5lcjogJyNlbWFpbEVkaXRvcicsXHJcbiAgICAgIHN0b3JhZ2VNYW5hZ2VyOiB7IHR5cGU6IDAgfSxcclxuICAgICAgZnJvbUVsZW1lbnQ6IDEsXHJcbiAgICAgIGNvbXBvbmVudHM6ICc8ZGl2IGNsYXNzPVwidHh0LXJlZFwiPkhlbGxvIHdvcmxkITwvZGl2PicsXHJcbiAgICAgIHN0eWxlOiAnLnR4dC1yZWR7Y29sb3I6IHJlZH0nLFxyXG4gICAgICBwbHVnaW5zOiBbJ2dqcy1ibG9ja3MtYmFzaWMnLCAnZ2pzLXByZXNldC1uZXdzbGV0dGVyJ10sXHJcbiAgICAgIHBsdWdpbnNPcHRzOiB7XHJcbiAgICAgICAgJ2dqcy1ibG9ja3MtYmFzaWMnOiB7fSxcclxuICAgICAgICAnZ2pzLXByZXNldC1uZXdzbGV0dGVyJzoge1xyXG4gICAgICAgICAgbW9kYWxUaXRsZUltcG9ydDogJ0ltcG9ydCB0ZW1wbGF0ZSdcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIHVwbG9hZE5hbWU6IGBmaWxlc18ke3VuaXF1ZV90aW1lc3RhbXB9YCxcclxuICAgICAgYXNzZXRNYW5hZ2VyOiB7XHJcbiAgICAgICAgc3RvcmFnZVR5cGU6ICcnLFxyXG4gICAgICAgIHN0b3JlT25DaGFuZ2U6IHRydWUsXHJcbiAgICAgICAgc3RvcmVBZnRlclVwbG9hZDogdHJ1ZSxcclxuICAgICAgICB1cGxvYWQ6IHVwbG9hZFVSTCwgLy9mb3IgdGVtcG9yYXJ5IHN0b3JhZ2VcclxuICAgICAgICB1cGxvYWROYW1lOiBgZmlsZXNfJHt1bmlxdWVfdGltZXN0YW1wfWAsXHJcbiAgICAgICAgYXNzZXRzOiBbXSxcclxuICAgICAgICB1cGxvYWRGaWxlOiAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlcyA9IGUuZGF0YVRyYW5zZmVyID8gZS5kYXRhVHJhbnNmZXIuZmlsZXMgOiBlLnRhcmdldC5maWxlcztcclxuICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4gZmlsZXMpIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZXNbaV0pOyAvL2NvbnRhaW5pbmcgYWxsIHRoZSBzZWxlY3RlZCBpbWFnZXMgZnJvbSBsb2NhbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiB1cGxvYWRVUkwsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBhY2Nlc3NfdG9rZW46IHVzZXJfYWNjZXNzX3Rva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgY3Jvc3NEb21haW46IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIG1pbWVUeXBlOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5lZGl0b3IuQXNzZXRNYW5hZ2VyLmFkZChyZXN1bHQuczNidWNrZXRwYXRobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmVkaXRvckluaXQoKTtcclxuICB9XHJcblxyXG4gIGVkaXRvckluaXQoKSB7XHJcbiAgICBjb25zdCBibG9ja19wYXJhZ3JhcGggPSB7XHJcbiAgICAgIGxhYmVsOiAnUGFyYWdyYXBoJyxcclxuICAgICAgY2F0ZWdvcnk6ICdUZXh0JyxcclxuICAgICAgY29udGVudDogYDxwPlxyXG4gICAgICAgICAge0luc2VydCBQYXJhZ3JhcGggQ29udGVudCBIZXJlfS5cclxuICAgICAgPC9wPmAsXHJcbiAgICAgIHNlbGVjdDogdHJ1ZVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGJsb2NrX2FkZHJlc3MgPSB7XHJcbiAgICAgIGxhYmVsOiAnQWRkcmVzcycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVGV4dCcsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHsgdGl0bGU6ICdBZGRyZXNzJyB9LFxyXG4gICAgICBjb250ZW50OiBgPGRpdiBpZD1cImk1OWhcIiBzdHlsZT1cImJveC1zaXppbmc6IGJvcmRlci1ib3g7IHBhZGRpbmc6IDEwcHg7XCI+QWRkcmVzc1xyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImlodGpcIiBzdHlsZT1cImJveC1zaXppbmc6IGJvcmRlci1ib3g7IHBhZGRpbmc6IDEwcHg7XCI+U3RyZWV0OiB7e3N0cmVldH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJpbTV6XCIgc3R5bGU9XCJib3gtc2l6aW5nOiBib3JkZXItYm94OyBwYWRkaW5nOiAxMHB4O1wiPkNpdHk6IHt7Y2l0eX1cclxuICAgICAgPC9kaXY+YCxcclxuICAgICAgc2VsZWN0OiB0cnVlXHJcbiAgICB9O1xyXG4gICAgdGhpcy5lZGl0b3IuQmxvY2tNYW5hZ2VyLmFkZCgnYWRkcmVzcycsIGJsb2NrX2FkZHJlc3MpO1xyXG4gICAgdGhpcy5lZGl0b3IuQmxvY2tNYW5hZ2VyLmFkZCgncGFyYWdyYXBoJywgYmxvY2tfcGFyYWdyYXBoKTtcclxuXHJcbiAgICB0aGlzLmVkaXRvci5QYW5lbHMuZ2V0QnV0dG9uKCdvcHRpb25zJywgJ3N3LXZpc2liaWxpdHknKTtcclxuICAgIHRoaXMuZWRpdG9yLmdldENvbmZpZygpLnNob3dEZXZpY2VzID0gMDtcclxuICAgIHRoaXMuZWRpdG9yLlBhbmVscy5hZGRQYW5lbCh7IGlkOiAnZGV2aWNlcy1jJyB9KVxyXG4gICAgICAuZ2V0KCdidXR0b25zJylcclxuICAgICAgLmFkZChbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICdwcmV2aWV3JyxcclxuICAgICAgICAgIGNvbW1hbmQ6IGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICAgICAgICAgICAgZS5ydW5Db21tYW5kKCdwcmV2aWV3Jyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2xhc3NOYW1lOiAnZmEgZmEtcGxheSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAncHJpbnQnLFxyXG4gICAgICAgICAgY29tbWFuZDogZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgICAgICAgICBjb25zdCB3aW4gPSB3aW5kb3cub3BlbignJywgJ19ibGFuaycsICd0b3A9MCxsZWZ0PTAsaGVpZ2h0PTEwMCUsd2lkdGg9YXV0bycpITtcclxuICAgICAgICAgICAgY29uc3QgaW1nID0gd2luLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBpbWcuaW5uZXJIVE1MID0gZS5nZXRIdG1sKCk7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5jc3NUZXh0ID0gZS5nZXRDc3MoKTtcclxuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTAwJScpO1xyXG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTAwJScpO1xyXG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdpZCcsICdoaWRlRm9yUHJpbnQnKTtcclxuICAgICAgICAgICAgd2luLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgd2luLnByaW50KCk7XHJcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgd2luLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgd2luLnByaW50KCk7XHJcbiAgICAgICAgICAgICAgd2luLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2xhc3NOYW1lOiAnZmEgZmEtcHJpbnQnXHJcbiAgICAgICAgfVxyXG4gICAgICBdKTtcclxuXHJcbiAgICB0aGlzLmVkaXRvci5SaWNoVGV4dEVkaXRvci5yZW1vdmUoJ2xpbmsnKTtcclxuXHJcbiAgICB0aGlzLmVkaXRvci5SaWNoVGV4dEVkaXRvci5hZGQoJ2Ryb3BjYXAnLCB7XHJcbiAgICAgIGljb246ICc8Yj5EPHN1cD5jPC9zdXA+PC9iPicsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHsgdGl0bGU6ICdEcm9wY2FwJyB9LFxyXG4gICAgICByZXN1bHQ6IChydGU6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuZWRpdG9yLmdldFNlbGVjdGVkKCk7XHJcblxyXG4gICAgICAgIGlmIChjb21wb25lbnQuaXMoJ3RleHQnKSAmJiBjb21wb25lbnQuZ2V0Q2xhc3NlcygpLmluY2x1ZGVzKCdkcm9wQ2FwcycpKSB7XHJcbiAgICAgICAgICBjb21wb25lbnQucmVwbGFjZVdpdGgoYCR7Y29tcG9uZW50LmdldCgnY29udGVudCcpfWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCByYW5nZSA9IHJ0ZS5zZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApO1xyXG5cclxuICAgICAgICAgIGxldCBjb250YWluZXIgPSByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgICBpZiAoY29udGFpbmVyLm5vZGVUeXBlID09IDMpIGNvbnRhaW5lciA9IGNvbnRhaW5lci5wYXJlbnROb2RlO1xyXG5cclxuICAgICAgICAgIGlmIChjb250YWluZXIubm9kZU5hbWUgPT0gJ1NQQU4nICYmIGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3BDYXBzJykpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gY29udGFpbmVyLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250YWluZXIuaW5uZXJIVE1MKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGluc2VydCBhbGwgb3VyIGNoaWxkcmVuIGJlZm9yZSBvdXJzZWx2ZXMuXHJcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY29udGVudCwgY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcnRlLmluc2VydEhUTUwoYDxzcGFuIGNsYXNzPVwiZHJvcENhcHNcIj4ke3J0ZS5zZWxlY3Rpb24oKX08L3NwYW4+YCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmVkaXRvci5SaWNoVGV4dEVkaXRvci5hZGQoJ3N1cGVyc2NyaXB0Jywge1xyXG4gICAgICBpY29uOiAnPGI+UzxzdXA+czwvc3VwPjwvYj4nLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7IHRpdGxlOiAnU3VwZXJzY3JpcHQnIH0sXHJcbiAgICAgIHJlc3VsdDogKHJ0ZTogYW55KSA9PiBydGUuZXhlYygnc3VwZXJzY3JpcHQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5lZGl0b3IuUmljaFRleHRFZGl0b3IuYWRkKCdzdWJzY3JpcHQnLCB7XHJcbiAgICAgIGljb246ICc8Yj5TPHN1Yj5zPC9zdWI+PC9iPicsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHsgdGl0bGU6ICdTdWJzY3JpcHQnIH0sXHJcbiAgICAgIHJlc3VsdDogKHJ0ZTogYW55KSA9PiBydGUuZXhlYygnc3Vic2NyaXB0JylcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZWRpdG9yLlJpY2hUZXh0RWRpdG9yLmFkZCgnaHlwZXJsaW5rJywge1xyXG4gICAgICBpY29uOiAnJiMxMjgyNzk7JyxcclxuICAgICAgYXR0cmlidXRlczogeyB0aXRsZTogJ0h5cGVybGluaycgfSxcclxuICAgICAgcmVzdWx0OiAocnRlOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmVkaXRvci5nZXRTZWxlY3RlZCgpO1xyXG5cclxuICAgICAgICBpZiAoY29tcG9uZW50LmlzKCdsaW5rJykpIHtcclxuICAgICAgICAgIGNvbXBvbmVudC5yZXBsYWNlV2l0aChgJHtjb21wb25lbnQuZ2V0KCdjb250ZW50Jyl9YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCByYW5nZSA9IHJ0ZS5zZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApO1xyXG5cclxuICAgICAgICAgIGxldCBjb250YWluZXIgPSByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcjtcclxuICAgICAgICAgIGlmIChjb250YWluZXIubm9kZVR5cGUgPT0gMykgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgICAgaWYgKGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ0EnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbCA9IHJ0ZS5zZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhjb250YWluZXIpO1xyXG4gICAgICAgICAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgICBydGUuZXhlYygndW5saW5rJyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cucHJvbXB0KCdFbnRlciB0aGUgVVJMIHRvIGxpbmsgdG86Jyk7XHJcbiAgICAgICAgICAgIGlmICh1cmwpIHJ0ZS5pbnNlcnRIVE1MKGA8YSBjbGFzcz1cImxpbmtcIiBocmVmPVwiJHt1cmx9XCI+JHtydGUuc2VsZWN0aW9uKCl9PC9hPmApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5lZGl0b3IuUmljaFRleHRFZGl0b3IuYWRkKCdpbmRlbnQnLCB7XHJcbiAgICAgIGljb246ICcmIzg1OTQ7JyxcclxuICAgICAgYXR0cmlidXRlczogeyB0aXRsZTogJ0luZGVudCcgfSxcclxuICAgICAgcmVzdWx0OiAocnRlOiBhbnkpID0+IHJ0ZS5leGVjKCdpbmRlbnQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5lZGl0b3IuUmljaFRleHRFZGl0b3IuYWRkKCdvdXRkZW50Jywge1xyXG4gICAgICBpY29uOiAnJiM4NTkyOycsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHsgdGl0bGU6ICdPdXRkZW50JyB9LFxyXG4gICAgICByZXN1bHQ6IChydGU6IGFueSkgPT4gcnRlLmV4ZWMoJ291dGRlbnQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5lZGl0b3IuUmljaFRleHRFZGl0b3IuYWRkKCdvcmRlcmVkTGlzdCcsIHtcclxuICAgICAgaWNvbjogJzEuJyxcclxuICAgICAgYXR0cmlidXRlczogeyB0aXRsZTogJ09yZGVyZWQgTGlzdCcgfSxcclxuICAgICAgcmVzdWx0OiAocnRlOiBhbnkpID0+IHJ0ZS5leGVjKCdpbnNlcnRPcmRlcmVkTGlzdCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmVkaXRvci5SaWNoVGV4dEVkaXRvci5hZGQoJ3Vub3JkZXJlZExpc3QnLCB7XHJcbiAgICAgIGljb246ICcmIzgyMjY7JyxcclxuICAgICAgYXR0cmlidXRlczogeyB0aXRsZTogJ1Vub3JkZXJlZCBMaXN0JyB9LFxyXG4gICAgICByZXN1bHQ6IChydGU6IGFueSkgPT4gcnRlLmV4ZWMoJ2luc2VydFVub3JkZXJlZExpc3QnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5lZGl0b3IuUmljaFRleHRFZGl0b3IuYWRkKCdmb250TmFtZScsIHtcclxuICAgICAgaWNvbjogJ0EnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7IHRpdGxlOiAnRm9udCcgfSxcclxuICAgICAgcmVzdWx0OiAocnRlOiBhbnkpID0+IHJ0ZS5leGVjKCdmb250TmFtZScpXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0QWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXMoKSB7XHJcbiAgICB0aGlzLl9lbWFpbFRlbXBsYXRlU2VydmljZS5nZXRBbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllcygpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzID0gcmVzLmRhdGE7XHJcbiAgICAgICAgdGhpcy5hbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllcyA9IHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXMuZmlsdGVyKCh4OiBhbnkpID0+IHgua2V5ID09PSAnUkVGRVJSQUwnKTtcclxuICAgICAgICB0aGlzLmdldEVtYWlsVGVtcGxhdGVMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5nZXRWYXJpYWJsZUxpc3QoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGdldEVtYWlsVGVtcGxhdGVMaXN0KCkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLmFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyB0aGlzLmFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzWzBdLmlkIDogMTtcclxuICAgIHRoaXMuX2VtYWlsVGVtcGxhdGVTZXJ2aWNlLmdldEVtYWlsVGVtcGxhdGVMaXN0KGlkKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVMaXN0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUxpc3QgPSB0aGlzLnRlbXBsYXRlTGlzdC5tYXAoKHg6IGFueSk9PiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZW5hbWU6IHgubmFtZSxcclxuICAgICAgICAgICAgZW1haWx0ZW1wbGF0ZWlkOiB4LmlkLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogeC50ZW1wbGF0ZSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHguY2F0ZWdvcnksXHJcbiAgICAgICAgICAgIGlkOiB4LmlkLFxyXG4gICAgICAgICAgICBzdWJqZWN0OiB4LnN1YmplY3RcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBkZWxldGVUZW1wbGF0ZSgpIHtcclxuICAgIHRoaXMuZWRpdFN0YXR1cyA9IHRydWU7XHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2UuY29uZmlybSh7XHJcbiAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBkZWxldGU/JyxcclxuICAgICAgYWNjZXB0OiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUZW1wbGF0ZSgnREVMRVRFJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICB2YWxpZGF0ZVRlbXBsYXRlQ3JlYXRlKCkge1xyXG4gICAgY29uc3QgcmVxdWVzdE9iamVjdCA9IHRoaXMuZW1haWxUZW1wbGF0ZUZvcm0uZ2V0UmF3VmFsdWUoKTtcclxuICAgIHRoaXMuX2FsZXJ0U2VydmljZS53YXJuKCdWYWxpZGF0ZSB0ZW1wbGF0ZSBuYW1lIGlucHJvZ3Jlc3MhJyk7XHJcbiAgICB0aGlzLl9lbWFpbFRlbXBsYXRlU2VydmljZS5jaGVja0R1cGxpY2F0ZUZvckNyZWF0ZShyZXF1ZXN0T2JqZWN0LnRlbXBsYXRlbmFtZSkuc3Vic2NyaWJlKFxyXG4gICAgICAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVUZW1wbGF0ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fYWxlcnRTZXJ2aWNlLmVycm9yKHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgX2Vycm9yID0+IHtcclxuICAgICAgICB0aGlzLl9hbGVydFNlcnZpY2UuZXJyb3IoJ0VudGVyIHJlcXVpcmVkIGRldGFpbHMuJyk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIHZhbGlkYXRlVGVtcFVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IHJlcXVlc3RPYmplY3QgPSB0aGlzLmVtYWlsVGVtcGxhdGVGb3JtLmdldFJhd1ZhbHVlKCk7XHJcbiAgICB0aGlzLl9hbGVydFNlcnZpY2Uud2FybignVmFsaWRhdGUgdGVtcGxhdGUgbmFtZSBpbnByb2dyZXNzIScpO1xyXG4gICAgdGhpcy5fZW1haWxUZW1wbGF0ZVNlcnZpY2UuY2hlY2tEdXBsaWNhdGVGb3JVcGRhdGUocmVxdWVzdE9iamVjdC50ZW1wbGF0ZW5hbWUsIHJlcXVlc3RPYmplY3QuaWQpLnN1YnNjcmliZShcclxuICAgICAgKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUZW1wbGF0ZSgnVVBEQVRFJyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9hbGVydFNlcnZpY2UuZXJyb3IocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBfZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuX2FsZXJ0U2VydmljZS5lcnJvcignVW5hYmxlIHRvIHByb2Nlc3MgeW91ciByZXF1ZXN0LicpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICBjb3B5VGV4dCh2YWw6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIHNlbEJveC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICBzZWxCb3guc3R5bGUubGVmdCA9ICcwJztcclxuICAgIHNlbEJveC5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICBzZWxCb3guc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIHNlbEJveC52YWx1ZSA9IHZhbDtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VsQm94KTtcclxuICAgIHNlbEJveC5mb2N1cygpO1xyXG4gICAgc2VsQm94LnNlbGVjdCgpO1xyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodmFsKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2VsQm94KTtcclxuICAgIHRoaXMuX2FsZXJ0U2VydmljZS5zdWNjZXNzKCdDb3BpZWQgdmFyaWFibGUnKTtcclxuICB9XHJcbiAgZ2V0VmFyaWFibGVMaXN0KCkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLmFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyB0aGlzLmFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzWzBdLmtleSA6ICdSRUZGRVJBTCc7XHJcbiAgICB0aGlzLl9lbWFpbFRlbXBsYXRlU2VydmljZS5nZXRWYXJpYWJsZUxpc3QoaWQpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGV2YWxpYWJsZUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRldmFsaWFibGVMaXN0ID0gcmVzLmRhdGE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8YXBwLWFsZXJ0PjwvYXBwLWFsZXJ0PlxyXG48ZGl2IGNsYXNzPVwiYmctd2hpdGUgcC0yIG1iLTMgbXQtMiBkLW5vbmVcIj5cclxuICA8aDUgY2xhc3M9XCJjb2wgZm9udC13ZWlnaHQtYm9sZCBtYi0wXCI+RW1haWw8L2g1PlxyXG4gIDxkaXYgY2xhc3M9XCJjb2wgcmlnaHRCdG5TZWFjcmNoIGNsZWFyZml4IHRleHQtcmlnaHRcIj5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJub3RpZmljYXRpb25JQ29uIGYtbGVmdFwiXHJcbiAgICAgIGRhdGEtY29udGFpbmVyPVwiYm9keVwiXHJcbiAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXHJcbiAgICAgIGRhdGEtcGxhY2VtZW50PVwibGVmdFwiXHJcbiAgICAgIHRpdGxlPVwiTm90aWZpY2F0aW9uXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY2xzQ291bnRcIj4ge3sgdG90YWxOb3RpZmljYXRpb25Db3VudCB9fSA8L3NwYW4+XHJcbiAgICAgIDxzdmdcclxuICAgICAgICB3aWR0aD1cIjEzXCJcclxuICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAxNiAyMFwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgY2xhc3M9XCJiZWxsQnRuXCJcclxuICAgICAgICBkYXRhLXRlc3QtaW1nPVwiYmVsbF9idG5cIj5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk03IC41YS41LjUgMCAwIDEgLjUtLjVoMWEuNS41IDAgMCAxIC41LjV2LjUyNUE0Ljk5NCA0Ljk5NCAwIDAgMSAxMi41MDIgMyA3LjUxMiA3LjUxMiAwIDAgMSAxNCA3LjUwM1YxNGwyIDF2Mkgwdi0ybDItMVY3LjUwNEMyIDUuODggMi41MjcgNC4zIDMuNSAzLjAwMUE1LjAwMiA1LjAwMiAwIDAgMSA3IDEuMDI1Vi41ek02IDE4aDRhMiAyIDAgMSAxLTQgMHpcIlxyXG4gICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjwvcGF0aD5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgPGRpdiBjbGFzcz1cImNvbC1tZC05IHB0LTEwIG1iLTRcIj5cclxuICAgIDxwLWNhcmQgc3R5bGVDbGFzcz1cImQtYmxvY2sgaC0xMDBcIiBbc3R5bGVdPVwieyB3aWR0aDogJzEwMCUnIH1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvdyB0ZXh0TGVmdCBtLXQtMTBcIiBbZm9ybUdyb3VwXT1cImVtYWlsVGVtcGxhdGVGb3JtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIG1iLTNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGVtcGxhdGUtbmFtZVwiIGNsYXNzPVwiaW50YWtlLWZvcm0tbGFiZWxzXCI+VGVtcGxhdGUgTmFtZSA8c3BhbiBjbGFzcz1cInJlcXVpcmVkZmllbGQgdGV4dC1kYW5nZXJcIj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBweC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ0ZW1wbGF0ZW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBmaWVsZEtleT1cIkVNQV9URU1fVEVNUExBVEVfTkFNRVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVGVtcGxhdGUgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHBJbnB1dFRleHQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0ZW1wbGF0ZS1saXN0XCIgY2xhc3M9XCJpbnRha2UtZm9ybS1sYWJlbHNcIj5UZW1wbGF0ZSBMaXN0PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHB4LTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWlucHV0Z3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD1cInRlbXBsYXRlLWxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cInRlbXBsYXRlTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVDbGFzcz1cInctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZEtleT1cIkVNQV9URU1fVEVNUExBVEVfTElTVFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgVGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkxhYmVsPVwidGVtcGxhdGVuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzZWxlY3RUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImVkaXRUZW1wbGF0ZSgkZXZlbnQudmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvcC1kcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGQtdGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBwUmlwcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBpIHBpLXBsdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRLZXk9XCJFTUFfVEVNX0FERF9ORVdfVEVNUExBVEVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlQ2xhc3M9XCJwLWJ1dHRvbi1zdWNjZXNzIG1sLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBUb29sdGlwPVwiQWRkIE5ldyBUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcFBvc2l0aW9uPVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicmVzZXQoKVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdWJqZWN0XCIgY2xhc3M9XCJpbnRha2UtZm9ybS1sYWJlbHNcIj5TdWJqZWN0PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHB4LTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBpZD1cInN1YmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkS2V5PVwiRU1BX1RFTV9TVUJKRUNUXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHN1YmplY3QgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInN1YmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICBwSW5wdXRUZXh0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInB0LTEwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD4gVGVtcGxhdGUgRWRpdG9yIDxzcGFuIGNsYXNzPVwicmVxdWlyZWRmaWVsZCB0ZXh0LWRhbmdlclwiPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBpZD1cImVtYWlsRWRpdG9yXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgdGV4dC1yaWdodCBtdC00XCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1tZCBiZy13aGl0ZSB0ZXh0LXByaW1hcnkgYm9yZGVyLXByaW1hcnkgYnRuY2FuY2VsIG1yLTJcIlxyXG4gICAgICAgICAgICBmaWVsZEtleT1cIkVNQV9URU1fQ0FOQ0VMXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInJlc2V0KClcIj5cclxuICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW1kIGJ0bi1wcmltYXJ5IGJ0bmNvbW1vbiBtci0yXCJcclxuICAgICAgICAgICAgZmllbGRLZXk9XCJFTUFfVEVNX0RFTEVURVwiXHJcbiAgICAgICAgICAgICpuZ0lmPVwiZWRpdFN0YXR1c1wiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJkZWxldGVUZW1wbGF0ZSgpXCI+XHJcbiAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzPVwibWItMCBidG4gYnRuLW1kIGJ0bi1wcmltYXJ5IGJ0bmNvbW1vblwiXHJcbiAgICAgICAgICAgIGZpZWxkS2V5PVwiRU1BX1RFTV9TQVZFXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImVkaXRTdGF0dXMgPyB2YWxpZGF0ZVRlbXBVcGRhdGUoKSA6IHZhbGlkYXRlVGVtcGxhdGVDcmVhdGUoKVwiPlxyXG4gICAgICAgICAgICB7eyBlZGl0U3RhdHVzID8gJ1VwZGF0ZScgOiAnU2F2ZScgfX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvcC1jYXJkPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgcGwtMCBwdC0xMCBtYi00XCI+XHJcbiAgICA8cC1jYXJkIHN0eWxlQ2xhc3M9XCJkLWJsb2NrIGgtMTAwIHctMTAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeCBwdC0xMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdHRhY2gtdGIgdGFibGUtdGhlbWUgdGFibGUtcmVzcG9uc2l2ZSBub3RpZmljYXRpb25Db25maWdcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJjbGllbnQtbmFtZVwiIGNsYXNzPVwiaW50YWtlLWZvcm0tbGFiZWxzXCI+VmFyaWFibGUgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICA8dGFibGUgYXJpYS1kZXNjcmliZWRieT1cIlZhcmlhYmxlIE5hbWVcIiBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlZhcmlhYmxlPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNvcHk8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHRlbXBsYXRlIG9mIHRlbXBsYXRldmFsaWFibGVMaXN0OyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXJcIj57eyB0ZW1wbGF0ZS52YWx1ZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxlbSBjbGFzcz1cInBpIHBpLWNvcHlcIiAoY2xpY2spPVwiY29weVRleHQodGVtcGxhdGUudmFsdWUpXCI+PC9lbT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNub1JlY29yZEZvdW5kPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNsYWVyZml4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBuby1yZWNvcmQtaW1nIG10LTVcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cIm0tMFwiPk5vIFJlY29yZCBGb3VuZDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvcC1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPHAtY29uZmlybURpYWxvZyBoZWFkZXI9XCJDb25maXJtYXRpb25cIiBpY29uPVwicGkgcGktZXhjbGFtYXRpb24tdHJpYW5nbGVcIj48L3AtY29uZmlybURpYWxvZz5cclxuIl19