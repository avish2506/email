import { Component } from '@angular/core';
import { RBACINFO } from '../@core/urls/email-template-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../@core/service/email-template.service";
import * as i2 from "../@core/service/alert.service";
import * as i3 from "@angular/forms";
import * as i4 from "../@core/service/data-store.service";
import * as i5 from "../@shared/alert/alert.component";
import * as i6 from "primeng/card";
import * as i7 from "../@shared/grid-list/grid-list.component";
import * as i8 from "primeng/confirmdialog";
import * as i9 from "primeng/ripple";
import * as i10 from "../@core/directives/permission.directive";
import * as i11 from "primeng/inputtext";
import * as i12 from "@angular/common";
import * as i13 from "../@core/directives/show-field.directives";
export class EmailComponent {
    constructor(_emailTemplateService, _alertService, formBuilder, _storeservice) {
        this._emailTemplateService = _emailTemplateService;
        this._alertService = _alertService;
        this.formBuilder = formBuilder;
        this._storeservice = _storeservice;
        this.editTemplateId = '';
        this.editStatus = false;
        this.templateList = [];
        this.totalNotificationCount = 0;
        this.allEmailTemplateCategories = [];
        this.templatevaliableList = [];
        this.totalcount = 0;
        this.RBACORG = new RBACINFO();
        this.currentUser = '';
        this.formInitialize();
        this.showTemplate = false;
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
                    this.setGridColumns();
                }
            }
        });
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    setGridColumns() {
        this.tableColumns = [
            {
                columnDef: 'name',
                header: 'Name',
                cell: (element) => `${element.name}`,
                dateFormat: false,
                icon: false,
                filter: true,
                link: false,
                sort: false,
                hide: false,
                fixed: false,
                Choosable: false,
                visible: false,
                selected: ['filter']
            },
            {
                columnDef: 'subject',
                header: 'Subject',
                cell: (element) => `${element.subject}`,
                dateFormat: false,
                icon: false,
                filter: true,
                link: false,
                sort: false,
                hide: false,
                fixed: false,
                Choosable: false,
                visible: false,
                selected: ['filter']
            },
            {
                columnDef: 'created',
                header: 'Created On',
                cell: (element) => `${element.created}`,
                dateFormat: true,
                icon: false,
                filter: true,
                link: false,
                sort: false,
                hide: false,
                fixed: false,
                Choosable: false,
                visible: false,
                selected: ['filter', 'dateFormat']
            },
            {
                columnDef: 'username',
                header: 'Created By',
                cell: (element) => `${element.username}`,
                dateFormat: false,
                icon: false,
                filter: true,
                link: false,
                sort: false,
                hide: false,
                fixed: false,
                Choosable: false,
                visible: false,
                selected: ['filter']
            },
            {
                columnDef: 'updated',
                header: 'Updated On',
                cell: (element) => `${element.updated}`,
                dateFormat: true,
                icon: false,
                filter: true,
                link: false,
                sort: false,
                hide: false,
                fixed: false,
                Choosable: false,
                visible: false,
                selected: ['filter', 'dateFormat']
            },
        ];
        this.updateGrid = { editRecord: true, view: false, lock: false, version: false, duplicate: false, delete: true, externalLink: false };
        // this.setFilterOptions(this.tableColumns);
    }
    editTableRow(evt) {
        this.showTemplate = true;
        this.editTemplate(evt.data);
    }
    showDeleteModal(evt) {
        this.selectedTemplate = evt.data;
        event.stopPropagation();
        $('#Deletetemplate').modal('show');
    }
    deleteTemplate() {
        this.editStatus = true;
        this.editTemplateId = this.selectedTemplate ? this.selectedTemplate.id : '';
        this.emailTemplateForm.patchValue({
            templatename: this.selectedTemplate.name,
            template: this.selectedTemplate.template,
            id: this.selectedTemplate.id,
            subject: this.selectedTemplate.subject
        });
        this.updateTemplate('DELETE');
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
            const editData = this.templateList.filter((data) => data.id === this.editTemplateId)[0];
            this.editor.setComponents(editData.template);
            this.emailTemplateForm.setValue({
                templatename: editData.name,
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
                this.backToList();
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
        if (requestObject.templatename === '') {
            this._alertService.error('Template name and template cannot be empty');
            return false;
        }
        const inputRequest = {
            name: requestObject.templatename,
            template: requestObject.template,
            category: this.allEmailTemplateCategories.length > 0 ? this.allEmailTemplateCategories[0].id : 1,
            subject: requestObject.subject,
            deleted: status === 'DELETE'
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
                this.showTemplate = false;
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
    backToList() {
        this.showTemplate = false;
    }
    addTemplate() {
        this.showTemplate = true;
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
                uploadFile: e => {
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
                        success: result => {
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
        this.editor.BlockManager.add('paragraph', block_paragraph);
        this.editor.Panels.getButton('options', 'sw-visibility');
        this.editor.RichTextEditor.remove('link');
        this.editor.RichTextEditor.add('dropcap', {
            icon: '<b>D<sup>c</sup></b>',
            attributes: { title: 'Dropcap' },
            result: rte => {
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
            result: rte => rte.exec('superscript')
        });
        this.editor.RichTextEditor.add('subscript', {
            icon: '<b>S<sub>s</sub></b>',
            attributes: { title: 'Subscript' },
            result: rte => rte.exec('subscript')
        });
        this.editor.RichTextEditor.add('hyperlink', {
            icon: '&#128279;',
            attributes: { title: 'Hyperlink' },
            result: rte => {
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
            result: rte => rte.exec('indent')
        });
        this.editor.RichTextEditor.add('outdent', {
            icon: '&#8592;',
            attributes: { title: 'Outdent' },
            result: rte => rte.exec('outdent')
        });
        this.editor.RichTextEditor.add('orderedList', {
            icon: '1.',
            attributes: { title: 'Ordered List' },
            result: rte => rte.exec('insertOrderedList')
        });
        this.editor.RichTextEditor.add('unorderedList', {
            icon: '&#8226;',
            attributes: { title: 'Unordered List' },
            result: rte => rte.exec('insertUnorderedList')
        });
        this.editor.RichTextEditor.add('fontName', {
            icon: 'A',
            attributes: { title: 'Font' },
            result: rte => rte.exec('fontName')
        });
    }
    getAllEmailTemplateCategories() {
        this._emailTemplateService.getAllEmailTemplateCategories().subscribe((res) => {
            if (res) {
                this.allEmailTemplateCategories = [];
                this.allEmailTemplateCategories = res.data;
                this.allEmailTemplateCategories = this.allEmailTemplateCategories.filter(x => x.key === 'REFERRAL');
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
                this.templateList = res.data.map(template => {
                    return Object.assign(Object.assign({}, template), { username: `${template.user.firstname} ${template.user.lastname}` });
                });
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
            this._alertService.error('Unable to process your request.');
        });
    }
    validateTempUpdate() {
        const requestObject = this.emailTemplateForm.getRawValue();
        this._alertService.warn('Validate template name inprogress!');
        this._emailTemplateService.checkDuplicateForUpdate(requestObject.templatename, requestObject.id).subscribe((res) => {
            console.log(res);
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
EmailComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EmailComponent, deps: [{ token: i1.EmailTemplateService }, { token: i2.AlertService }, { token: i3.FormBuilder }, { token: i4.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
EmailComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EmailComponent, selector: "pics-email", ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"bg-white p-2 mb-3 mt-2 d-none\">\r\n  <h5 class=\"col font-weight-bold mb-0\">Email</h5>\r\n  <div class=\"col rightBtnSeacrch clearfix text-right\">\r\n    <div\r\n      class=\"notificationICon f-left\"\r\n      data-container=\"body\"\r\n      data-toggle=\"tooltip\"\r\n      data-placement=\"left\"\r\n      title=\"Notification\">\r\n      <span class=\"clsCount\"> {{ totalNotificationCount }} </span>\r\n      <svg\r\n        width=\"13\"\r\n        height=\"20\"\r\n        viewBox=\"0 0 16 20\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        class=\"bellBtn\"\r\n        data-test-img=\"bell_btn\">\r\n        <path\r\n          d=\"M7 .5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.525A4.994 4.994 0 0 1 12.502 3 7.512 7.512 0 0 1 14 7.503V14l2 1v2H0v-2l2-1V7.504C2 5.88 2.527 4.3 3.5 3.001A5.002 5.002 0 0 1 7 1.025V.5zM6 18h4a2 2 0 1 1-4 0z\"\r\n          fill-rule=\"evenodd\"></path>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-design\" [hidden]=\"showTemplate\">\r\n  <div class=\"strip_head def-addIcon toggleleft d-flex justify-content-between px-3\">\r\n    <div class=\"f-left\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-primary btn-icon my-2\"\r\n        title=\"Add New Page\"\r\n        (click)=\"addTemplate()\"\r\n        pRipple>\r\n        <em class=\"pi pi-plus font-weight-bold\"></em>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mb-4\">\r\n      <p-card styleClass=\"rbac-card gridview w-100\">\r\n        <app-grid-list\r\n          [dataList]=\"templateList\"\r\n          [updateGrid]=\"updateGrid\"\r\n          [columns]=\"tableColumns\"\r\n          [totalCount]=\"totalcount\"\r\n          (editTableRow)=\"editTableRow($event)\"\r\n          (deleteTableRow)=\"showDeleteModal($event)\"\r\n        >\r\n        </app-grid-list>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" [hidden]=\"!showTemplate\">\r\n  <div class=\"col-md-9 pt-10 mb-4\">\r\n    <p-card styleClass=\"d-block h-100\" [style]=\"{ width: '100%' }\">\r\n      <div class=\"row textLeft m-t-10\" [formGroup]=\"emailTemplateForm\">\r\n          <div class=\"d-flex justify-content-between align-items-center col-12 my-3\" >\r\n              <h6 class=\"font-weight-bold mb-0 fromTitle\">Email Template</h6>\r\n              <button type=\"button\" class=\"btn btn-cancel\" (click)=\"backToList()\">\r\n                Back \r\n              </button>\r\n            </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col mb-3\">\r\n              <label for=\"template-name\" class=\"intake-form-labels\">Template Name</label>\r\n              <div class=\"col-12 px-0\">\r\n                <input\r\n                  id=\"template\"\r\n                  aria-labelledby=\"template\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"templatename\"\r\n                  fieldKey=\"EMA_TEM_TEMPLATE_NAME\"\r\n                  type=\"email\"\r\n                  placeholder=\"Enter Template Name\"\r\n                  pInputText />\r\n              </div>\r\n            </div>\r\n            <div class=\"col mb-3\">\r\n              <label for=\"template-name\" class=\"intake-form-labels\">Subject</label>\r\n              <div class=\"col-12 px-0\">\r\n                <input\r\n                  id=\"subject\"\r\n                  class=\"form-control\"\r\n                  fieldKey=\"EMA_TEM_SUBJECT\"\r\n                  type=\"text\"\r\n                  placeholder=\"Enter subject here\"\r\n                  formControlName=\"subject\"\r\n                  pInputText />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"pt-10\">\r\n            <label> Template Editor </label>\r\n          </div>\r\n          <div id=\"emailEditor\"></div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 text-right mt-4\">\r\n          <button\r\n            class=\"btn btn-md bg-white text-primary border-primary btncancel mr-2\"\r\n            fieldKey=\"EMA_TEM_CANCEL\"\r\n            (click)=\"reset()\">\r\n            Clear\r\n          </button>\r\n          <button\r\n            class=\"mb-0 btn btn-primary btncommon\"\r\n            fieldKey=\"EMA_TEM_SAVE\"\r\n            (click)=\"editStatus ? validateTempUpdate() : validateTemplateCreate()\">\r\n            {{ editStatus ? 'Update' : 'Save' }}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </p-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-3 pl-0 pt-10 mb-4\">\r\n    <p-card styleClass=\"d-block h-100 w-100\">\r\n      <div class=\"clearfix pt-10\">\r\n        <div class=\"attach-tb table-theme table-responsive notificationConfig\">\r\n          <label for=\"client-name\" class=\"intake-form-labels\">Variable Name</label>\r\n          <table aria-describedby=\"Variable Name\" class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Variable</th>\r\n                <th scope=\"col\">Copy</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let template of templatevaliableList\">\r\n                <td style=\"cursor: pointer\">{{ template.value }}</td>\r\n                <td>\r\n                  <em class=\"pi pi-copy\" *showField=\"'EMA_TEM_VARIABLE_COPY'\" (click)=\"copyText(template.value)\"></em>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <ng-template #noRecordFound>\r\n          <div class=\"claerfix\">\r\n            <div class=\"text-center no-record-img mt-5\">\r\n              <p class=\"m-0\">No Record Found</p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </p-card>\r\n  </div>\r\n</div>\r\n<div class=\"modal\" id=\"Deletetemplate\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Email Template</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure you want to delete Email Template?\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"deleteTemplate()\">\r\n            Delete\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n\r\n", styles: [".m-10{margin:10px}.config-action{margin:10px}.notificationConfig .assesmentActive{background-color:#f0f8ff!important}.m-b-25{margin-bottom:25px}.email-template-config button{font-size:1.5em!important}.fixedBtnsHoveAction{width:48px;position:fixed;bottom:20px;right:20px;z-index:999}.fixedBtnsHoveAction .triangeBtn{width:48px;height:48px;cursor:pointer;position:relative;border-radius:50%}.fixedBtnsHoveAction .triangeBtn .beforeActionICon{width:100%;height:100%;left:-3px;position:relative;z-index:1;transition:all .3s linear 0s;opacity:1;overflow:hidden;border-radius:50%}.fixedBtnsHoveAction .triangeBtn .beforeActionICon .connectBtn{width:100%;height:100%;fill:var(--primary)}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon{position:absolute;width:100%;height:100%;top:0;left:-3px;z-index:999;background-color:var(--primary);transition:all .3s linear 0s;opacity:0;cursor:pointer;overflow:hidden;border-radius:50%;padding:5px}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon .chatIconNew{width:100%;height:100%;fill:var(--primary)}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon .logoIconChat{width:100%;height:100%;background-color:#fff;border-radius:50%;padding:3px;overflow:hidden}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon .logoIconChat img{width:100%;height:100%;display:block}.fixedBtnsHoveAction .notificationICon{width:48px;height:48px;left:-3px;position:relative;background-color:var(--primary);border-radius:50%;overflow:hidden;margin-bottom:0;transition:all .2s linear 0s;opacity:0;cursor:pointer}.fixedBtnsHoveAction .notificationICon .bellBtn{width:20px;height:20px;margin:0 auto;top:13px;display:block;position:relative;fill:#fff;animation:tada 1.5s ease infinite}.fixedBtnsHoveAction:hover .triangeBtn .beforeActionICon{opacity:0}.fixedBtnsHoveAction:hover .triangeBtn .afterChangeChatIcon{opacity:1}.fixedBtnsHoveAction:hover .notificationICon{margin-bottom:15px;opacity:1;animation:bounce .54s ease;animation-delay:.15s}.topNavigation{width:100%;border-bottom:solid 1px #ddd;box-shadow:10px 2px 10px #0000001a;position:relative;z-index:99;height:50px;padding:0 15px}.topNavigation .leftFlowMenu{padding:15px 15px 15px 0}.topNavigation .leftFlowMenu .pageIcon{height:20px;width:auto;display:inline-block}.topNavigation .leftFlowMenu span,.topNavigation .leftFlowMenu a{display:inline-block;padding:0 6px;line-height:20px;color:#555;font-size:14px;font-weight:400;text-transform:uppercase}.topNavigation .leftFlowMenu span.pageName,.topNavigation .leftFlowMenu a.pageName{color:#222;padding-left:0}.topNavigation .leftFlowMenu span.active,.topNavigation .leftFlowMenu a.active{color:var(--primary)}.topNavigation .rightSearch{padding:6px 0 6px 15px}.topNavigation .rightSearch .search-box{position:relative}.topNavigation .rightSearch .search-box input{line-height:36px;padding:0 15px 0 40px;border:0;border-bottom:1px solid #ddd;display:block;width:100%}.topNavigation .rightSearch .search-box input:focus{border:0;border-bottom:solid 1px #ddd;outline:none}.topNavigation .rightSearch .search-box button,.topNavigation .rightSearch .search-box button:focus{width:36px;height:36px;line-height:36px;color:#777;position:absolute;top:1px;left:-39px;background-color:transparent;font-size:17px;border:0}.topNavigation .rightSearch .notificationICon{width:38px;height:38px;position:relative;background-color:#f7fcff;border-radius:50%;display:inline-block;cursor:pointer}.topNavigation .rightSearch .notificationICon .bellBtn{width:20px;height:20px;margin:0 auto;top:8px;display:block;position:relative;fill:var(--primary)}.topNavigation .rightSearch .notificationICon .clsCount+.bellBtn{animation:tada 1.5s ease infinite}.topNavigation .rightSearch .notificationICon .clsCount{position:absolute;top:-6px;right:0px;width:18px;height:18px;border-radius:50%;text-align:center;line-height:17px;color:var(--primary);font-size:12px;font-weight:700}.table{border:1px solid #ddd;border-color:var(--table-border)}.table thead th{padding:5px;background:var(--background-color);color:var(--text-dark);border-width:1px;border-color:var(--table-border);font-size:var(--base-font-size)}.table tbody td{padding:5px;vertical-align:middle;font-size:var(--base-font-size);color:var(--text-dark);border-color:var(--table-border)}.table thead th:last-child,.table tbody td:last-child{width:110px}.table .addBtnsNew{padding:0 10px}#emailEditor{height:935px!important;border:1px solid var(--table-border)}.p-button-icon-only{padding:.1rem 0}:host ::ng-deep .p-dropdown .p-dropdown-panel{background:var(--bg-light)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item{color:var(--text-dark)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover{background:var(--primary);color:var(--hover-text)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:focus{background:var(--primary);color:var(--hover-text)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:focus{background:var(--primary);color:var(--hover-text)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items p-dropdownitem:hover,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items p-dropdownitem:focus{background:var(--primary);color:var(--hover-text)}@media print{.hideForPrint{display:none}}:host ::ng-deep .gjs-editor{font-family:\"Roboto\",sans-serif!important}:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{display:flex;align-items:center;justify-content:center}:host ::ng-deep .gjs-editor .gjs-block{display:flex;align-items:center;justify-content:center}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-family:\"Roboto\",sans-serif!important}@media screen and (min-width: 1024px){:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{font-size:var(--base-font-size)}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:45px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:7px}}@media screen and (max-width: 1280px){:host ::ng-deep .gjs-editor .gjs-pn-panel .gjs-blocks-cs .gjs-block{width:100%;min-height:60px;margin:5px 5px 0}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:45px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:10px}}@media screen and (min-width: 1530px){:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{font-size:var(--font-17)}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:52px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:9px}}@media screen and (min-width: 1600px){:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{font-size:var(--font-16)}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:52px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:10px}}:host ::ng-deep .page-design .gridview.p-card .card-body,:host ::ng-deep .page-design .gridview.p-card .p-card-body,:host ::ng-deep .page-design .gridview.card .card-body,:host ::ng-deep .page-design .gridview.card .p-card-body{padding-top:0;padding-bottom:0;background:var(--bg-light)}:host ::ng-deep .page-design .p-card-content{padding:0}:host ::ng-deep .page-design .dropdown-menu,:host ::ng-deep .page-design .p-component{font-size:var(--base-font-size)}:host ::ng-deep .page-design .dropdown-item.active,:host ::ng-deep .page-design .dropdown-item:active{background:transparent;color:#16181b}:host ::ng-deep .page-design .checkbox label{cursor:pointer}:host ::ng-deep .page-design .dropdown-item:focus{background:#431e8d12}:host ::ng-deep .page-design .dropdown-item:hover{background:#431e8d12}:host ::ng-deep .page-design .checkbox label,:host ::ng-deep .page-design .radio label{min-height:inherit}:host ::ng-deep .page-design .filter-menu{padding:8px;border:1px solid #a7a7a7;max-height:180px;overflow-y:auto}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar{width:4px!important;height:4px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-track{background:#f6f6f6!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-corner{background:#f6f6f6!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb{background:#2c2863!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb:hover{background:#3e397e!important}:host ::ng-deep .page-design .p-checkbox{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box .p-checkbox-icon{font-size:9px;font-weight:600}.def-addIcon{position:relative;margin-bottom:-50px;z-index:1;top:0px;float:left}\n"], components: [{ type: i5.AlertComponent, selector: "app-alert" }, { type: i6.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i7.GridListComponent, selector: "app-grid-list", inputs: ["dataList", "dataSource", "columns", "updateGrid", "totalCount", "page", "isShow", "remoteOperations", "enableExport", "showHeaderFilter", "exportPageName", "pageSize"], outputs: ["currentPage", "pageIndex", "currentSize", "editTableRow", "viewTableRow", "deleteTableRow", "openExternalLink", "openpopupLink", "routeTo", "openPopup", "duplicateRow", "sortOrder", "filterSearchValue", "filterBuilderPopup", "filterPanel", "multipleFilterValues", "downloadTableRow", "toggleRow", "outComeTableRow", "downloadFormResponseFiles", "deleteFormResponseFiles", "rowSelection", "navigate", "multipleFilterValueToAPI", "selectedRowsData"] }, { type: i8.ConfirmDialog, selector: "p-confirmDialog", inputs: ["header", "icon", "message", "style", "styleClass", "maskStyleClass", "acceptIcon", "acceptLabel", "acceptAriaLabel", "acceptVisible", "rejectIcon", "rejectLabel", "rejectAriaLabel", "rejectVisible", "acceptButtonStyleClass", "rejectButtonStyleClass", "closeOnEscape", "dismissableMask", "blockScroll", "rtl", "closable", "appendTo", "key", "autoZIndex", "baseZIndex", "transitionOptions", "focusTrap", "defaultFocus", "breakpoints", "visible", "position"], outputs: ["onHide"] }], directives: [{ type: i9.Ripple, selector: "[pRipple]" }, { type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i10.PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i11.InputText, selector: "[pInputText]" }, { type: i12.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i13.ShowFieldDirective, selector: "[showField]", inputs: ["showField"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EmailComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'pics-email',
                    templateUrl: './email.component.html',
                    styleUrls: ['./email.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.EmailTemplateService }, { type: i2.AlertService }, { type: i3.FormBuilder }, { type: i4.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1tb2R1bGUvZW1haWwvc3JjL2xpYi9waWNzLWVtYWlsL2VtYWlsL2VtYWlsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtbW9kdWxlL2VtYWlsL3NyYy9saWIvcGljcy1lbWFpbC9lbWFpbC9lbWFpbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBTWxELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBUW5FLE1BQU0sT0FBTyxjQUFjO0lBcUJ6QixZQUNVLHFCQUEyQyxFQUMzQyxhQUEyQixFQUMzQixXQUF3QixFQUN4QixhQUErQjtRQUgvQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO1FBQzNDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQXZCekMsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUV2QiwyQkFBc0IsR0FBRyxDQUFDLENBQUM7UUFDM0IsK0JBQTBCLEdBQVEsRUFBRSxDQUFDO1FBRXJDLHlCQUFvQixHQUFRLEVBQUUsQ0FBQztRQUcvQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBSWYsWUFBTyxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7UUFVakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lB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YW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4uL0Bjb3JlL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IEVtYWlsVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vQGNvcmUvc2VydmljZS9lbWFpbC10ZW1wbGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUkJBQ0lORk8gfSBmcm9tICcuLi9AY29yZS91cmxzL2VtYWlsLXRlbXBsYXRlLXVybC5jb25maWcnO1xyXG5kZWNsYXJlIGNvbnN0ICQ6IGFueTtcclxuZGVjbGFyZSBsZXQgZ3JhcGVzanM6IGFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwaWNzLWVtYWlsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZW1haWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2VtYWlsLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEVtYWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBlbWFpbFRlbXBsYXRlRm9ybSE6IEZvcm1Hcm91cDtcclxuICBlZGl0VGVtcGxhdGVJZCA9ICcnO1xyXG4gIGVkaXRTdGF0dXMgPSBmYWxzZTtcclxuICBjdXJyZW50VXNlcjogYW55O1xyXG4gIHRlbXBsYXRlTGlzdDogYW55ID0gW107XHJcbiAgZWRpdG9yOiBhbnk7XHJcbiAgdG90YWxOb3RpZmljYXRpb25Db3VudCA9IDA7XHJcbiAgYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXM6IGFueSA9IFtdO1xyXG4gIGdlbmVyYXRlVGVtcGxhdGU6IGFueTtcclxuICB0ZW1wbGF0ZXZhbGlhYmxlTGlzdDogYW55ID0gW107XHJcbiAgdGFibGVDb2x1bW5zOiBhbnlbXTtcclxuICB1cGRhdGVHcmlkOiBhbnk7XHJcbiAgdG90YWxjb3VudCA9IDA7XHJcbiAgc2hvd1RlbXBsYXRlOiBib29sZWFuO1xyXG4gIHNlbGVjdGVkVGVtcGxhdGU6IGFueTtcclxuICBlbnZpcm9ubWVudDogYW55O1xyXG4gIFJCQUNPUkc6IFJCQUNJTkZPID0gbmV3IFJCQUNJTkZPKCk7XHJcbiAgUEVSTUlTU0lPTjogYW55O1xyXG4gIG9yZ1N1YnMhOiBTdWJzY3JpcHRpb247XHJcbiAgb3JnSWQ6IGFueTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VtYWlsVGVtcGxhdGVTZXJ2aWNlOiBFbWFpbFRlbXBsYXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgX2FsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuY3VycmVudFVzZXIgPSAnJztcclxuICAgIHRoaXMuZm9ybUluaXRpYWxpemUoKTtcclxuICAgIHRoaXMuc2hvd1RlbXBsYXRlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub3JnU3VicyA9ICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlc1snUkJBQ09SRyddICYmIHJlc1snUkJBQ09SRyddICE9PSAnJykge1xyXG4gICAgICAgIHRoaXMuUkJBQ09SRyA9IHJlc1snUkJBQ09SRyddO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuUkJBQ09SRywgJ1JCQUNPUkcgRXZlbnQgU2NoZWR1bGVyJyk7XHJcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IHRoaXMuUkJBQ09SR1snZW52aXJvbm1lbnQnXTtcclxuICAgICAgICB0aGlzLm9yZ0lkID0gcGFyc2VJbnQodGhpcy5SQkFDT1JHWydvcmdJRCddKTtcclxuICAgICAgICBpZih0aGlzLmVudmlyb25tZW50KXtcclxuICAgICAgICAgIHRoaXMuZ2V0QWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXMoKTtcclxuICAgICAgICAgIHRoaXMuaW5pdEVkaXRvcigpO1xyXG4gICAgICAgICAgdGhpcy5zZXRHcmlkQ29sdW1ucygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMub3JnU3Vicy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0R3JpZENvbHVtbnMoKSB7XHJcbiAgICB0aGlzLnRhYmxlQ29sdW1ucyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbkRlZjogJ25hbWUnLFxyXG4gICAgICAgIGhlYWRlcjogJ05hbWUnLFxyXG4gICAgICAgIGNlbGw6IChlbGVtZW50OiBhbnkpID0+IGAke2VsZW1lbnQubmFtZX1gLFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IGZhbHNlLFxyXG4gICAgICAgIGljb246IGZhbHNlLFxyXG4gICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICBsaW5rOiBmYWxzZSxcclxuICAgICAgICBzb3J0OiBmYWxzZSxcclxuICAgICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgICBmaXhlZDogZmFsc2UsXHJcbiAgICAgICAgQ2hvb3NhYmxlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICBzZWxlY3RlZDogWydmaWx0ZXInXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29sdW1uRGVmOiAnc3ViamVjdCcsXHJcbiAgICAgICAgaGVhZGVyOiAnU3ViamVjdCcsXHJcbiAgICAgICAgY2VsbDogKGVsZW1lbnQ6IGFueSkgPT4gYCR7ZWxlbWVudC5zdWJqZWN0fWAsXHJcbiAgICAgICAgZGF0ZUZvcm1hdDogZmFsc2UsXHJcbiAgICAgICAgaWNvbjogZmFsc2UsXHJcbiAgICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICAgIGxpbms6IGZhbHNlLFxyXG4gICAgICAgIHNvcnQ6IGZhbHNlLFxyXG4gICAgICAgIGhpZGU6IGZhbHNlLFxyXG4gICAgICAgIGZpeGVkOiBmYWxzZSxcclxuICAgICAgICBDaG9vc2FibGU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdGVkOiBbJ2ZpbHRlciddXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb2x1bW5EZWY6ICdjcmVhdGVkJyxcclxuICAgICAgICBoZWFkZXI6ICdDcmVhdGVkIE9uJyxcclxuICAgICAgICBjZWxsOiAoZWxlbWVudDogYW55KSA9PiBgJHtlbGVtZW50LmNyZWF0ZWR9YCxcclxuICAgICAgICBkYXRlRm9ybWF0OiB0cnVlLFxyXG4gICAgICAgIGljb246IGZhbHNlLFxyXG4gICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICBsaW5rOiBmYWxzZSxcclxuICAgICAgICBzb3J0OiBmYWxzZSxcclxuICAgICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgICBmaXhlZDogZmFsc2UsXHJcbiAgICAgICAgQ2hvb3NhYmxlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICBzZWxlY3RlZDogWydmaWx0ZXInLCAnZGF0ZUZvcm1hdCddXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb2x1bW5EZWY6ICd1c2VybmFtZScsXHJcbiAgICAgICAgaGVhZGVyOiAnQ3JlYXRlZCBCeScsXHJcbiAgICAgICAgY2VsbDogKGVsZW1lbnQ6IGFueSkgPT4gYCR7ZWxlbWVudC51c2VybmFtZX1gLFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IGZhbHNlLFxyXG4gICAgICAgIGljb246IGZhbHNlLFxyXG4gICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICBsaW5rOiBmYWxzZSxcclxuICAgICAgICBzb3J0OiBmYWxzZSxcclxuICAgICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgICBmaXhlZDogZmFsc2UsXHJcbiAgICAgICAgQ2hvb3NhYmxlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICBzZWxlY3RlZDogWydmaWx0ZXInXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29sdW1uRGVmOiAndXBkYXRlZCcsXHJcbiAgICAgICAgaGVhZGVyOiAnVXBkYXRlZCBPbicsXHJcbiAgICAgICAgY2VsbDogKGVsZW1lbnQ6IGFueSkgPT4gYCR7ZWxlbWVudC51cGRhdGVkfWAsXHJcbiAgICAgICAgZGF0ZUZvcm1hdDogdHJ1ZSxcclxuICAgICAgICBpY29uOiBmYWxzZSxcclxuICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgbGluazogZmFsc2UsXHJcbiAgICAgICAgc29ydDogZmFsc2UsXHJcbiAgICAgICAgaGlkZTogZmFsc2UsXHJcbiAgICAgICAgZml4ZWQ6IGZhbHNlLFxyXG4gICAgICAgIENob29zYWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IFsnZmlsdGVyJywgJ2RhdGVGb3JtYXQnXVxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuICAgIHRoaXMudXBkYXRlR3JpZCA9IHsgZWRpdFJlY29yZDogdHJ1ZSwgdmlldzogZmFsc2UsIGxvY2s6IGZhbHNlLCB2ZXJzaW9uOiBmYWxzZSwgZHVwbGljYXRlOiBmYWxzZSwgZGVsZXRlOiB0cnVlLCBleHRlcm5hbExpbms6IGZhbHNlIH07XHJcbiAgICAvLyB0aGlzLnNldEZpbHRlck9wdGlvbnModGhpcy50YWJsZUNvbHVtbnMpO1xyXG4gIH1cclxuXHJcbiAgZWRpdFRhYmxlUm93KGV2dCkge1xyXG4gICAgdGhpcy5zaG93VGVtcGxhdGUgPSB0cnVlO1xyXG4gICAgdGhpcy5lZGl0VGVtcGxhdGUoZXZ0LmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0RlbGV0ZU1vZGFsKGV2dCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFRlbXBsYXRlID0gZXZ0LmRhdGE7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICQoJyNEZWxldGV0ZW1wbGF0ZScpLm1vZGFsKCdzaG93Jyk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVUZW1wbGF0ZSgpIHtcclxuICAgIHRoaXMuZWRpdFN0YXR1cyA9IHRydWU7XHJcbiAgICB0aGlzLmVkaXRUZW1wbGF0ZUlkID0gdGhpcy5zZWxlY3RlZFRlbXBsYXRlID8gdGhpcy5zZWxlY3RlZFRlbXBsYXRlLmlkIDogJyc7XHJcbiAgICB0aGlzLmVtYWlsVGVtcGxhdGVGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICB0ZW1wbGF0ZW5hbWU6IHRoaXMuc2VsZWN0ZWRUZW1wbGF0ZS5uYW1lLFxyXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5zZWxlY3RlZFRlbXBsYXRlLnRlbXBsYXRlLFxyXG4gICAgICBpZDogdGhpcy5zZWxlY3RlZFRlbXBsYXRlLmlkLFxyXG4gICAgICBzdWJqZWN0OiB0aGlzLnNlbGVjdGVkVGVtcGxhdGUuc3ViamVjdFxyXG4gICAgfSlcclxuICAgIHRoaXMudXBkYXRlVGVtcGxhdGUoJ0RFTEVURScpO1xyXG4gIH1cclxuXHJcbiAgZm9ybUluaXRpYWxpemUoKSB7XHJcbiAgICB0aGlzLmVtYWlsVGVtcGxhdGVGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIHRlbXBsYXRlbmFtZTogWycnXSxcclxuICAgICAgc2VuZGVyRW1haWxzOiBbJyddLFxyXG4gICAgICB0ZW1wbGF0ZTogWycnXSxcclxuICAgICAgaWQ6IFsnJ10sXHJcbiAgICAgIHNlbGVjdFRlbXBsYXRlOiBbJyddLFxyXG4gICAgICBzdWJqZWN0OiBbJyddXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZWRpdFRlbXBsYXRlKHRlbXBsYXRlaW5mbzogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLmVkaXRUZW1wbGF0ZUlkID0gdGVtcGxhdGVpbmZvID8gdGVtcGxhdGVpbmZvLmlkIDogJyc7XHJcbiAgICAgIHRoaXMuZWRpdFN0YXR1cyA9IHRydWU7XHJcbiAgICAgIGNvbnN0IGVkaXREYXRhOiBhbnkgPSB0aGlzLnRlbXBsYXRlTGlzdC5maWx0ZXIoKGRhdGE6IGFueSkgPT4gZGF0YS5pZCA9PT0gdGhpcy5lZGl0VGVtcGxhdGVJZClbMF07XHJcbiAgICAgIHRoaXMuZWRpdG9yLnNldENvbXBvbmVudHMoZWRpdERhdGEudGVtcGxhdGUpO1xyXG4gICAgICB0aGlzLmVtYWlsVGVtcGxhdGVGb3JtLnNldFZhbHVlKHtcclxuICAgICAgICB0ZW1wbGF0ZW5hbWU6IGVkaXREYXRhLm5hbWUsXHJcbiAgICAgICAgc2VuZGVyRW1haWxzOiAnJyxcclxuICAgICAgICB0ZW1wbGF0ZTogZWRpdERhdGEudGVtcGxhdGUsXHJcbiAgICAgICAgaWQ6IGVkaXREYXRhLmlkLFxyXG4gICAgICAgIHNlbGVjdFRlbXBsYXRlOiBlZGl0RGF0YSxcclxuICAgICAgICBzdWJqZWN0OiBlZGl0RGF0YS5zdWJqZWN0XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3IgaW4gZ2V0VGVtcGxhdGVMaXN0OiAke2V9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzYXZlVGVtcGxhdGUoKTogYW55IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGdldEVkaXRvckhUTUwgPSB0aGlzLmVkaXRvci5ydW5Db21tYW5kKCdnanMtZ2V0LWlubGluZWQtaHRtbCcpO1xyXG4gICAgICBjb25zdCByZXF1ZXN0T2JqZWN0ID0gdGhpcy5lbWFpbFRlbXBsYXRlRm9ybS5nZXRSYXdWYWx1ZSgpO1xyXG4gICAgICBpZiAodGhpcy5lZGl0U3RhdHVzKSB7XHJcbiAgICAgICAgcmVxdWVzdE9iamVjdFsnZW1haWx0ZW1wbGF0ZWlkJ10gPSB0aGlzLmVkaXRUZW1wbGF0ZUlkO1xyXG4gICAgICB9XHJcbiAgICAgIHJlcXVlc3RPYmplY3RbJ3RlbXBsYXRlJ10gPSBnZXRFZGl0b3JIVE1MO1xyXG4gICAgICBpZiAocmVxdWVzdE9iamVjdC50ZW1wbGF0ZW5hbWUgPT0gJycgfHwgcmVxdWVzdE9iamVjdC50ZW1wbGF0ZSA9PSAnJykge1xyXG4gICAgICAgIHRoaXMuX2FsZXJ0U2VydmljZS5lcnJvcignVGVtcGxhdGUgbmFtZSBhbmQgdGVtcGxhdGUgY2Fubm90IGJlIGVtcHR5Jyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGlucHV0UmVxdWVzdCA9IHtcclxuICAgICAgICBuYW1lOiByZXF1ZXN0T2JqZWN0LnRlbXBsYXRlbmFtZSxcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWVzdE9iamVjdC50ZW1wbGF0ZSxcclxuICAgICAgICBjYXRlZ29yeTogdGhpcy5hbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllcy5sZW5ndGggPiAwID8gdGhpcy5hbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllc1swXS5pZCA6IDEsXHJcbiAgICAgICAgc3ViamVjdDogcmVxdWVzdE9iamVjdC5zdWJqZWN0XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuX2VtYWlsVGVtcGxhdGVTZXJ2aWNlLmNyZWF0ZVRlbXBsYXRlKGlucHV0UmVxdWVzdCkuc3Vic2NyaWJlKF9SZXNwb25zZSA9PiB7XHJcbiAgICAgICAgdGhpcy5lZGl0VGVtcGxhdGVJZCA9ICcnO1xyXG4gICAgICAgIHRoaXMuYmFja1RvTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuX2FsZXJ0U2VydmljZS5zdWNjZXNzKCdUZW1wbGF0ZSBjcmVhdGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmdldEVtYWlsVGVtcGxhdGVMaXN0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3IgaW4gdGhlIHJlc3RvcmVUcmlnZ2VyOiAke2V9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUZW1wbGF0ZShzdGF0dXMpOiBhbnkge1xyXG4gICAgY29uc3QgZ2V0RWRpdG9ySFRNTCA9IHRoaXMuZWRpdG9yLnJ1bkNvbW1hbmQoJ2dqcy1nZXQtaW5saW5lZC1odG1sJyk7XHJcbiAgICBjb25zdCByZXF1ZXN0T2JqZWN0ID0gdGhpcy5lbWFpbFRlbXBsYXRlRm9ybS5nZXRSYXdWYWx1ZSgpO1xyXG4gICAgcmVxdWVzdE9iamVjdFsndGVtcGxhdGUnXSA9IGdldEVkaXRvckhUTUw7XHJcbiAgICBpZiAocmVxdWVzdE9iamVjdC50ZW1wbGF0ZW5hbWUgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMuX2FsZXJ0U2VydmljZS5lcnJvcignVGVtcGxhdGUgbmFtZSBhbmQgdGVtcGxhdGUgY2Fubm90IGJlIGVtcHR5Jyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGlucHV0UmVxdWVzdCA9IHtcclxuICAgICAgbmFtZTogcmVxdWVzdE9iamVjdC50ZW1wbGF0ZW5hbWUsXHJcbiAgICAgIHRlbXBsYXRlOiByZXF1ZXN0T2JqZWN0LnRlbXBsYXRlLFxyXG4gICAgICBjYXRlZ29yeTogdGhpcy5hbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllcy5sZW5ndGggPiAwID8gdGhpcy5hbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllc1swXS5pZCA6IDEsXHJcbiAgICAgIHN1YmplY3Q6IHJlcXVlc3RPYmplY3Quc3ViamVjdCxcclxuICAgICAgZGVsZXRlZDogc3RhdHVzID09PSAnREVMRVRFJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuZ2VuZXJpY1RlbXBsYXRlKGlucHV0UmVxdWVzdCwgc3RhdHVzKTtcclxuICB9XHJcbiAgZ2VuZXJpY1RlbXBsYXRlKG1vZGFsLCBzdGF0dXMpIHtcclxuICAgIHRoaXMuX2VtYWlsVGVtcGxhdGVTZXJ2aWNlLlVwZGF0ZURlbGV0ZVRlbXBsYXRlKHRoaXMuZWRpdFRlbXBsYXRlSWQsIG1vZGFsKS5zdWJzY3JpYmUoX1Jlc3BvbnNlID0+IHtcclxuICAgICAgdGhpcy5lZGl0VGVtcGxhdGVJZCA9ICcnO1xyXG4gICAgICB0aGlzLmVkaXRTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gJ0RFTEVURScpIHtcclxuICAgICAgICB0aGlzLl9hbGVydFNlcnZpY2Uuc3VjY2VzcygnVGVtcGxhdGUgZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNob3dUZW1wbGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2FsZXJ0U2VydmljZS5zdWNjZXNzKCdUZW1wbGF0ZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgdGhpcy5nZXRFbWFpbFRlbXBsYXRlTGlzdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5lZGl0U3RhdHVzID0gZmFsc2U7XHJcbiAgICB0aGlzLmVkaXRUZW1wbGF0ZUlkID0gJyc7XHJcbiAgICB0aGlzLmVkaXRvci5Db21wb25lbnRzLmNsZWFyKCk7XHJcbiAgICB0aGlzLmVtYWlsVGVtcGxhdGVGb3JtLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBiYWNrVG9MaXN0KCkge1xyXG4gICAgdGhpcy5zaG93VGVtcGxhdGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFkZFRlbXBsYXRlKCkge1xyXG4gICAgdGhpcy5zaG93VGVtcGxhdGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaW5pdEVkaXRvcigpIHtcclxuICAgIGNvbnN0IHVzZXJfYWNjZXNzX3Rva2VuID0gdGhpcy5jdXJyZW50VXNlci5pZDtcclxuICAgIGNvbnN0IHVwbG9hZFVSTCA9ICsnL2F0dGFjaG1lbnRzL3VwbG9hZHNGaWxlJyArICc/YWNjZXNzX3Rva2VuPScgKyB0aGlzLmN1cnJlbnRVc2VyLmlkO1xyXG4gICAgY29uc3QgdW5pcXVlX3RpbWVzdGFtcCA9IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgIHRoaXMuZWRpdG9yID0gZ3JhcGVzanMuaW5pdCh7XHJcbiAgICAgIGNvbnRhaW5lcjogJyNlbWFpbEVkaXRvcicsXHJcbiAgICAgIHN0b3JhZ2VNYW5hZ2VyOiB7IHR5cGU6IDAgfSxcclxuICAgICAgZnJvbUVsZW1lbnQ6IDEsXHJcbiAgICAgIGNvbXBvbmVudHM6ICc8ZGl2IGNsYXNzPVwidHh0LXJlZFwiPkhlbGxvIHdvcmxkITwvZGl2PicsXHJcbiAgICAgIHN0eWxlOiAnLnR4dC1yZWR7Y29sb3I6IHJlZH0nLFxyXG4gICAgICBwbHVnaW5zOiBbJ2dqcy1ibG9ja3MtYmFzaWMnLCAnZ2pzLXByZXNldC1uZXdzbGV0dGVyJ10sXHJcbiAgICAgIHBsdWdpbnNPcHRzOiB7XHJcbiAgICAgICAgJ2dqcy1ibG9ja3MtYmFzaWMnOiB7fSxcclxuICAgICAgICAnZ2pzLXByZXNldC1uZXdzbGV0dGVyJzoge1xyXG4gICAgICAgICAgbW9kYWxUaXRsZUltcG9ydDogJ0ltcG9ydCB0ZW1wbGF0ZSdcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIHVwbG9hZE5hbWU6IGBmaWxlc18ke3VuaXF1ZV90aW1lc3RhbXB9YCxcclxuICAgICAgYXNzZXRNYW5hZ2VyOiB7XHJcbiAgICAgICAgc3RvcmFnZVR5cGU6ICcnLFxyXG4gICAgICAgIHN0b3JlT25DaGFuZ2U6IHRydWUsXHJcbiAgICAgICAgc3RvcmVBZnRlclVwbG9hZDogdHJ1ZSxcclxuICAgICAgICB1cGxvYWQ6IHVwbG9hZFVSTCwgLy9mb3IgdGVtcG9yYXJ5IHN0b3JhZ2VcclxuICAgICAgICB1cGxvYWROYW1lOiBgZmlsZXNfJHt1bmlxdWVfdGltZXN0YW1wfWAsXHJcbiAgICAgICAgYXNzZXRzOiBbXSxcclxuICAgICAgICB1cGxvYWRGaWxlOiBlID0+IHtcclxuICAgICAgICAgIGNvbnN0IGZpbGVzID0gZS5kYXRhVHJhbnNmZXIgPyBlLmRhdGFUcmFuc2Zlci5maWxlcyA6IGUudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBmaWxlcykge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlc1tpXSk7IC8vY29udGFpbmluZyBhbGwgdGhlIHNlbGVjdGVkIGltYWdlcyBmcm9tIGxvY2FsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IHVwbG9hZFVSTCxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIGFjY2Vzc190b2tlbjogdXNlcl9hY2Nlc3NfdG9rZW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgbWltZVR5cGU6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuZWRpdG9yLkFzc2V0TWFuYWdlci5hZGQocmVzdWx0LnMzYnVja2V0cGF0aG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5lZGl0b3JJbml0KCk7XHJcbiAgfVxyXG5cclxuICBlZGl0b3JJbml0KCkge1xyXG4gICAgY29uc3QgYmxvY2tfcGFyYWdyYXBoID0ge1xyXG4gICAgICBsYWJlbDogJ1BhcmFncmFwaCcsXHJcbiAgICAgIGNhdGVnb3J5OiAnVGV4dCcsXHJcbiAgICAgIGNvbnRlbnQ6IGA8cD5cclxuICAgICAgICAgIHtJbnNlcnQgUGFyYWdyYXBoIENvbnRlbnQgSGVyZX0uXHJcbiAgICAgIDwvcD5gLFxyXG4gICAgICBzZWxlY3Q6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5lZGl0b3IuQmxvY2tNYW5hZ2VyLmFkZCgncGFyYWdyYXBoJywgYmxvY2tfcGFyYWdyYXBoKTtcclxuXHJcbiAgICB0aGlzLmVkaXRvci5QYW5lbHMuZ2V0QnV0dG9uKCdvcHRpb25zJywgJ3N3LXZpc2liaWxpdHknKTtcclxuXHJcbiAgICB0aGlzLmVkaXRvci5SaWNoVGV4dEVkaXRvci5yZW1vdmUoJ2xpbmsnKTtcclxuXHJcbiAgICB0aGlzLmVkaXRvci5SaWNoVGV4dEVkaXRvci5hZGQoJ2Ryb3BjYXAnLCB7XHJcbiAgICAgIGljb246ICc8Yj5EPHN1cD5jPC9zdXA+PC9iPicsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHsgdGl0bGU6ICdEcm9wY2FwJyB9LFxyXG4gICAgICByZXN1bHQ6IHJ0ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5lZGl0b3IuZ2V0U2VsZWN0ZWQoKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbXBvbmVudC5pcygndGV4dCcpICYmIGNvbXBvbmVudC5nZXRDbGFzc2VzKCkuaW5jbHVkZXMoJ2Ryb3BDYXBzJykpIHtcclxuICAgICAgICAgIGNvbXBvbmVudC5yZXBsYWNlV2l0aChgJHtjb21wb25lbnQuZ2V0KCdjb250ZW50Jyl9YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHJhbmdlID0gcnRlLnNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCk7XHJcblxyXG4gICAgICAgICAgbGV0IGNvbnRhaW5lciA9IHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xyXG5cclxuICAgICAgICAgIGlmIChjb250YWluZXIubm9kZVR5cGUgPT0gMykgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgICAgaWYgKGNvbnRhaW5lci5ub2RlTmFtZSA9PSAnU1BBTicgJiYgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZHJvcENhcHMnKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBjb250YWluZXIucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRhaW5lci5pbm5lckhUTUwpO1xyXG5cclxuICAgICAgICAgICAgLy8gaW5zZXJ0IGFsbCBvdXIgY2hpbGRyZW4gYmVmb3JlIG91cnNlbHZlcy5cclxuICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjb250ZW50LCBjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBydGUuaW5zZXJ0SFRNTChgPHNwYW4gY2xhc3M9XCJkcm9wQ2Fwc1wiPiR7cnRlLnNlbGVjdGlvbigpfTwvc3Bhbj5gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZWRpdG9yLlJpY2hUZXh0RWRpdG9yLmFkZCgnc3VwZXJzY3JpcHQnLCB7XHJcbiAgICAgIGljb246ICc8Yj5TPHN1cD5zPC9zdXA+PC9iPicsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHsgdGl0bGU6ICdTdXBlcnNjcmlwdCcgfSxcclxuICAgICAgcmVzdWx0OiBydGUgPT4gcnRlLmV4ZWMoJ3N1cGVyc2NyaXB0JylcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZWRpdG9yLlJpY2hUZXh0RWRpdG9yLmFkZCgnc3Vic2NyaXB0Jywge1xyXG4gICAgICBpY29uOiAnPGI+UzxzdWI+czwvc3ViPjwvYj4nLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7IHRpdGxlOiAnU3Vic2NyaXB0JyB9LFxyXG4gICAgICByZXN1bHQ6IHJ0ZSA9PiBydGUuZXhlYygnc3Vic2NyaXB0JylcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZWRpdG9yLlJpY2hUZXh0RWRpdG9yLmFkZCgnaHlwZXJsaW5rJywge1xyXG4gICAgICBpY29uOiAnJiMxMjgyNzk7JyxcclxuICAgICAgYXR0cmlidXRlczogeyB0aXRsZTogJ0h5cGVybGluaycgfSxcclxuICAgICAgcmVzdWx0OiBydGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuZWRpdG9yLmdldFNlbGVjdGVkKCk7XHJcblxyXG4gICAgICAgIGlmIChjb21wb25lbnQuaXMoJ2xpbmsnKSkge1xyXG4gICAgICAgICAgY29tcG9uZW50LnJlcGxhY2VXaXRoKGAke2NvbXBvbmVudC5nZXQoJ2NvbnRlbnQnKX1gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IHJhbmdlID0gcnRlLnNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCk7XHJcblxyXG4gICAgICAgICAgbGV0IGNvbnRhaW5lciA9IHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xyXG4gICAgICAgICAgaWYgKGNvbnRhaW5lci5ub2RlVHlwZSA9PSAzKSBjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICBpZiAoY29udGFpbmVyLm5vZGVOYW1lID09PSAnQScpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsID0gcnRlLnNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAgIHJ0ZS5leGVjKCd1bmxpbmsnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5wcm9tcHQoJ0VudGVyIHRoZSBVUkwgdG8gbGluayB0bzonKTtcclxuICAgICAgICAgICAgaWYgKHVybCkgcnRlLmluc2VydEhUTUwoYDxhIGNsYXNzPVwibGlua1wiIGhyZWY9XCIke3VybH1cIj4ke3J0ZS5zZWxlY3Rpb24oKX08L2E+YCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmVkaXRvci5SaWNoVGV4dEVkaXRvci5hZGQoJ2luZGVudCcsIHtcclxuICAgICAgaWNvbjogJyYjODU5NDsnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7IHRpdGxlOiAnSW5kZW50JyB9LFxyXG4gICAgICByZXN1bHQ6IHJ0ZSA9PiBydGUuZXhlYygnaW5kZW50JylcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZWRpdG9yLlJpY2hUZXh0RWRpdG9yLmFkZCgnb3V0ZGVudCcsIHtcclxuICAgICAgaWNvbjogJyYjODU5MjsnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7IHRpdGxlOiAnT3V0ZGVudCcgfSxcclxuICAgICAgcmVzdWx0OiBydGUgPT4gcnRlLmV4ZWMoJ291dGRlbnQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5lZGl0b3IuUmljaFRleHRFZGl0b3IuYWRkKCdvcmRlcmVkTGlzdCcsIHtcclxuICAgICAgaWNvbjogJzEuJyxcclxuICAgICAgYXR0cmlidXRlczogeyB0aXRsZTogJ09yZGVyZWQgTGlzdCcgfSxcclxuICAgICAgcmVzdWx0OiBydGUgPT4gcnRlLmV4ZWMoJ2luc2VydE9yZGVyZWRMaXN0JylcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZWRpdG9yLlJpY2hUZXh0RWRpdG9yLmFkZCgndW5vcmRlcmVkTGlzdCcsIHtcclxuICAgICAgaWNvbjogJyYjODIyNjsnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7IHRpdGxlOiAnVW5vcmRlcmVkIExpc3QnIH0sXHJcbiAgICAgIHJlc3VsdDogcnRlID0+IHJ0ZS5leGVjKCdpbnNlcnRVbm9yZGVyZWRMaXN0JylcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZWRpdG9yLlJpY2hUZXh0RWRpdG9yLmFkZCgnZm9udE5hbWUnLCB7XHJcbiAgICAgIGljb246ICdBJyxcclxuICAgICAgYXR0cmlidXRlczogeyB0aXRsZTogJ0ZvbnQnIH0sXHJcbiAgICAgIHJlc3VsdDogcnRlID0+IHJ0ZS5leGVjKCdmb250TmFtZScpXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0QWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXMoKSB7XHJcbiAgICB0aGlzLl9lbWFpbFRlbXBsYXRlU2VydmljZS5nZXRBbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllcygpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmFsbEVtYWlsVGVtcGxhdGVDYXRlZ29yaWVzID0gcmVzLmRhdGE7XHJcbiAgICAgICAgdGhpcy5hbGxFbWFpbFRlbXBsYXRlQ2F0ZWdvcmllcyA9IHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXMuZmlsdGVyKHggPT4geC5rZXkgPT09ICdSRUZFUlJBTCcpO1xyXG4gICAgICAgIHRoaXMuZ2V0RW1haWxUZW1wbGF0ZUxpc3QoKTtcclxuICAgICAgICB0aGlzLmdldFZhcmlhYmxlTGlzdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0RW1haWxUZW1wbGF0ZUxpc3QoKSB7XHJcbiAgICBjb25zdCBpZCA9IHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXNbMF0uaWQgOiAxO1xyXG4gICAgdGhpcy5fZW1haWxUZW1wbGF0ZVNlcnZpY2UuZ2V0RW1haWxUZW1wbGF0ZUxpc3QoaWQpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUxpc3QgPSByZXMuZGF0YS5tYXAodGVtcGxhdGUgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4udGVtcGxhdGUsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBgJHt0ZW1wbGF0ZS51c2VyLmZpcnN0bmFtZX0gJHt0ZW1wbGF0ZS51c2VyLmxhc3RuYW1lfWBcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVUZW1wbGF0ZUNyZWF0ZSgpIHtcclxuICAgIGNvbnN0IHJlcXVlc3RPYmplY3QgPSB0aGlzLmVtYWlsVGVtcGxhdGVGb3JtLmdldFJhd1ZhbHVlKCk7XHJcbiAgICB0aGlzLl9hbGVydFNlcnZpY2Uud2FybignVmFsaWRhdGUgdGVtcGxhdGUgbmFtZSBpbnByb2dyZXNzIScpO1xyXG4gICAgdGhpcy5fZW1haWxUZW1wbGF0ZVNlcnZpY2UuY2hlY2tEdXBsaWNhdGVGb3JDcmVhdGUocmVxdWVzdE9iamVjdC50ZW1wbGF0ZW5hbWUpLnN1YnNjcmliZShcclxuICAgICAgKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZlVGVtcGxhdGUoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FsZXJ0U2VydmljZS5lcnJvcihyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIF9lcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5fYWxlcnRTZXJ2aWNlLmVycm9yKCdVbmFibGUgdG8gcHJvY2VzcyB5b3VyIHJlcXVlc3QuJyk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIHZhbGlkYXRlVGVtcFVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IHJlcXVlc3RPYmplY3QgPSB0aGlzLmVtYWlsVGVtcGxhdGVGb3JtLmdldFJhd1ZhbHVlKCk7XHJcbiAgICB0aGlzLl9hbGVydFNlcnZpY2Uud2FybignVmFsaWRhdGUgdGVtcGxhdGUgbmFtZSBpbnByb2dyZXNzIScpO1xyXG4gICAgdGhpcy5fZW1haWxUZW1wbGF0ZVNlcnZpY2UuY2hlY2tEdXBsaWNhdGVGb3JVcGRhdGUocmVxdWVzdE9iamVjdC50ZW1wbGF0ZW5hbWUsIHJlcXVlc3RPYmplY3QuaWQpLnN1YnNjcmliZShcclxuICAgICAgKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRlbXBsYXRlKCdVUERBVEUnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FsZXJ0U2VydmljZS5lcnJvcihyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIF9lcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5fYWxlcnRTZXJ2aWNlLmVycm9yKCdVbmFibGUgdG8gcHJvY2VzcyB5b3VyIHJlcXVlc3QuJyk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGNvcHlUZXh0KHZhbDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgc2VsQm94LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgIHNlbEJveC5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgc2VsQm94LnN0eWxlLnRvcCA9ICcwJztcclxuICAgIHNlbEJveC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgc2VsQm94LnZhbHVlID0gdmFsO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWxCb3gpO1xyXG4gICAgc2VsQm94LmZvY3VzKCk7XHJcbiAgICBzZWxCb3guc2VsZWN0KCk7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh2YWwpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzZWxCb3gpO1xyXG4gICAgdGhpcy5fYWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoJ0NvcGllZCB2YXJpYWJsZScpO1xyXG4gIH1cclxuICBnZXRWYXJpYWJsZUxpc3QoKSB7XHJcbiAgICBjb25zdCBpZCA9IHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IHRoaXMuYWxsRW1haWxUZW1wbGF0ZUNhdGVnb3JpZXNbMF0ua2V5IDogJ1JFRkZFUkFMJztcclxuICAgIHRoaXMuX2VtYWlsVGVtcGxhdGVTZXJ2aWNlLmdldFZhcmlhYmxlTGlzdChpZCkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXZhbGlhYmxlTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGV2YWxpYWJsZUxpc3QgPSByZXMuZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8YXBwLWFsZXJ0PjwvYXBwLWFsZXJ0PlxyXG48ZGl2IGNsYXNzPVwiYmctd2hpdGUgcC0yIG1iLTMgbXQtMiBkLW5vbmVcIj5cclxuICA8aDUgY2xhc3M9XCJjb2wgZm9udC13ZWlnaHQtYm9sZCBtYi0wXCI+RW1haWw8L2g1PlxyXG4gIDxkaXYgY2xhc3M9XCJjb2wgcmlnaHRCdG5TZWFjcmNoIGNsZWFyZml4IHRleHQtcmlnaHRcIj5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJub3RpZmljYXRpb25JQ29uIGYtbGVmdFwiXHJcbiAgICAgIGRhdGEtY29udGFpbmVyPVwiYm9keVwiXHJcbiAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXHJcbiAgICAgIGRhdGEtcGxhY2VtZW50PVwibGVmdFwiXHJcbiAgICAgIHRpdGxlPVwiTm90aWZpY2F0aW9uXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY2xzQ291bnRcIj4ge3sgdG90YWxOb3RpZmljYXRpb25Db3VudCB9fSA8L3NwYW4+XHJcbiAgICAgIDxzdmdcclxuICAgICAgICB3aWR0aD1cIjEzXCJcclxuICAgICAgICBoZWlnaHQ9XCIyMFwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAxNiAyMFwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgY2xhc3M9XCJiZWxsQnRuXCJcclxuICAgICAgICBkYXRhLXRlc3QtaW1nPVwiYmVsbF9idG5cIj5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk03IC41YS41LjUgMCAwIDEgLjUtLjVoMWEuNS41IDAgMCAxIC41LjV2LjUyNUE0Ljk5NCA0Ljk5NCAwIDAgMSAxMi41MDIgMyA3LjUxMiA3LjUxMiAwIDAgMSAxNCA3LjUwM1YxNGwyIDF2Mkgwdi0ybDItMVY3LjUwNEMyIDUuODggMi41MjcgNC4zIDMuNSAzLjAwMUE1LjAwMiA1LjAwMiAwIDAgMSA3IDEuMDI1Vi41ek02IDE4aDRhMiAyIDAgMSAxLTQgMHpcIlxyXG4gICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjwvcGF0aD5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwicGFnZS1kZXNpZ25cIiBbaGlkZGVuXT1cInNob3dUZW1wbGF0ZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJzdHJpcF9oZWFkIGRlZi1hZGRJY29uIHRvZ2dsZWxlZnQgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHB4LTNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmLWxlZnRcIj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1pY29uIG15LTJcIlxyXG4gICAgICAgIHRpdGxlPVwiQWRkIE5ldyBQYWdlXCJcclxuICAgICAgICAoY2xpY2spPVwiYWRkVGVtcGxhdGUoKVwiXHJcbiAgICAgICAgcFJpcHBsZT5cclxuICAgICAgICA8ZW0gY2xhc3M9XCJwaSBwaS1wbHVzIGZvbnQtd2VpZ2h0LWJvbGRcIj48L2VtPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgbWItNFwiPlxyXG4gICAgICA8cC1jYXJkIHN0eWxlQ2xhc3M9XCJyYmFjLWNhcmQgZ3JpZHZpZXcgdy0xMDBcIj5cclxuICAgICAgICA8YXBwLWdyaWQtbGlzdFxyXG4gICAgICAgICAgW2RhdGFMaXN0XT1cInRlbXBsYXRlTGlzdFwiXHJcbiAgICAgICAgICBbdXBkYXRlR3JpZF09XCJ1cGRhdGVHcmlkXCJcclxuICAgICAgICAgIFtjb2x1bW5zXT1cInRhYmxlQ29sdW1uc1wiXHJcbiAgICAgICAgICBbdG90YWxDb3VudF09XCJ0b3RhbGNvdW50XCJcclxuICAgICAgICAgIChlZGl0VGFibGVSb3cpPVwiZWRpdFRhYmxlUm93KCRldmVudClcIlxyXG4gICAgICAgICAgKGRlbGV0ZVRhYmxlUm93KT1cInNob3dEZWxldGVNb2RhbCgkZXZlbnQpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9hcHAtZ3JpZC1saXN0PlxyXG4gICAgICA8L3AtY2FyZD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJyb3dcIiBbaGlkZGVuXT1cIiFzaG93VGVtcGxhdGVcIj5cclxuICA8ZGl2IGNsYXNzPVwiY29sLW1kLTkgcHQtMTAgbWItNFwiPlxyXG4gICAgPHAtY2FyZCBzdHlsZUNsYXNzPVwiZC1ibG9jayBoLTEwMFwiIFtzdHlsZV09XCJ7IHdpZHRoOiAnMTAwJScgfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IHRleHRMZWZ0IG0tdC0xMFwiIFtmb3JtR3JvdXBdPVwiZW1haWxUZW1wbGF0ZUZvcm1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIGNvbC0xMiBteS0zXCIgPlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGQgbWItMCBmcm9tVGl0bGVcIj5FbWFpbCBUZW1wbGF0ZTwvaDY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWNhbmNlbFwiIChjbGljayk9XCJiYWNrVG9MaXN0KClcIj5cclxuICAgICAgICAgICAgICAgIEJhY2sgXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRlbXBsYXRlLW5hbWVcIiBjbGFzcz1cImludGFrZS1mb3JtLWxhYmVsc1wiPlRlbXBsYXRlIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcHgtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ0ZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidGVtcGxhdGVuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgZmllbGRLZXk9XCJFTUFfVEVNX1RFTVBMQVRFX05BTUVcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFRlbXBsYXRlIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBwSW5wdXRUZXh0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIG1iLTNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGVtcGxhdGUtbmFtZVwiIGNsYXNzPVwiaW50YWtlLWZvcm0tbGFiZWxzXCI+U3ViamVjdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBweC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzdWJqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBmaWVsZEtleT1cIkVNQV9URU1fU1VCSkVDVFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBzdWJqZWN0IGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzdWJqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgcElucHV0VGV4dCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC0xMFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+IFRlbXBsYXRlIEVkaXRvciA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxFZGl0b3JcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiB0ZXh0LXJpZ2h0IG10LTRcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW1kIGJnLXdoaXRlIHRleHQtcHJpbWFyeSBib3JkZXItcHJpbWFyeSBidG5jYW5jZWwgbXItMlwiXHJcbiAgICAgICAgICAgIGZpZWxkS2V5PVwiRU1BX1RFTV9DQU5DRUxcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwicmVzZXQoKVwiPlxyXG4gICAgICAgICAgICBDbGVhclxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzPVwibWItMCBidG4gYnRuLXByaW1hcnkgYnRuY29tbW9uXCJcclxuICAgICAgICAgICAgZmllbGRLZXk9XCJFTUFfVEVNX1NBVkVcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiZWRpdFN0YXR1cyA/IHZhbGlkYXRlVGVtcFVwZGF0ZSgpIDogdmFsaWRhdGVUZW1wbGF0ZUNyZWF0ZSgpXCI+XHJcbiAgICAgICAgICAgIHt7IGVkaXRTdGF0dXMgPyAnVXBkYXRlJyA6ICdTYXZlJyB9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9wLWNhcmQ+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBwbC0wIHB0LTEwIG1iLTRcIj5cclxuICAgIDxwLWNhcmQgc3R5bGVDbGFzcz1cImQtYmxvY2sgaC0xMDAgdy0xMDBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4IHB0LTEwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImF0dGFjaC10YiB0YWJsZS10aGVtZSB0YWJsZS1yZXNwb25zaXZlIG5vdGlmaWNhdGlvbkNvbmZpZ1wiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImNsaWVudC1uYW1lXCIgY2xhc3M9XCJpbnRha2UtZm9ybS1sYWJlbHNcIj5WYXJpYWJsZSBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgIDx0YWJsZSBhcmlhLWRlc2NyaWJlZGJ5PVwiVmFyaWFibGUgTmFtZVwiIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VmFyaWFibGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q29weTwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgdGVtcGxhdGUgb2YgdGVtcGxhdGV2YWxpYWJsZUxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImN1cnNvcjogcG9pbnRlclwiPnt7IHRlbXBsYXRlLnZhbHVlIH19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgPGVtIGNsYXNzPVwicGkgcGktY29weVwiICpzaG93RmllbGQ9XCInRU1BX1RFTV9WQVJJQUJMRV9DT1BZJ1wiIChjbGljayk9XCJjb3B5VGV4dCh0ZW1wbGF0ZS52YWx1ZSlcIj48L2VtPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI25vUmVjb3JkRm91bmQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xhZXJmaXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG5vLXJlY29yZC1pbWcgbXQtNVwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibS0wXCI+Tm8gUmVjb3JkIEZvdW5kPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9wLWNhcmQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibW9kYWxcIiBpZD1cIkRlbGV0ZXRlbXBsYXRlXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIj5cclxuICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5EZWxldGUgRW1haWwgVGVtcGxhdGU8L2g1PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBFbWFpbCBUZW1wbGF0ZT9cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMlwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInB1bGwtcmlnaHQgbWItMiBidG4gYnRuLXByaW1hcnkgYnRuY29tbW9uIGRlbGV0ZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgKGNsaWNrKT1cImRlbGV0ZVRlbXBsYXRlKClcIj5cclxuICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwdWxsLXJpZ2h0IG1iLTIgbXItMiBidG4gYmctd2hpdGUgdGV4dC1wcmltYXJ5IGJ0bmNhbmNlbFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48cC1jb25maXJtRGlhbG9nIGhlYWRlcj1cIkNvbmZpcm1hdGlvblwiIGljb249XCJwaSBwaS1leGNsYW1hdGlvbi10cmlhbmdsZVwiPjwvcC1jb25maXJtRGlhbG9nPlxyXG5cclxuIl19