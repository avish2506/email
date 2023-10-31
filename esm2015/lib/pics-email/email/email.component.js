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
import * as i10 from "primeng/inputtext";
import * as i11 from "primeng/button";
import * as i12 from "primeng/ripple";
import * as i13 from "primeng/tooltip";
import * as i14 from "@angular/common";
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
EmailComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EmailComponent, selector: "pics-email", ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"bg-white p-2 mb-3 mt-2 d-none\">\r\n  <h5 class=\"col font-weight-bold mb-0\">Email</h5>\r\n  <div class=\"col rightBtnSeacrch clearfix text-right\">\r\n    <div\r\n      class=\"notificationICon f-left\"\r\n      data-container=\"body\"\r\n      data-toggle=\"tooltip\"\r\n      data-placement=\"left\"\r\n      title=\"Notification\">\r\n      <span class=\"clsCount\"> {{ totalNotificationCount }} </span>\r\n      <svg\r\n        width=\"13\"\r\n        height=\"20\"\r\n        viewBox=\"0 0 16 20\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        class=\"bellBtn\"\r\n        data-test-img=\"bell_btn\">\r\n        <path\r\n          d=\"M7 .5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.525A4.994 4.994 0 0 1 12.502 3 7.512 7.512 0 0 1 14 7.503V14l2 1v2H0v-2l2-1V7.504C2 5.88 2.527 4.3 3.5 3.001A5.002 5.002 0 0 1 7 1.025V.5zM6 18h4a2 2 0 1 1-4 0z\"\r\n          fill-rule=\"evenodd\"></path>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-9 pt-10 mb-4\">\r\n    <p-card styleClass=\"d-block h-100\" [style]=\"{ width: '100%' }\">\r\n      <div class=\"row textLeft m-t-10\" [formGroup]=\"emailTemplateForm\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col mb-3\">\r\n              <label for=\"template-name\" class=\"intake-form-labels\">Template Name <span class=\"requiredfield text-danger\">*</span></label>\r\n              <div class=\"col-12 px-0\">\r\n                <input\r\n                  id=\"template\"\r\n                  aria-labelledby=\"template\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"templatename\"\r\n                  type=\"email\"\r\n                  placeholder=\"Enter Template Name\"\r\n                  pInputText />\r\n              </div>\r\n            </div>\r\n            <div class=\"col mb-3\">\r\n              <label for=\"template-list\" class=\"intake-form-labels\">Template List</label>\r\n              <div class=\"col-12 px-0\">\r\n                <div class=\"p-inputgroup\">\r\n                  <p-dropdown\r\n                  inputId=\"template-list\"\r\n                    [options]=\"templateList\"\r\n                    styleClass=\"w-100\"\r\n                    placeholder=\"Select Template\"\r\n                    optionLabel=\"templatename\"\r\n                    formControlName=\"selectTemplate\"\r\n                    (onChange)=\"editTemplate($event.value)\">\r\n                  </p-dropdown>\r\n                  <button\r\n                    type=\"button\"\r\n                    aria-label=\"Add-template\"\r\n                    pButton\r\n                    pRipple\r\n                    icon=\"pi pi-plus\"\r\n                    class=\"ml-2\"\r\n                    styleClass=\"p-button-success ml-2\"\r\n                    pTooltip=\"Add New Template\"\r\n                    tooltipPosition=\"top\"\r\n                    (click)=\"reset()\"></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col mb-3\">\r\n              <label for=\"subject\" class=\"intake-form-labels\">Subject</label>\r\n              <div class=\"col-12 px-0\">\r\n                <input\r\n                  id=\"subject\"\r\n                  class=\"form-control\"\r\n                  type=\"text\"\r\n                  placeholder=\"Enter subject here\"\r\n                  formControlName=\"subject\"\r\n                  pInputText />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"pt-10\">\r\n            <label> Template Editor <span class=\"requiredfield text-danger\">*</span></label>\r\n          </div>\r\n          <div id=\"emailEditor\"></div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 text-right mt-4\">\r\n          <button\r\n            class=\"btn btn-md bg-white text-primary border-primary btncancel mr-2\"\r\n            (click)=\"reset()\">\r\n            Cancel\r\n          </button>\r\n          <button\r\n            class=\"btn btn-md btn-primary btncommon mr-2\"\r\n            *ngIf=\"editStatus\"\r\n            (click)=\"deleteTemplate()\">\r\n            Delete\r\n          </button>\r\n          <button\r\n            class=\"mb-0 btn btn-md btn-primary btncommon\"\r\n            (click)=\"editStatus ? validateTempUpdate() : validateTemplateCreate()\">\r\n            {{ editStatus ? 'Update' : 'Save' }}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </p-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-3 pl-0 pt-10 mb-4\">\r\n    <p-card styleClass=\"d-block h-100 w-100\">\r\n      <div class=\"clearfix pt-10\">\r\n        <div class=\"attach-tb table-theme table-responsive notificationConfig\">\r\n          <label for=\"client-name\" class=\"intake-form-labels\">Variable Name</label>\r\n          <table aria-describedby=\"Variable Name\" class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Variable</th>\r\n                <th scope=\"col\">Copy</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let template of templatevaliableList; let i = index\">\r\n                <td style=\"cursor: pointer\">{{ template.value }}</td>\r\n                <td>\r\n                  <em class=\"pi pi-copy\" (click)=\"copyText(template.value)\"></em>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <ng-template #noRecordFound>\r\n          <div class=\"claerfix\">\r\n            <div class=\"text-center no-record-img mt-5\">\r\n              <p class=\"m-0\">No Record Found</p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </p-card>\r\n  </div>\r\n</div>\r\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n", styles: [".m-10{margin:10px}.config-action{margin:10px}.notificationConfig .assesmentActive{background-color:#f0f8ff!important}.m-b-25{margin-bottom:25px}.email-template-config button{font-size:1.5em!important}.fixedBtnsHoveAction{width:48px;position:fixed;bottom:20px;right:20px;z-index:999}.fixedBtnsHoveAction .triangeBtn{width:48px;height:48px;cursor:pointer;position:relative;border-radius:50%}.fixedBtnsHoveAction .triangeBtn .beforeActionICon{width:100%;height:100%;left:-3px;position:relative;z-index:1;transition:all .3s linear 0s;opacity:1;overflow:hidden;border-radius:50%}.fixedBtnsHoveAction .triangeBtn .beforeActionICon .connectBtn{width:100%;height:100%;fill:var(--primary)}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon{position:absolute;width:100%;height:100%;top:0;left:-3px;z-index:999;background-color:var(--primary);transition:all .3s linear 0s;opacity:0;cursor:pointer;overflow:hidden;border-radius:50%;padding:5px}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon .chatIconNew{width:100%;height:100%;fill:var(--primary)}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon .logoIconChat{width:100%;height:100%;background-color:#fff;border-radius:50%;padding:3px;overflow:hidden}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon .logoIconChat img{width:100%;height:100%;display:block}.fixedBtnsHoveAction .notificationICon{width:48px;height:48px;left:-3px;position:relative;background-color:var(--primary);border-radius:50%;overflow:hidden;margin-bottom:0;transition:all .2s linear 0s;opacity:0;cursor:pointer}.fixedBtnsHoveAction .notificationICon .bellBtn{width:20px;height:20px;margin:0 auto;top:13px;display:block;position:relative;fill:#fff;animation:tada 1.5s ease infinite}.fixedBtnsHoveAction:hover .triangeBtn .beforeActionICon{opacity:0}.fixedBtnsHoveAction:hover .triangeBtn .afterChangeChatIcon{opacity:1}.fixedBtnsHoveAction:hover .notificationICon{margin-bottom:15px;opacity:1;animation:bounce .54s ease;animation-delay:.15s}.topNavigation{width:100%;border-bottom:solid 1px #ddd;box-shadow:10px 2px 10px #0000001a;position:relative;z-index:99;height:50px;padding:0 15px}.topNavigation .leftFlowMenu{padding:15px 15px 15px 0}.topNavigation .leftFlowMenu .pageIcon{height:20px;width:auto;display:inline-block}.topNavigation .leftFlowMenu span,.topNavigation .leftFlowMenu a{display:inline-block;padding:0 6px;line-height:20px;color:#555;font-size:14px;font-weight:400;text-transform:uppercase}.topNavigation .leftFlowMenu span.pageName,.topNavigation .leftFlowMenu a.pageName{color:#222;padding-left:0}.topNavigation .leftFlowMenu span.active,.topNavigation .leftFlowMenu a.active{color:var(--primary)}.topNavigation .rightSearch{padding:6px 0 6px 15px}.topNavigation .rightSearch .search-box{position:relative}.topNavigation .rightSearch .search-box input{line-height:36px;padding:0 15px 0 40px;border:0;border-bottom:1px solid #ddd;display:block;width:100%}.topNavigation .rightSearch .search-box input:focus{border:0;border-bottom:solid 1px #ddd;outline:none}.topNavigation .rightSearch .search-box button,.topNavigation .rightSearch .search-box button:focus{width:36px;height:36px;line-height:36px;color:#777;position:absolute;top:1px;left:-39px;background-color:transparent;font-size:17px;border:0}.topNavigation .rightSearch .notificationICon{width:38px;height:38px;position:relative;background-color:#f7fcff;border-radius:50%;display:inline-block;cursor:pointer}.topNavigation .rightSearch .notificationICon .bellBtn{width:20px;height:20px;margin:0 auto;top:8px;display:block;position:relative;fill:var(--primary)}.topNavigation .rightSearch .notificationICon .clsCount+.bellBtn{animation:tada 1.5s ease infinite}.topNavigation .rightSearch .notificationICon .clsCount{position:absolute;top:-6px;right:0px;width:18px;height:18px;border-radius:50%;text-align:center;line-height:17px;color:var(--primary);font-size:12px;font-weight:700}.table{border:1px solid #ddd;border-color:var(--table-border)}.table thead th{padding:5px;background:var(--background-color);color:var(--text-dark);border-width:1px;border-color:var(--table-border);font-size:var(--base-font-size)}.table tbody td{padding:5px;vertical-align:middle;font-size:var(--font-14);color:var(--text-dark);border-color:var(--table-border)}.table thead th:last-child,.table tbody td:last-child{width:110px}.table .addBtnsNew{padding:0 10px}#emailEditor{height:935px!important;border:1px solid var(--table-border)}.p-button-icon-only{padding:.1rem 0}:host ::ng-deep .p-dropdown .p-dropdown-panel{background:var(--bg-light)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item{color:var(--text-dark)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover{background:var(--primary);color:var(--hover-text)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:focus{background:var(--primary);color:var(--hover-text)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:focus{background:var(--primary);color:var(--hover-text)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items p-dropdownitem:hover,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items p-dropdownitem:focus{background:var(--primary);color:var(--hover-text)}@media print{.hideForPrint{display:none}}:host ::ng-deep .gjs-editor{font-family:\"Roboto\",sans-serif!important}:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{display:flex;align-items:center;justify-content:center}:host ::ng-deep .gjs-editor .gjs-block{display:flex;align-items:center;justify-content:center}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-family:\"Roboto\",sans-serif!important}@media screen and (min-width: 1024px){:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{font-size:var(--base-font-size)}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:45px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:7px}}@media screen and (max-width: 1280px){:host ::ng-deep .gjs-editor .gjs-pn-panel .gjs-blocks-cs .gjs-block{width:100%;min-height:60px;margin:5px 5px 0}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:45px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:10px}}@media screen and (min-width: 1530px){:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{font-size:var(--font-17)}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:52px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:9px}}@media screen and (min-width: 1600px){:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{font-size:var(--font-16)}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:52px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:10px}}\n"], components: [{ type: i6.AlertComponent, selector: "app-alert" }, { type: i7.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i8.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }, { type: i9.ConfirmDialog, selector: "p-confirmDialog", inputs: ["header", "icon", "message", "style", "styleClass", "maskStyleClass", "acceptIcon", "acceptLabel", "acceptAriaLabel", "acceptVisible", "rejectIcon", "rejectLabel", "rejectAriaLabel", "rejectVisible", "acceptButtonStyleClass", "rejectButtonStyleClass", "closeOnEscape", "dismissableMask", "blockScroll", "rtl", "closable", "appendTo", "key", "autoZIndex", "baseZIndex", "transitionOptions", "focusTrap", "defaultFocus", "breakpoints", "visible", "position"], outputs: ["onHide"] }], directives: [{ type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i10.InputText, selector: "[pInputText]" }, { type: i11.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading"] }, { type: i12.Ripple, selector: "[pRipple]" }, { type: i13.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EmailComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'pics-email',
                    templateUrl: './email.component.html',
                    styleUrls: ['./email.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.EmailTemplateService }, { type: i2.AlertService }, { type: i3.FormBuilder }, { type: i4.ConfirmationService }, { type: i5.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvZW1haWwvc3JjL2xpYi9waWNzLWVtYWlsL2VtYWlsL2VtYWlsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2VtYWlsL3NyYy9saWIvcGljcy1lbWFpbC9lbWFpbC9lbWFpbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBS2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQVVuRSxNQUFNLE9BQU8sY0FBYztJQWdCekIsWUFDVSxxQkFBMkMsRUFDM0MsYUFBMkIsRUFDM0IsV0FBd0IsRUFDeEIsbUJBQXdDLEVBQ3hDLGFBQStCO1FBSi9CLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7UUFDM0Msa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFuQnpDLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFFdkIsMkJBQXNCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLCtCQUEwQixHQUFRLEVBQUUsQ0FBQztRQUVyQyx5QkFBb0IsR0FBUSxFQUFFLENBQUM7UUFFL0IsWUFBTyxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7UUFXakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxR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TyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELGVBQWU7UUFDYixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzVHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDcEUsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzRHQXBjVSxjQUFjO2dHQUFkLGNBQWMsa0RDZjNCLHdnTUF1SkE7NEZEeElhLGNBQWM7a0JBTDFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7b0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4uL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XHJcbmltcG9ydCB7IEVtYWlsVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vQGNvcmUvc2VydmljZS9lbWFpbC10ZW1wbGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUkJBQ0lORk8gfSBmcm9tICcuLi9AY29yZS91cmxzL2VtYWlsLXRlbXBsYXRlLXVybC5jb25maWcnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4uL0Bjb3JlL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuZGVjbGFyZSBjb25zdCAkOiBhbnk7XHJcbmRlY2xhcmUgbGV0IGdyYXBlc2pzOiBhbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGljcy1lbWFpbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2VtYWlsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9lbWFpbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZW1haWxUZW1wbGF0ZUZvcm0hOiBGb3JtR3JvdXA7XHJcbiAgZWRpdFRlbXBsYXRlSWQgPSAnJztcclxuICBlZGl0U3RhdHVzID0gZmFsc2U7XHJcbiAgY3VycmVudFVzZXI6IGFueTtcclxuICB0ZW1wbGF0ZUxpc3Q6IGFueSA9IFtdO1xyXG4gIGVkaXRvcjogYW55O1xyXG4gIHRvdGFsTm90aWZpY2F0aW9uQ291bnQgPSAwO1xyXG4gIGFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzOiBhbnkgPSBbXTtcclxuICBnZW5lcmF0ZVRlbXBsYXRlOiBhbnk7XHJcbiAgdGVtcGxhdGV2YWxpYWJsZUxpc3Q6IGFueSA9IFtdO1xyXG4gIGVudmlyb25tZW50OiBhbnk7XHJcbiAgUkJBQ09SRzogUkJBQ0lORk8gPSBuZXcgUkJBQ0lORk8oKTtcclxuICBQRVJNSVNTSU9OOiBhbnk7XHJcbiAgb3JnU3VicyE6IFN1YnNjcmlwdGlvbjtcclxuICBvcmdJZDogYW55O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZW1haWxUZW1wbGF0ZVNlcnZpY2U6IEVtYWlsVGVtcGxhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgY29uZmlybWF0aW9uU2VydmljZTogQ29uZmlybWF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5jdXJyZW50VXNlciA9ICcnO1xyXG4gICAgdGhpcy5mb3JtSW5pdGlhbGl6ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9yZ1N1YnMgPSAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXNbJ1JCQUNPUkcnXSAmJiByZXNbJ1JCQUNPUkcnXSAhPT0gJycpIHtcclxuICAgICAgICB0aGlzLlJCQUNPUkcgPSByZXNbJ1JCQUNPUkcnXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLlJCQUNPUkcsICdSQkFDT1JHIEV2ZW50IFNjaGVkdWxlcicpO1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSB0aGlzLlJCQUNPUkdbJ2Vudmlyb25tZW50J107XHJcbiAgICAgICAgdGhpcy5vcmdJZCA9IHBhcnNlSW50KHRoaXMuUkJBQ09SR1snb3JnSUQnXSk7XHJcbiAgICAgICAgaWYodGhpcy5lbnZpcm9ubWVudCl7XHJcbiAgICAgICAgICB0aGlzLmdldEFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgICB0aGlzLmluaXRFZGl0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLm9yZ1N1YnMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGZvcm1Jbml0aWFsaXplKCkge1xyXG4gICAgdGhpcy5lbWFpbFRlbXBsYXRlRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICB0ZW1wbGF0ZW5hbWU6IFsnJ10sXHJcbiAgICAgIHNlbmRlckVtYWlsczogWycnXSxcclxuICAgICAgdGVtcGxhdGU6IFsnJ10sXHJcbiAgICAgIGlkOiBbJyddLFxyXG4gICAgICBzZWxlY3RUZW1wbGF0ZTogWycnXSxcclxuICAgICAgc3ViamVjdDogWycnXVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGVkaXRUZW1wbGF0ZSh0ZW1wbGF0ZWluZm86IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5lZGl0VGVtcGxhdGVJZCA9IHRlbXBsYXRlaW5mbyA/IHRlbXBsYXRlaW5mby5pZCA6ICcnO1xyXG4gICAgICB0aGlzLmVkaXRTdGF0dXMgPSB0cnVlO1xyXG4gICAgICBjb25zdCBlZGl0RGF0YTogYW55ID0gdGhpcy50ZW1wbGF0ZUxpc3QuZmlsdGVyKChkYXRhOiBhbnkpID0+IGRhdGEuZW1haWx0ZW1wbGF0ZWlkID09PSB0aGlzLmVkaXRUZW1wbGF0ZUlkKVswXTtcclxuICAgICAgdGhpcy5lZGl0b3Iuc2V0Q29tcG9uZW50cyhlZGl0RGF0YS50ZW1wbGF0ZSk7XHJcbiAgICAgIHRoaXMuZW1haWxUZW1wbGF0ZUZvcm0uc2V0VmFsdWUoe1xyXG4gICAgICAgIHRlbXBsYXRlbmFtZTogZWRpdERhdGEudGVtcGxhdGVuYW1lLFxyXG4gICAgICAgIHNlbmRlckVtYWlsczogJycsXHJcbiAgICAgICAgdGVtcGxhdGU6IGVkaXREYXRhLnRlbXBsYXRlLFxyXG4gICAgICAgIGlkOiBlZGl0RGF0YS5pZCxcclxuICAgICAgICBzZWxlY3RUZW1wbGF0ZTogZWRpdERhdGEsXHJcbiAgICAgICAgc3ViamVjdDogZWRpdERhdGEuc3ViamVjdFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coYEVycm9yIGluIGdldFRlbXBsYXRlTGlzdDogJHtlfWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZVRlbXBsYXRlKCk6IGFueSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBnZXRFZGl0b3JIVE1MID0gdGhpcy5lZGl0b3IucnVuQ29tbWFuZCgnZ2pzLWdldC1pbmxpbmVkLWh0bWwnKTtcclxuICAgICAgY29uc3QgcmVxdWVzdE9iamVjdCA9IHRoaXMuZW1haWxUZW1wbGF0ZUZvcm0uZ2V0UmF3VmFsdWUoKTtcclxuICAgICAgaWYgKHRoaXMuZWRpdFN0YXR1cykge1xyXG4gICAgICAgIHJlcXVlc3RPYmplY3RbJ2VtYWlsdGVtcGxhdGVpZCddID0gdGhpcy5lZGl0VGVtcGxhdGVJZDtcclxuICAgICAgfVxyXG4gICAgICByZXF1ZXN0T2JqZWN0Wyd0ZW1wbGF0ZSddID0gZ2V0RWRpdG9ySFRNTDtcclxuICAgICAgaWYgKHJlcXVlc3RPYmplY3QudGVtcGxhdGVuYW1lID09ICcnIHx8IHJlcXVlc3RPYmplY3QudGVtcGxhdGUgPT0gJycpIHtcclxuICAgICAgICB0aGlzLl9hbGVydFNlcnZpY2UuZXJyb3IoJ1RlbXBsYXRlIG5hbWUgYW5kIHRlbXBsYXRlIGNhbm5vdCBiZSBlbXB0eScpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBpbnB1dFJlcXVlc3QgPSB7XHJcbiAgICAgICAgbmFtZTogcmVxdWVzdE9iamVjdC50ZW1wbGF0ZW5hbWUsXHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVlc3RPYmplY3QudGVtcGxhdGUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXNbMF0uaWQgOiAxLFxyXG4gICAgICAgIHN1YmplY3Q6IHJlcXVlc3RPYmplY3Quc3ViamVjdFxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLl9lbWFpbFRlbXBsYXRlU2VydmljZS5jcmVhdGVUZW1wbGF0ZShpbnB1dFJlcXVlc3QpLnN1YnNjcmliZShfUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHRoaXMuZWRpdFRlbXBsYXRlSWQgPSAnJztcclxuICAgICAgICB0aGlzLl9hbGVydFNlcnZpY2Uuc3VjY2VzcygnVGVtcGxhdGUgY3JlYXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5nZXRFbWFpbFRlbXBsYXRlTGlzdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coYEVycm9yIGluIHRoZSByZXN0b3JlVHJpZ2dlcjogJHtlfWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlVGVtcGxhdGUoc3RhdHVzOiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgZ2V0RWRpdG9ySFRNTCA9IHRoaXMuZWRpdG9yLnJ1bkNvbW1hbmQoJ2dqcy1nZXQtaW5saW5lZC1odG1sJyk7XHJcbiAgICBjb25zdCByZXF1ZXN0T2JqZWN0ID0gdGhpcy5lbWFpbFRlbXBsYXRlRm9ybS5nZXRSYXdWYWx1ZSgpO1xyXG4gICAgcmVxdWVzdE9iamVjdFsndGVtcGxhdGUnXSA9IGdldEVkaXRvckhUTUw7XHJcbiAgICBpZiAocmVxdWVzdE9iamVjdC50ZW1wbGF0ZW5hbWUgPT0gJycgfHwgcmVxdWVzdE9iamVjdC50ZW1wbGF0ZSA9PSAnJykge1xyXG4gICAgICB0aGlzLl9hbGVydFNlcnZpY2UuZXJyb3IoJ1RlbXBsYXRlIG5hbWUgYW5kIHRlbXBsYXRlIGNhbm5vdCBiZSBlbXB0eScpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbnB1dFJlcXVlc3QgPSB7XHJcbiAgICAgIG5hbWU6IHJlcXVlc3RPYmplY3QudGVtcGxhdGVuYW1lLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVxdWVzdE9iamVjdC50ZW1wbGF0ZSxcclxuICAgICAgY2F0ZWdvcnk6IHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXNbMF0uaWQgOiAxLFxyXG4gICAgICBzdWJqZWN0OiByZXF1ZXN0T2JqZWN0LnN1YmplY3QsXHJcbiAgICAgIGRlbGV0ZWQ6IHN0YXR1cyA9PT0gJ0RFTEVURScgPyB0cnVlIDogZmFsc2VcclxuICAgIH07XHJcbiAgICB0aGlzLmdlbmVyaWNUZW1wbGF0ZShpbnB1dFJlcXVlc3QsIHN0YXR1cyk7XHJcbiAgfVxyXG4gIGdlbmVyaWNUZW1wbGF0ZShtb2RhbDogYW55LCBzdGF0dXM6IGFueSkge1xyXG4gICAgdGhpcy5fZW1haWxUZW1wbGF0ZVNlcnZpY2UuVXBkYXRlRGVsZXRlVGVtcGxhdGUodGhpcy5lZGl0VGVtcGxhdGVJZCwgbW9kYWwpLnN1YnNjcmliZShfUmVzcG9uc2UgPT4ge1xyXG4gICAgICB0aGlzLmVkaXRUZW1wbGF0ZUlkID0gJyc7XHJcbiAgICAgIHRoaXMuZWRpdFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAnREVMRVRFJykge1xyXG4gICAgICAgIHRoaXMuX2FsZXJ0U2VydmljZS5zdWNjZXNzKCdUZW1wbGF0ZSBkZWxldGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2FsZXJ0U2VydmljZS5zdWNjZXNzKCdUZW1wbGF0ZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgdGhpcy5nZXRFbWFpbFRlbXBsYXRlTGlzdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5lZGl0U3RhdHVzID0gZmFsc2U7XHJcbiAgICB0aGlzLmVkaXRUZW1wbGF0ZUlkID0gJyc7XHJcbiAgICB0aGlzLmVkaXRvci5Db21wb25lbnRzLmNsZWFyKCk7XHJcbiAgICB0aGlzLmVtYWlsVGVtcGxhdGVGb3JtLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0RWRpdG9yKCkge1xyXG4gICAgY29uc3QgdXNlcl9hY2Nlc3NfdG9rZW4gPSB0aGlzLmN1cnJlbnRVc2VyLmlkO1xyXG4gICAgY29uc3QgdXBsb2FkVVJMID0gKycvYXR0YWNobWVudHMvdXBsb2Fkc0ZpbGUnICsgJz9hY2Nlc3NfdG9rZW49JyArIHRoaXMuY3VycmVudFVzZXIuaWQ7XHJcbiAgICBjb25zdCB1bmlxdWVfdGltZXN0YW1wID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgdGhpcy5lZGl0b3IgPSBncmFwZXNqcy5pbml0KHtcclxuICAgICAgY29udGFpbmVyOiAnI2VtYWlsRWRpdG9yJyxcclxuICAgICAgc3RvcmFnZU1hbmFnZXI6IHsgdHlwZTogMCB9LFxyXG4gICAgICBmcm9tRWxlbWVudDogMSxcclxuICAgICAgY29tcG9uZW50czogJzxkaXYgY2xhc3M9XCJ0eHQtcmVkXCI+SGVsbG8gd29ybGQhPC9kaXY+JyxcclxuICAgICAgc3R5bGU6ICcudHh0LXJlZHtjb2xvcjogcmVkfScsXHJcbiAgICAgIHBsdWdpbnM6IFsnZ2pzLWJsb2Nrcy1iYXNpYycsICdnanMtcHJlc2V0LW5ld3NsZXR0ZXInXSxcclxuICAgICAgcGx1Z2luc09wdHM6IHtcclxuICAgICAgICAnZ2pzLWJsb2Nrcy1iYXNpYyc6IHt9LFxyXG4gICAgICAgICdnanMtcHJlc2V0LW5ld3NsZXR0ZXInOiB7XHJcbiAgICAgICAgICBtb2RhbFRpdGxlSW1wb3J0OiAnSW1wb3J0IHRlbXBsYXRlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8gdXBsb2FkTmFtZTogYGZpbGVzXyR7dW5pcXVlX3RpbWVzdGFtcH1gLFxyXG4gICAgICBhc3NldE1hbmFnZXI6IHtcclxuICAgICAgICBzdG9yYWdlVHlwZTogJycsXHJcbiAgICAgICAgc3RvcmVPbkNoYW5nZTogdHJ1ZSxcclxuICAgICAgICBzdG9yZUFmdGVyVXBsb2FkOiB0cnVlLFxyXG4gICAgICAgIHVwbG9hZDogdXBsb2FkVVJMLCAvL2ZvciB0ZW1wb3Jhcnkgc3RvcmFnZVxyXG4gICAgICAgIHVwbG9hZE5hbWU6IGBmaWxlc18ke3VuaXF1ZV90aW1lc3RhbXB9YCxcclxuICAgICAgICBhc3NldHM6IFtdLFxyXG4gICAgICAgIHVwbG9hZEZpbGU6IChlOiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGZpbGVzID0gZS5kYXRhVHJhbnNmZXIgPyBlLmRhdGFUcmFuc2Zlci5maWxlcyA6IGUudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBmaWxlcykge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlc1tpXSk7IC8vY29udGFpbmluZyBhbGwgdGhlIHNlbGVjdGVkIGltYWdlcyBmcm9tIGxvY2FsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IHVwbG9hZFVSTCxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIGFjY2Vzc190b2tlbjogdXNlcl9hY2Nlc3NfdG9rZW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgbWltZVR5cGU6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmVkaXRvci5Bc3NldE1hbmFnZXIuYWRkKHJlc3VsdC5zM2J1Y2tldHBhdGhuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZWRpdG9ySW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgZWRpdG9ySW5pdCgpIHtcclxuICAgIGNvbnN0IGJsb2NrX3BhcmFncmFwaCA9IHtcclxuICAgICAgbGFiZWw6ICdQYXJhZ3JhcGgnLFxyXG4gICAgICBjYXRlZ29yeTogJ1RleHQnLFxyXG4gICAgICBjb250ZW50OiBgPHA+XHJcbiAgICAgICAgICB7SW5zZXJ0IFBhcmFncmFwaCBDb250ZW50IEhlcmV9LlxyXG4gICAgICA8L3A+YCxcclxuICAgICAgc2VsZWN0OiB0cnVlXHJcbiAgICB9O1xyXG4gICAgY29uc3QgYmxvY2tfYWRkcmVzcyA9IHtcclxuICAgICAgbGFiZWw6ICdBZGRyZXNzJyxcclxuICAgICAgY2F0ZWdvcnk6ICdUZXh0JyxcclxuICAgICAgYXR0cmlidXRlczogeyB0aXRsZTogJ0FkZHJlc3MnIH0sXHJcbiAgICAgIGNvbnRlbnQ6IGA8ZGl2IGlkPVwiaTU5aFwiIHN0eWxlPVwiYm94LXNpemluZzogYm9yZGVyLWJveDsgcGFkZGluZzogMTBweDtcIj5BZGRyZXNzXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwiaWh0alwiIHN0eWxlPVwiYm94LXNpemluZzogYm9yZGVyLWJveDsgcGFkZGluZzogMTBweDtcIj5TdHJlZXQ6IHt7c3RyZWV0fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImltNXpcIiBzdHlsZT1cImJveC1zaXppbmc6IGJvcmRlci1ib3g7IHBhZGRpbmc6IDEwcHg7XCI+Q2l0eToge3tjaXR5fVxyXG4gICAgICA8L2Rpdj5gLFxyXG4gICAgICBzZWxlY3Q6IHRydWVcclxuICAgIH07XHJcbiAgICB0aGlzLmVkaXRvci5CbG9ja01hbmFnZXIuYWRkKCdhZGRyZXNzJywgYmxvY2tfYWRkcmVzcyk7XHJcbiAgICB0aGlzLmVkaXRvci5CbG9ja01hbmFnZXIuYWRkKCdwYXJhZ3JhcGgnLCBibG9ja19wYXJhZ3JhcGgpO1xyXG5cclxuICAgIHRoaXMuZWRpdG9yLlBhbmVscy5nZXRCdXR0b24oJ29wdGlvbnMnLCAnc3ctdmlzaWJpbGl0eScpO1xyXG4gICAgdGhpcy5lZGl0b3IuZ2V0Q29uZmlnKCkuc2hvd0RldmljZXMgPSAwO1xyXG4gICAgdGhpcy5lZGl0b3IuUGFuZWxzLmFkZFBhbmVsKHsgaWQ6ICdkZXZpY2VzLWMnIH0pXHJcbiAgICAgIC5nZXQoJ2J1dHRvbnMnKVxyXG4gICAgICAuYWRkKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJ3ByZXZpZXcnLFxyXG4gICAgICAgICAgY29tbWFuZDogZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgICAgICAgICBlLnJ1bkNvbW1hbmQoJ3ByZXZpZXcnKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjbGFzc05hbWU6ICdmYSBmYS1wbGF5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICdwcmludCcsXHJcbiAgICAgICAgICBjb21tYW5kOiBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbiA9IHdpbmRvdy5vcGVuKCcnLCAnX2JsYW5rJywgJ3RvcD0wLGxlZnQ9MCxoZWlnaHQ9MTAwJSx3aWR0aD1hdXRvJykhO1xyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSB3aW4uZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGltZy5pbm5lckhUTUwgPSBlLmdldEh0bWwoKTtcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmNzc1RleHQgPSBlLmdldENzcygpO1xyXG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxMDAlJyk7XHJcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcxMDAlJyk7XHJcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGVGb3JQcmludCcpO1xyXG4gICAgICAgICAgICB3aW4uZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgICAgICB3aW4ucHJpbnQoKTtcclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB3aW4uZm9jdXMoKTtcclxuICAgICAgICAgICAgICB3aW4ucHJpbnQoKTtcclxuICAgICAgICAgICAgICB3aW4uY2xvc2UoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjbGFzc05hbWU6ICdmYSBmYS1wcmludCdcclxuICAgICAgICB9XHJcbiAgICAgIF0pO1xyXG5cclxuICAgIHRoaXMuZWRpdG9yLlJpY2hUZXh0RWRpdG9yLnJlbW92ZSgnbGluaycpO1xyXG5cclxuICAgIHRoaXMuZWRpdG9yLlJpY2hUZXh0RWRpdG9yLmFkZCgnZHJvcGNhcCcsIHtcclxuICAgICAgaWNvbjogJzxiPkQ8c3VwPmM8L3N1cD48L2I+JyxcclxuICAgICAgYXR0cmlidXRlczogeyB0aXRsZTogJ0Ryb3BjYXAnIH0sXHJcbiAgICAgIHJlc3VsdDogKHJ0ZTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5lZGl0b3IuZ2V0U2VsZWN0ZWQoKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbXBvbmVudC5pcygndGV4dCcpICYmIGNvbXBvbmVudC5nZXRDbGFzc2VzKCkuaW5jbHVkZXMoJ2Ryb3BDYXBzJykpIHtcclxuICAgICAgICAgIGNvbXBvbmVudC5yZXBsYWNlV2l0aChgJHtjb21wb25lbnQuZ2V0KCdjb250ZW50Jyl9YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHJhbmdlID0gcnRlLnNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCk7XHJcblxyXG4gICAgICAgICAgbGV0IGNvbnRhaW5lciA9IHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xyXG5cclxuICAgICAgICAgIGlmIChjb250YWluZXIubm9kZVR5cGUgPT0gMykgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgICAgaWYgKGNvbnRhaW5lci5ub2RlTmFtZSA9PSAnU1BBTicgJiYgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZHJvcENhcHMnKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBjb250YWluZXIucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRhaW5lci5pbm5lckhUTUwpO1xyXG5cclxuICAgICAgICAgICAgLy8gaW5zZXJ0IGFsbCBvdXIgY2hpbGRyZW4gYmVmb3JlIG91cnNlbHZlcy5cclxuICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjb250ZW50LCBjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBydGUuaW5zZXJ0SFRNTChgPHNwYW4gY2xhc3M9XCJkcm9wQ2Fwc1wiPiR7cnRlLnNlbGVjdGlvbigpfTwvc3Bhbj5gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZWRpdG9yLlJpY2hUZXh0RWRpdG9yLmFkZCgnc3VwZXJzY3JpcHQnLCB7XHJcbiAgICAgIGljb246ICc8Yj5TPHN1cD5zPC9zdXA+PC9iPicsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHsgdGl0bGU6ICdTdXBlcnNjcmlwdCcgfSxcclxuICAgICAgcmVzdWx0OiAocnRlOiBhbnkpID0+IHJ0ZS5leGVjKCdzdXBlcnNjcmlwdCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmVkaXRvci5SaWNoVGV4dEVkaXRvci5hZGQoJ3N1YnNjcmlwdCcsIHtcclxuICAgICAgaWNvbjogJzxiPlM8c3ViPnM8L3N1Yj48L2I+JyxcclxuICAgICAgYXR0cmlidXRlczogeyB0aXRsZTogJ1N1YnNjcmlwdCcgfSxcclxuICAgICAgcmVzdWx0OiAocnRlOiBhbnkpID0+IHJ0ZS5leGVjKCdzdWJzY3JpcHQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5lZGl0b3IuUmljaFRleHRFZGl0b3IuYWRkKCdoeXBlcmxpbmsnLCB7XHJcbiAgICAgIGljb246ICcmIzEyODI3OTsnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7IHRpdGxlOiAnSHlwZXJsaW5rJyB9LFxyXG4gICAgICByZXN1bHQ6IChydGU6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuZWRpdG9yLmdldFNlbGVjdGVkKCk7XHJcblxyXG4gICAgICAgIGlmIChjb21wb25lbnQuaXMoJ2xpbmsnKSkge1xyXG4gICAgICAgICAgY29tcG9uZW50LnJlcGxhY2VXaXRoKGAke2NvbXBvbmVudC5nZXQoJ2NvbnRlbnQnKX1gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IHJhbmdlID0gcnRlLnNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCk7XHJcblxyXG4gICAgICAgICAgbGV0IGNvbnRhaW5lciA9IHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xyXG4gICAgICAgICAgaWYgKGNvbnRhaW5lci5ub2RlVHlwZSA9PSAzKSBjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICBpZiAoY29udGFpbmVyLm5vZGVOYW1lID09PSAnQScpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsID0gcnRlLnNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAgIHJ0ZS5leGVjKCd1bmxpbmsnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5wcm9tcHQoJ0VudGVyIHRoZSBVUkwgdG8gbGluayB0bzonKTtcclxuICAgICAgICAgICAgaWYgKHVybCkgcnRlLmluc2VydEhUTUwoYDxhIGNsYXNzPVwibGlua1wiIGhyZWY9XCIke3VybH1cIj4ke3J0ZS5zZWxlY3Rpb24oKX08L2E+YCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmVkaXRvci5SaWNoVGV4dEVkaXRvci5hZGQoJ2luZGVudCcsIHtcclxuICAgICAgaWNvbjogJyYjODU5NDsnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7IHRpdGxlOiAnSW5kZW50JyB9LFxyXG4gICAgICByZXN1bHQ6IChydGU6IGFueSkgPT4gcnRlLmV4ZWMoJ2luZGVudCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmVkaXRvci5SaWNoVGV4dEVkaXRvci5hZGQoJ291dGRlbnQnLCB7XHJcbiAgICAgIGljb246ICcmIzg1OTI7JyxcclxuICAgICAgYXR0cmlidXRlczogeyB0aXRsZTogJ091dGRlbnQnIH0sXHJcbiAgICAgIHJlc3VsdDogKHJ0ZTogYW55KSA9PiBydGUuZXhlYygnb3V0ZGVudCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmVkaXRvci5SaWNoVGV4dEVkaXRvci5hZGQoJ29yZGVyZWRMaXN0Jywge1xyXG4gICAgICBpY29uOiAnMS4nLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7IHRpdGxlOiAnT3JkZXJlZCBMaXN0JyB9LFxyXG4gICAgICByZXN1bHQ6IChydGU6IGFueSkgPT4gcnRlLmV4ZWMoJ2luc2VydE9yZGVyZWRMaXN0JylcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZWRpdG9yLlJpY2hUZXh0RWRpdG9yLmFkZCgndW5vcmRlcmVkTGlzdCcsIHtcclxuICAgICAgaWNvbjogJyYjODIyNjsnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7IHRpdGxlOiAnVW5vcmRlcmVkIExpc3QnIH0sXHJcbiAgICAgIHJlc3VsdDogKHJ0ZTogYW55KSA9PiBydGUuZXhlYygnaW5zZXJ0VW5vcmRlcmVkTGlzdCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmVkaXRvci5SaWNoVGV4dEVkaXRvci5hZGQoJ2ZvbnROYW1lJywge1xyXG4gICAgICBpY29uOiAnQScsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHsgdGl0bGU6ICdGb250JyB9LFxyXG4gICAgICByZXN1bHQ6IChydGU6IGFueSkgPT4gcnRlLmV4ZWMoJ2ZvbnROYW1lJylcclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXRBbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllcygpIHtcclxuICAgIHRoaXMuX2VtYWlsVGVtcGxhdGVTZXJ2aWNlLmdldEFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzKCkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy5hbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXMgPSByZXMuZGF0YTtcclxuICAgICAgICB0aGlzLmFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzID0gdGhpcy5hbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllcy5maWx0ZXIoKHg6IGFueSkgPT4geC5rZXkgPT09ICdSRUZFUlJBTCcpO1xyXG4gICAgICAgIHRoaXMuZ2V0RW1haWxUZW1wbGF0ZUxpc3QoKTtcclxuICAgICAgICB0aGlzLmdldFZhcmlhYmxlTGlzdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0RW1haWxUZW1wbGF0ZUxpc3QoKSB7XHJcbiAgICBjb25zdCBpZCA9IHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXNbMF0uaWQgOiAxO1xyXG4gICAgdGhpcy5fZW1haWxUZW1wbGF0ZVNlcnZpY2UuZ2V0RW1haWxUZW1wbGF0ZUxpc3QoaWQpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUxpc3QgPSByZXMuZGF0YTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlTGlzdCA9IHRoaXMudGVtcGxhdGVMaXN0Lm1hcCgoeDogYW55KT0+IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlbmFtZTogeC5uYW1lLFxyXG4gICAgICAgICAgICBlbWFpbHRlbXBsYXRlaWQ6IHguaWQsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiB4LnRlbXBsYXRlLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogeC5jYXRlZ29yeSxcclxuICAgICAgICAgICAgaWQ6IHguaWQsXHJcbiAgICAgICAgICAgIHN1YmplY3Q6IHguc3ViamVjdFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGRlbGV0ZVRlbXBsYXRlKCkge1xyXG4gICAgdGhpcy5lZGl0U3RhdHVzID0gdHJ1ZTtcclxuICAgIHRoaXMuY29uZmlybWF0aW9uU2VydmljZS5jb25maXJtKHtcclxuICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZT8nLFxyXG4gICAgICBhY2NlcHQ6ICgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRlbXBsYXRlKCdERUxFVEUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHZhbGlkYXRlVGVtcGxhdGVDcmVhdGUoKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0T2JqZWN0ID0gdGhpcy5lbWFpbFRlbXBsYXRlRm9ybS5nZXRSYXdWYWx1ZSgpO1xyXG4gICAgdGhpcy5fYWxlcnRTZXJ2aWNlLndhcm4oJ1ZhbGlkYXRlIHRlbXBsYXRlIG5hbWUgaW5wcm9ncmVzcyEnKTtcclxuICAgIHRoaXMuX2VtYWlsVGVtcGxhdGVTZXJ2aWNlLmNoZWNrRHVwbGljYXRlRm9yQ3JlYXRlKHJlcXVlc3RPYmplY3QudGVtcGxhdGVuYW1lKS5zdWJzY3JpYmUoXHJcbiAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVRlbXBsYXRlKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9hbGVydFNlcnZpY2UuZXJyb3IocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBfZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuX2FsZXJ0U2VydmljZS5lcnJvcignRW50ZXIgcmVxdWlyZWQgZGV0YWlscy4nKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgdmFsaWRhdGVUZW1wVXBkYXRlKCkge1xyXG4gICAgY29uc3QgcmVxdWVzdE9iamVjdCA9IHRoaXMuZW1haWxUZW1wbGF0ZUZvcm0uZ2V0UmF3VmFsdWUoKTtcclxuICAgIHRoaXMuX2FsZXJ0U2VydmljZS53YXJuKCdWYWxpZGF0ZSB0ZW1wbGF0ZSBuYW1lIGlucHJvZ3Jlc3MhJyk7XHJcbiAgICB0aGlzLl9lbWFpbFRlbXBsYXRlU2VydmljZS5jaGVja0R1cGxpY2F0ZUZvclVwZGF0ZShyZXF1ZXN0T2JqZWN0LnRlbXBsYXRlbmFtZSwgcmVxdWVzdE9iamVjdC5pZCkuc3Vic2NyaWJlKFxyXG4gICAgICAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRlbXBsYXRlKCdVUERBVEUnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FsZXJ0U2VydmljZS5lcnJvcihyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIF9lcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5fYWxlcnRTZXJ2aWNlLmVycm9yKCdVbmFibGUgdG8gcHJvY2VzcyB5b3VyIHJlcXVlc3QuJyk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGNvcHlUZXh0KHZhbDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgc2VsQm94LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgIHNlbEJveC5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgc2VsQm94LnN0eWxlLnRvcCA9ICcwJztcclxuICAgIHNlbEJveC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgc2VsQm94LnZhbHVlID0gdmFsO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWxCb3gpO1xyXG4gICAgc2VsQm94LmZvY3VzKCk7XHJcbiAgICBzZWxCb3guc2VsZWN0KCk7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh2YWwpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzZWxCb3gpO1xyXG4gICAgdGhpcy5fYWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoJ0NvcGllZCB2YXJpYWJsZScpO1xyXG4gIH1cclxuICBnZXRWYXJpYWJsZUxpc3QoKSB7XHJcbiAgICBjb25zdCBpZCA9IHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXNbMF0ua2V5IDogJ1JFRkZFUkFMJztcclxuICAgIHRoaXMuX2VtYWlsVGVtcGxhdGVTZXJ2aWNlLmdldFZhcmlhYmxlTGlzdChpZCkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXZhbGlhYmxlTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGV2YWxpYWJsZUxpc3QgPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxhcHAtYWxlcnQ+PC9hcHAtYWxlcnQ+XHJcbjxkaXYgY2xhc3M9XCJiZy13aGl0ZSBwLTIgbWItMyBtdC0yIGQtbm9uZVwiPlxyXG4gIDxoNSBjbGFzcz1cImNvbCBmb250LXdlaWdodC1ib2xkIG1iLTBcIj5FbWFpbDwvaDU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbCByaWdodEJ0blNlYWNyY2ggY2xlYXJmaXggdGV4dC1yaWdodFwiPlxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cIm5vdGlmaWNhdGlvbklDb24gZi1sZWZ0XCJcclxuICAgICAgZGF0YS1jb250YWluZXI9XCJib2R5XCJcclxuICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcclxuICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJsZWZ0XCJcclxuICAgICAgdGl0bGU9XCJOb3RpZmljYXRpb25cIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJjbHNDb3VudFwiPiB7eyB0b3RhbE5vdGlmaWNhdGlvbkNvdW50IH19IDwvc3Bhbj5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHdpZHRoPVwiMTNcIlxyXG4gICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDIwXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICBjbGFzcz1cImJlbGxCdG5cIlxyXG4gICAgICAgIGRhdGEtdGVzdC1pbWc9XCJiZWxsX2J0blwiPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTcgLjVhLjUuNSAwIDAgMSAuNS0uNWgxYS41LjUgMCAwIDEgLjUuNXYuNTI1QTQuOTk0IDQuOTk0IDAgMCAxIDEyLjUwMiAzIDcuNTEyIDcuNTEyIDAgMCAxIDE0IDcuNTAzVjE0bDIgMXYySDB2LTJsMi0xVjcuNTA0QzIgNS44OCAyLjUyNyA0LjMgMy41IDMuMDAxQTUuMDAyIDUuMDAyIDAgMCAxIDcgMS4wMjVWLjV6TTYgMThoNGEyIDIgMCAxIDEtNCAwelwiXHJcbiAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PC9wYXRoPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICA8ZGl2IGNsYXNzPVwiY29sLW1kLTkgcHQtMTAgbWItNFwiPlxyXG4gICAgPHAtY2FyZCBzdHlsZUNsYXNzPVwiZC1ibG9jayBoLTEwMFwiIFtzdHlsZV09XCJ7IHdpZHRoOiAnMTAwJScgfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IHRleHRMZWZ0IG0tdC0xMFwiIFtmb3JtR3JvdXBdPVwiZW1haWxUZW1wbGF0ZUZvcm1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0ZW1wbGF0ZS1uYW1lXCIgY2xhc3M9XCJpbnRha2UtZm9ybS1sYWJlbHNcIj5UZW1wbGF0ZSBOYW1lIDxzcGFuIGNsYXNzPVwicmVxdWlyZWRmaWVsZCB0ZXh0LWRhbmdlclwiPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHB4LTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBpZD1cInRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInRlbXBsYXRlbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVGVtcGxhdGUgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHBJbnB1dFRleHQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0ZW1wbGF0ZS1saXN0XCIgY2xhc3M9XCJpbnRha2UtZm9ybS1sYWJlbHNcIj5UZW1wbGF0ZSBMaXN0PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHB4LTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWlucHV0Z3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD1cInRlbXBsYXRlLWxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cInRlbXBsYXRlTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVDbGFzcz1cInctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uTGFiZWw9XCJ0ZW1wbGF0ZW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInNlbGVjdFRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwiZWRpdFRlbXBsYXRlKCRldmVudC52YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgPC9wLWRyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFkZC10ZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHBSaXBwbGVcclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwicGkgcGktcGx1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZUNsYXNzPVwicC1idXR0b24tc3VjY2VzcyBtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICBwVG9vbHRpcD1cIkFkZCBOZXcgVGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBQb3NpdGlvbj1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInJlc2V0KClcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIG1iLTNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3ViamVjdFwiIGNsYXNzPVwiaW50YWtlLWZvcm0tbGFiZWxzXCI+U3ViamVjdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBweC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzdWJqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgc3ViamVjdCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwic3ViamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgIHBJbnB1dFRleHQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMTBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPiBUZW1wbGF0ZSBFZGl0b3IgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZGZpZWxkIHRleHQtZGFuZ2VyXCI+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxFZGl0b3JcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiB0ZXh0LXJpZ2h0IG10LTRcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW1kIGJnLXdoaXRlIHRleHQtcHJpbWFyeSBib3JkZXItcHJpbWFyeSBidG5jYW5jZWwgbXItMlwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJyZXNldCgpXCI+XHJcbiAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1tZCBidG4tcHJpbWFyeSBidG5jb21tb24gbXItMlwiXHJcbiAgICAgICAgICAgICpuZ0lmPVwiZWRpdFN0YXR1c1wiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJkZWxldGVUZW1wbGF0ZSgpXCI+XHJcbiAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzPVwibWItMCBidG4gYnRuLW1kIGJ0bi1wcmltYXJ5IGJ0bmNvbW1vblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJlZGl0U3RhdHVzID8gdmFsaWRhdGVUZW1wVXBkYXRlKCkgOiB2YWxpZGF0ZVRlbXBsYXRlQ3JlYXRlKClcIj5cclxuICAgICAgICAgICAge3sgZWRpdFN0YXR1cyA/ICdVcGRhdGUnIDogJ1NhdmUnIH19XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3AtY2FyZD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIHBsLTAgcHQtMTAgbWItNFwiPlxyXG4gICAgPHAtY2FyZCBzdHlsZUNsYXNzPVwiZC1ibG9jayBoLTEwMCB3LTEwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXggcHQtMTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXR0YWNoLXRiIHRhYmxlLXRoZW1lIHRhYmxlLXJlc3BvbnNpdmUgbm90aWZpY2F0aW9uQ29uZmlnXCI+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwiY2xpZW50LW5hbWVcIiBjbGFzcz1cImludGFrZS1mb3JtLWxhYmVsc1wiPlZhcmlhYmxlIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPHRhYmxlIGFyaWEtZGVzY3JpYmVkYnk9XCJWYXJpYWJsZSBOYW1lXCIgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5WYXJpYWJsZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Db3B5PC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCB0ZW1wbGF0ZSBvZiB0ZW1wbGF0ZXZhbGlhYmxlTGlzdDsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyXCI+e3sgdGVtcGxhdGUudmFsdWUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICA8ZW0gY2xhc3M9XCJwaSBwaS1jb3B5XCIgKGNsaWNrKT1cImNvcHlUZXh0KHRlbXBsYXRlLnZhbHVlKVwiPjwvZW0+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjbm9SZWNvcmRGb3VuZD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGFlcmZpeFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbm8tcmVjb3JkLWltZyBtdC01XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtLTBcIj5ObyBSZWNvcmQgRm91bmQ8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3AtY2FyZD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxwLWNvbmZpcm1EaWFsb2cgaGVhZGVyPVwiQ29uZmlybWF0aW9uXCIgaWNvbj1cInBpIHBpLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCI+PC9wLWNvbmZpcm1EaWFsb2c+XHJcbiJdfQ==