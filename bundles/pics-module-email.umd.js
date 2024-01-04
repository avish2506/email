(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common/http'), require('rxjs/add/operator/map'), require('rxjs/internal/observable/throwError'), require('rxjs/operators'), require('@angular/router'), require('@angular/forms'), require('@angular/common'), require('primeng/card'), require('devextreme-angular'), require('devextreme/data/custom_store'), require('devextreme/excel_exporter'), require('devextreme/pdf_exporter'), require('exceljs/dist/exceljs.min.js'), require('file-saver-es'), require('jspdf'), require('moment'), require('devextreme-angular/ui/nested'), require('devextreme-angular/core'), require('@angular/material/tooltip'), require('primeng/confirmdialog'), require('primeng/ripple'), require('primeng/inputtext'), require('primeng/api'), require('@ng-bootstrap/ng-bootstrap'), require('primeng/accordion'), require('primeng/avatar'), require('primeng/badge'), require('primeng/button'), require('primeng/calendar'), require('primeng/checkbox'), require('primeng/confirmpopup'), require('primeng/contextmenu'), require('primeng/dialog'), require('primeng/dropdown'), require('primeng/editor'), require('primeng/fieldset'), require('primeng/fileupload'), require('primeng/inputmask'), require('primeng/inputswitch'), require('primeng/inputtextarea'), require('primeng/knob'), require('primeng/message'), require('primeng/multiselect'), require('primeng/orderlist'), require('primeng/password'), require('primeng/progressspinner'), require('primeng/radiobutton'), require('primeng/sidebar'), require('primeng/speeddial'), require('primeng/steps'), require('primeng/table'), require('primeng/tabmenu'), require('primeng/tabview'), require('primeng/toast'), require('primeng/treeselect'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/core'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/form-field'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/menu'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/slide-toggle'), require('@angular/material/sort'), require('@angular/material/stepper'), require('@angular/material/table'), require('@angular/material/tabs'), require('ngx-mask'), require('ngx-pagination'), require('ngxf-uploader')) :
    typeof define === 'function' && define.amd ? define('@pics-module/email', ['exports', '@angular/core', 'rxjs', '@angular/common/http', 'rxjs/add/operator/map', 'rxjs/internal/observable/throwError', 'rxjs/operators', '@angular/router', '@angular/forms', '@angular/common', 'primeng/card', 'devextreme-angular', 'devextreme/data/custom_store', 'devextreme/excel_exporter', 'devextreme/pdf_exporter', 'exceljs/dist/exceljs.min.js', 'file-saver-es', 'jspdf', 'moment', 'devextreme-angular/ui/nested', 'devextreme-angular/core', '@angular/material/tooltip', 'primeng/confirmdialog', 'primeng/ripple', 'primeng/inputtext', 'primeng/api', '@ng-bootstrap/ng-bootstrap', 'primeng/accordion', 'primeng/avatar', 'primeng/badge', 'primeng/button', 'primeng/calendar', 'primeng/checkbox', 'primeng/confirmpopup', 'primeng/contextmenu', 'primeng/dialog', 'primeng/dropdown', 'primeng/editor', 'primeng/fieldset', 'primeng/fileupload', 'primeng/inputmask', 'primeng/inputswitch', 'primeng/inputtextarea', 'primeng/knob', 'primeng/message', 'primeng/multiselect', 'primeng/orderlist', 'primeng/password', 'primeng/progressspinner', 'primeng/radiobutton', 'primeng/sidebar', 'primeng/speeddial', 'primeng/steps', 'primeng/table', 'primeng/tabmenu', 'primeng/tabview', 'primeng/toast', 'primeng/treeselect', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/card', '@angular/material/checkbox', '@angular/material/core', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/form-field', '@angular/material/icon', '@angular/material/input', '@angular/material/menu', '@angular/material/radio', '@angular/material/select', '@angular/material/slide-toggle', '@angular/material/sort', '@angular/material/stepper', '@angular/material/table', '@angular/material/tabs', 'ngx-mask', 'ngx-pagination', 'ngxf-uploader'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["pics-module"] = global["pics-module"] || {}, global["pics-module"].email = {}), global.ng.core, global.rxjs, global.ng.common.http, global.rxjs["add/operator/map"], global.rxjs["internal/observable/throwError"], global.rxjs.operators, global.ng.router, global.ng.forms, global.ng.common, global.i6$1, global.i4, global.CustomStore, global.excel_exporter, global.pdf_exporter, global.ExcelJS, global.fileSaverEs, global.jsPDF, global.moment, global.i5, global.i7, global.ng.material.tooltip, global.i8$1, global.i9, global.i11, global.api, global.ngBootstrap, global.accordion, global.avatar, global.badge, global.button$1, global.calendar, global.checkbox$1, global.confirmpopup, global.contextmenu, global.dialog$1, global.dropdown, global.editor, global.fieldset, global.fileupload, global.inputmask, global.inputswitch, global.inputtextarea, global.knob, global.message, global.multiselect, global.orderlist, global.password, global.progressspinner, global.radiobutton, global.sidebar, global.speeddial, global.steps, global.table$1, global.tabmenu, global.tabview, global.toast, global.treeselect, global.ng.material.bottomSheet, global.ng.material.button, global.ng.material.card, global.ng.material.checkbox, global.ng.material.core, global.ng.material.datepicker, global.ng.material.dialog, global.ng.material.formField, global.ng.material.icon, global.ng.material.input, global.ng.material.menu, global.ng.material.radio, global.ng.material.select, global.ng.material.slideToggle, global.ng.material.sort, global.ng.material.stepper, global.ng.material.table, global.ng.material.tabs, global.i1$2, global.ngxPagination, global.ngxfUploader));
})(this, (function (exports, i0, rxjs, i1, map, throwError, operators, i1$1, i3, i6, i6$1, i4, CustomStore, excel_exporter, pdf_exporter, ExcelJS, fileSaverEs, jsPDF, moment, i5, i7, i8, i8$1, i9, i11, api, ngBootstrap, accordion, avatar, badge, button$1, calendar, checkbox$1, confirmpopup, contextmenu, dialog$1, dropdown, editor, fieldset, fileupload, inputmask, inputswitch, inputtextarea, knob, message, multiselect, orderlist, password, progressspinner, radiobutton, sidebar, speeddial, steps, table$1, tabmenu, tabview, toast, treeselect, bottomSheet, button, card, checkbox, core, datepicker, dialog, formField, icon, input, menu, radio, select, slideToggle, sort, stepper, table, tabs, i1$2, ngxPagination, ngxfUploader) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i6__namespace$1 = /*#__PURE__*/_interopNamespace(i6$1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var CustomStore__default = /*#__PURE__*/_interopDefaultLegacy(CustomStore);
    var ExcelJS__namespace = /*#__PURE__*/_interopNamespace(ExcelJS);
    var jsPDF__namespace = /*#__PURE__*/_interopNamespace(jsPDF);
    var moment__namespace = /*#__PURE__*/_interopNamespace(moment);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i8__namespace$1 = /*#__PURE__*/_interopNamespace(i8$1);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i11__namespace = /*#__PURE__*/_interopNamespace(i11);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);

    var EmailService = /** @class */ (function () {
        function EmailService() {
        }
        return EmailService;
    }());
    EmailService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EmailService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    EmailService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EmailService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EmailService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var EmailTemplateServiceConfig = /** @class */ (function () {
        function EmailTemplateServiceConfig() {
        }
        return EmailTemplateServiceConfig;
    }());
    EmailTemplateServiceConfig.EndPoint = {
        EmailTemp: {
            getList: '/intakedastagings/listtemplates',
            GetAllEmailTemplateCategories: '/solution/emailtemplate/template/getAllEmailTemplateCategories',
            GetEmailTemplateList: '/solution/emailtemplate/template/category/',
            CreateTemplate: '/solution/emailtemplate/template/create',
            UpdateDeleteTemplate: '/solution/emailtemplate/template/',
            CheckDuplicateForUpdate1: '/solution/emailtemplate/template/',
            CheckDuplicateForUpdate2: '/checkDuplicateForUpdate',
            checkDuplicateCreate: '/checkDuplicate',
            templateParameters: '/solution/emailtemplate/template/templateParameters/category/'
        }
    };
    var RBACINFO = /** @class */ (function () {
        function RBACINFO() {
            this.apiHost = '';
            this.tokenKey = '';
        }
        return RBACINFO;
    }());
    var Environment = /** @class */ (function () {
        function Environment() {
        }
        return Environment;
    }());

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function")
            throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn)
                context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access)
                context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done)
                throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0)
                    continue;
                if (result === null || typeof result !== "object")
                    throw new TypeError("Object expected");
                if (_ = accept(result.get))
                    descriptor.get = _;
                if (_ = accept(result.set))
                    descriptor.set = _;
                if (_ = accept(result.init))
                    initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field")
                    initializers.unshift(_);
                else
                    descriptor[key] = _;
            }
        }
        if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    }
    ;
    function __runInitializers(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    }
    ;
    function __propKey(x) {
        return typeof x === "symbol" ? x : "".concat(x);
    }
    ;
    function __setFunctionName(f, name, prefix) {
        if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    }
    ;
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }
    function __addDisposableResource(env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function")
                throw new TypeError("Object expected.");
            var dispose;
            if (async) {
                if (!Symbol.asyncDispose)
                    throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose)
                    throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
            }
            if (typeof dispose !== "function")
                throw new TypeError("Object not disposable.");
            env.stack.push({ value: value, dispose: dispose, async: async });
        }
        else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    }
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    function __disposeResources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async)
                        return Promise.resolve(result).then(next, function (e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError)
                throw env.error;
        }
        return next();
    }
    var tslib_es6 = {
        __extends: __extends,
        __assign: __assign,
        __rest: __rest,
        __decorate: __decorate,
        __param: __param,
        __metadata: __metadata,
        __awaiter: __awaiter,
        __generator: __generator,
        __createBinding: __createBinding,
        __exportStar: __exportStar,
        __values: __values,
        __read: __read,
        __spread: __spread,
        __spreadArrays: __spreadArrays,
        __spreadArray: __spreadArray,
        __await: __await,
        __asyncGenerator: __asyncGenerator,
        __asyncDelegator: __asyncDelegator,
        __asyncValues: __asyncValues,
        __makeTemplateObject: __makeTemplateObject,
        __importStar: __importStar,
        __importDefault: __importDefault,
        __classPrivateFieldGet: __classPrivateFieldGet,
        __classPrivateFieldSet: __classPrivateFieldSet,
        __classPrivateFieldIn: __classPrivateFieldIn,
        __addDisposableResource: __addDisposableResource,
        __disposeResources: __disposeResources,
    };

    var Store = /** @class */ (function () {
        function Store(initialState) {
            this._state$ = new rxjs.BehaviorSubject(initialState);
            this.state$ = this._state$.asObservable();
        }
        Object.defineProperty(Store.prototype, "state", {
            get: function () {
                return this._state$.getValue();
            },
            enumerable: false,
            configurable: true
        });
        Store.prototype.setState = function (nextState) {
            this._state$.next(nextState);
        };
        return Store;
    }());

    var PermissionStore = /** @class */ (function (_super) {
        __extends(PermissionStore, _super);
        function PermissionStore() {
            return _super.call(this, {}) || this;
        }
        PermissionStore.prototype.setStore = function (data) {
            if (data) {
                this.setState(Object.assign(Object.assign({}, this.state), data));
            }
        };
        PermissionStore.prototype.getStore = function (type) {
            if (type === void 0) { type = 'P'; }
            if (type === 'P')
                return rxjs.of(this.state);
            else
                return rxjs.of(this.state);
        };
        PermissionStore.prototype.flat = function (array) {
            var _this = this;
            var result = [];
            if (array) {
                array.forEach(function (item) {
                    result.push(item);
                    if (item && Array.isArray(item)) {
                        result = result.concat(_this.flat(item));
                    }
                });
            }
            return result;
        };
        return PermissionStore;
    }(Store));
    PermissionStore.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PermissionStore.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var DataStoreService = /** @class */ (function () {
        function DataStoreService() {
            this.currentStoreSubject = new rxjs.BehaviorSubject({});
            this.currentStore = this.currentStoreSubject.asObservable();
            // test code
        }
        DataStoreService.prototype.setData = function (key, value) {
            var currentStore = this.getCurrentStore();
            currentStore[key] = value;
            this.currentStoreSubject.next(currentStore);
        };
        DataStoreService.prototype.setObject = function (value) {
            this.currentStoreSubject.next(value);
        };
        DataStoreService.prototype.getData = function (key) {
            var currentStore = this.getCurrentStore();
            return currentStore[key];
        };
        DataStoreService.prototype.clearStore = function () {
            var currentStore = this.getCurrentStore();
            Object.keys(currentStore).forEach(function (key) {
                delete currentStore[key];
            });
            this.currentStoreSubject.next(currentStore);
        };
        DataStoreService.prototype.getCurrentStore = function () {
            return this.currentStoreSubject.value;
        };
        return DataStoreService;
    }());
    DataStoreService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DataStoreService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var HttpService = /** @class */ (function () {
        function HttpService(http, _storeservice) {
            var _this = this;
            this.http = http;
            this._storeservice = _storeservice;
            this.overrideUrl = true;
            this.baseUrl = '';
            this.headers = new i1.HttpHeaders()
                .set('Accept', 'application/json')
                .set('Content-Type', 'application/json')
                .set('role', 'role=CP_PUBLIC');
            this.showSpinner = new rxjs.BehaviorSubject(false);
            this.outsideShowSpinner = new rxjs.BehaviorSubject(false);
            this._storeservice.currentStore.subscribe(function (res) {
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.RBACORG = res['RBACORG'];
                    _this.url = _this.RBACORG['apiHost'] ? _this.RBACORG['apiHost'] : 'http://localhost:3000/api';
                    _this.tokenKey = _this.RBACORG['tokenKey'];
                }
            });
            this.url1 = '';
        }
        HttpService.prototype.get = function (apiRoute) {
            return this.http.get("" + (this.url + apiRoute), {
                headers: this.getHttpNewHeaders()
            });
        };
        HttpService.prototype.post = function (apiRoute, body) {
            return this.http.post("" + (this.url + apiRoute), body, {
                headers: this.getHttpNewHeaders()
            });
        };
        HttpService.prototype.put = function (apiRoute, body) {
            return this.http.put("" + (this.url + apiRoute), body, {
                headers: this.getHttpNewHeaders()
            });
        };
        HttpService.prototype.patch = function (apiRoute, body) {
            return this.http.patch("" + (this.url + apiRoute), body, {
                headers: this.getHttpNewHeaders()
            });
        };
        HttpService.prototype.delete = function (apiRoute) {
            return this.http.delete("" + (this.url + apiRoute), {
                headers: this.getHttpNewHeaders()
            });
        };
        HttpService.prototype.getHttpHeaders = function () {
            return new i1.HttpHeaders().set('key', 'value');
        };
        HttpService.prototype.getHttpNewHeaders = function () {
            return this.headers.set('Authorization', "Bearer " + this.getToken());
        };
        HttpService.prototype.getAttachmentHttpHeaders = function (contentType) {
            return new i1.HttpHeaders().set('Content-Type', contentType).set('x-ms-blob-type', 'BlockBlob');
        };
        HttpService.prototype.putUpload = function (apiRoute, body, contentType) {
            return this.http.put("" + (this.url1 + apiRoute), body, { headers: this.getAttachmentHttpHeaders(contentType) });
        };
        HttpService.prototype.putupload2 = function (apiRoute, body, contenttype) {
            return this.http
                .put("" + (this.url1 + apiRoute), body, {
                headers: this.getAttachmentHttpHeaders(contenttype),
                observe: 'response'
            })
                .pipe(operators.map(function (data) {
                return data;
            }));
        };
        /**
         *
         * @param apiRoute
         * This function will download the stream file from the API service.
         * No HTTP required for this stream. So used Window.location.href to download the file
         */
        HttpService.prototype.getFormDownloaded = function (apiRoute) {
            window.location.href = "" + (this.url + apiRoute);
        };
        //common http service(optional)
        HttpService.prototype.handleError = function (error) {
            var _a, _b;
            var errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // Client-side errors
                errorMessage = "Error: " + error.error.message;
            }
            else {
                // Server-side errors
                errorMessage = "Error Code: " + error.status + "\nMessage: " + (((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) ? (_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.message : error.message);
            }
            return throwError.throwError(errorMessage);
        };
        HttpService.prototype.getToken = function () {
            var token = this.tokenKey ? this.tokenKey : 'jwt-token';
            return sessionStorage.getItem(token);
        };
        return HttpService;
    }());
    HttpService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HttpService, deps: [{ token: i1__namespace.HttpClient }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HttpService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HttpService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HttpService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace.HttpClient }, { type: DataStoreService }]; } });

    var EmailTemplateService = /** @class */ (function () {
        function EmailTemplateService(http) {
            this.http = http;
        }
        EmailTemplateService.prototype.getTemplateList = function (_option) {
            return this.http.get(EmailTemplateServiceConfig.EndPoint.EmailTemp.getList);
        };
        EmailTemplateService.prototype.createTemplate = function (modal) {
            return this.http.post(EmailTemplateServiceConfig.EndPoint.EmailTemp.CreateTemplate, modal);
        };
        EmailTemplateService.prototype.getAllEmailTemplateCategories = function () {
            return this.http.get(EmailTemplateServiceConfig.EndPoint.EmailTemp.GetAllEmailTemplateCategories);
        };
        EmailTemplateService.prototype.getEmailTemplateList = function (id) {
            return this.http.get(EmailTemplateServiceConfig.EndPoint.EmailTemp.GetEmailTemplateList + id);
        };
        EmailTemplateService.prototype.UpdateDeleteTemplate = function (id, modal) {
            return this.http.patch(EmailTemplateServiceConfig.EndPoint.EmailTemp.UpdateDeleteTemplate + id, modal);
        };
        EmailTemplateService.prototype.checkDuplicateForUpdate = function (tempname, id) {
            return this.http.get(EmailTemplateServiceConfig.EndPoint.EmailTemp.CheckDuplicateForUpdate1 +
                tempname +
                '/' +
                id +
                EmailTemplateServiceConfig.EndPoint.EmailTemp.CheckDuplicateForUpdate2);
        };
        EmailTemplateService.prototype.checkDuplicateForCreate = function (tempname) {
            return this.http.get(EmailTemplateServiceConfig.EndPoint.EmailTemp.CheckDuplicateForUpdate1 +
                tempname +
                EmailTemplateServiceConfig.EndPoint.EmailTemp.checkDuplicateCreate);
        };
        EmailTemplateService.prototype.getVariableList = function (category) {
            return this.http.get(EmailTemplateServiceConfig.EndPoint.EmailTemp.templateParameters + category);
        };
        return EmailTemplateService;
    }());
    EmailTemplateService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EmailTemplateService, deps: [{ token: HttpService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    EmailTemplateService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EmailTemplateService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EmailTemplateService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: HttpService }]; } });

    var AlertService = /** @class */ (function () {
        function AlertService(router) {
            var _this = this;
            this.router = router;
            this.subject = new rxjs.Subject();
            this.keepAfterRouteChange = false;
            // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
            router.events.subscribe(function (event) {
                if (event instanceof i1$1.NavigationStart) {
                    if (_this.keepAfterRouteChange) {
                        // only keep for a single route change
                        _this.keepAfterRouteChange = false;
                    }
                    else {
                        // clear alert messages
                        _this.clear();
                    }
                }
            });
        }
        AlertService.prototype.getAlert = function () {
            return this.subject.asObservable();
        };
        AlertService.prototype.success = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Success, message, keepAfterRouteChange);
        };
        AlertService.prototype.error = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Error, message, keepAfterRouteChange);
        };
        AlertService.prototype.info = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Info, message, keepAfterRouteChange);
        };
        AlertService.prototype.warn = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Warning, message, keepAfterRouteChange);
        };
        AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.keepAfterRouteChange = keepAfterRouteChange;
            this.subject.next({ type: type, message: message });
        };
        AlertService.prototype.clear = function () {
            // clear alerts
            this.subject.next({});
        };
        return AlertService;
    }());
    AlertService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, deps: [{ token: i1__namespace$1.Router }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AlertService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace$1.Router }]; } });
    var AlertType;
    (function (AlertType) {
        AlertType[AlertType["Success"] = 0] = "Success";
        AlertType[AlertType["Error"] = 1] = "Error";
        AlertType[AlertType["Info"] = 2] = "Info";
        AlertType[AlertType["Warning"] = 3] = "Warning";
    })(AlertType || (AlertType = {}));
    var Alert = /** @class */ (function () {
        function Alert() {
        }
        return Alert;
    }());
    var UserGroupDto = /** @class */ (function () {
        function UserGroupDto(data) {
            Object.assign(this, data);
        }
        return UserGroupDto;
    }());
    var UserRolePageDto = /** @class */ (function () {
        function UserRolePageDto(data) {
            Object.assign(this, data);
        }
        return UserRolePageDto;
    }());
    var UserRoleDto = /** @class */ (function () {
        function UserRoleDto(data) {
            Object.assign(this, data);
        }
        return UserRoleDto;
    }());
    var UserDto = /** @class */ (function () {
        function UserDto(data) {
            Object.assign(this, data);
        }
        return UserDto;
    }());
    var AccessManagementConfig = /** @class */ (function () {
        function AccessManagementConfig() {
        }
        return AccessManagementConfig;
    }());
    AccessManagementConfig.EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };

    var DISPLAY_IN_SECONDS = 8;
    var AlertComponent = /** @class */ (function () {
        function AlertComponent(alertService) {
            this.alertService = alertService;
            this.alerts = [];
        }
        AlertComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.alertService.getAlert().subscribe(function (alert) {
                if (!alert) {
                    // clear alerts when an empty alert is received
                    _this.alerts = [];
                    return;
                }
                // add alert to array
                _this.alerts.push(alert);
                // remove alert after 5 seconds
                setTimeout(function () { return _this.removeAlert(alert); }, DISPLAY_IN_SECONDS * 1000);
            });
        };
        AlertComponent.prototype.removeAlert = function (alert) {
            this.alerts = this.alerts.filter(function (x) { return x !== alert; });
        };
        AlertComponent.prototype.cssClass = function (alert) {
            if (!alert) {
                return;
            }
            // return css class based on alert type
            switch (alert.type) {
                case AlertType.Success:
                    return 'alert alert-success';
                case AlertType.Error:
                    return 'alert alert-danger';
                case AlertType.Info:
                    return 'alert alert-info';
                case AlertType.Warning:
                    return 'alert alert-warning';
            }
        };
        return AlertComponent;
    }());
    AlertComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, deps: [{ token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    AlertComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0__namespace, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i6__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, decorators: [{
                type: i0.Component,
                args: [{
                        // moduleId: module.id,
                        selector: 'app-alert',
                        templateUrl: 'alert.component.html',
                        styleUrls: ['./alert.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: AlertService }]; } });

    var GridListService = /** @class */ (function () {
        function GridListService() {
        }
        return GridListService;
    }());
    GridListService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    GridListService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }] });

    var StorageService = /** @class */ (function () {
        function StorageService(Storage) {
            this.Storage = Storage;
        }
        StorageService.prototype.getItem = function (key) {
            return this.Storage.getItem(key);
        };
        StorageService.prototype.setItem = function (key, item) {
            return this.Storage.setItem(key, item);
        };
        StorageService.prototype.getObj = function (key, safe) {
            if (safe === void 0) { safe = true; }
            try {
                var item = this.getItem(key);
                return JSON.parse(item);
            }
            catch (e) {
                if (!safe) {
                    throw e;
                }
            }
        };
        StorageService.prototype.setObj = function (key, item) {
            return this.setItem(key, JSON.stringify(item));
        };
        StorageService.prototype.removeItem = function (key) {
            this.Storage.removeItem(key);
        };
        StorageService.prototype.clear = function () {
            this.Storage.clear();
        };
        return StorageService;
    }());

    var LocalService = /** @class */ (function (_super) {
        __extends(LocalService, _super);
        function LocalService() {
            return _super.call(this, window.sessionStorage) || this;
        }
        return LocalService;
    }(StorageService));
    LocalService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LocalService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var AuthService = /** @class */ (function () {
        function AuthService(injector, httpService, _router, localstore) {
            this.httpService = httpService;
            this._router = _router;
            this.localstore = localstore;
            this.orgInfo = new rxjs.BehaviorSubject('');
            this.currentOrgInfo = this.orgInfo.asObservable();
            this.currentMenu = new rxjs.BehaviorSubject('');
            this.currentMenuInfo = this.currentMenu.asObservable();
            this.alertService = injector.get(AlertService);
        }
        AuthService.prototype.getRoleKey = function () {
            var user = this.localstore.getObj('user');
            if (user && user.role) {
                return user.role.rolekey;
            }
        };
        AuthService.prototype.isAdmin = function () {
            return 'ADM' === this.getRoleKey();
        };
        AuthService.prototype.getOrgID = function () {
            var user = this.localstore.getObj('user');
            if (user && user.userWorkInfo && user.userWorkInfo.organization && user.userWorkInfo.organization.id) {
                return user.userWorkInfo.organization.id;
            }
            else {
                return '';
            }
        };
        return AuthService;
    }());
    AuthService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthService, deps: [{ token: i0__namespace.Injector }, { token: HttpService }, { token: i1__namespace$1.Router }, { token: LocalService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: HttpService }, { type: i1__namespace$1.Router }, { type: LocalService }]; } });

    var GridListComponent = /** @class */ (function () {
        function GridListComponent(router, auth, localstorage) {
            this.router = router;
            this.auth = auth;
            this.localstorage = localstorage;
            this.dataList = [];
            this.currentPage = new i0.EventEmitter();
            this.pageIndex = new i0.EventEmitter();
            this.currentSize = new i0.EventEmitter();
            this.editTableRow = new i0.EventEmitter();
            this.viewTableRow = new i0.EventEmitter();
            this.deleteTableRow = new i0.EventEmitter();
            this.openExternalLink = new i0.EventEmitter();
            this.openpopupLink = new i0.EventEmitter();
            this.routeTo = new i0.EventEmitter();
            this.openPopup = new i0.EventEmitter();
            this.duplicateRow = new i0.EventEmitter();
            this.sortOrder = new i0.EventEmitter();
            this.filterSearchValue = new i0.EventEmitter();
            this.filterBuilderPopup = new i0.EventEmitter();
            this.filterPanel = new i0.EventEmitter();
            this.multipleFilterValues = new i0.EventEmitter();
            this.downloadTableRow = new i0.EventEmitter();
            this.toggleRow = new i0.EventEmitter();
            this.outComeTableRow = new i0.EventEmitter();
            this.downloadFormResponseFiles = new i0.EventEmitter();
            this.deleteFormResponseFiles = new i0.EventEmitter();
            this.rowSelection = new i0.EventEmitter();
            this.navigate = new i0.EventEmitter();
            this.multipleFilterValueToAPI = new i0.EventEmitter();
            this.selectedRowsData = new i0.EventEmitter();
            this.contentReady = function (e) {
                var reorderColumns = e.component.instance().getVisibleColumns();
                // console.log(reorderColumns, 'reorderColumns');
            };
            /**
             * initiating the grid list
             */
            this.loadGWithParam();
            /**
             * fetching login details from local storage
             */
            this.user = this.localstorage.getObj('user');
            this.displayMode = 'compact';
            this.currentFilter = 'auto';
        }
        Object.defineProperty(GridListComponent.prototype, "pageSize", {
            set: function (value) {
                if (value) {
                    this.currentPageSize = value;
                }
                else {
                    this.currentPageSize = 20;
                }
            },
            enumerable: false,
            configurable: true
        });
        GridListComponent.prototype.ngOnInit = function () {
            this.rUrl = this.router.url.split('/');
            this.tempColumns = this.columns;
            if (this.columns && this.columns.gridConfigFormArray) {
                this.columnHeader = this.columns.gridConfigFormArray.map(function (column) { return column.header; });
                this.columns = this.columns.gridConfigFormArray;
            }
            else {
                this.columnHeader = this.columns.map(function (column) { return column.header; });
            }
            this.popupPosition = { of: window, at: 'top', my: 'top', offset: { y: 10 } };
            this.filterValue = [];
            this.customOperations = [];
        };
        /**
         * re-render the grid when input data is changed.
         */
        GridListComponent.prototype.ngOnChanges = function () {
            this.loadGWithParam();
        };
        /**
         * Rendering data grid condition wise that login user is admin or not
         */
        GridListComponent.prototype.loadGWithParam = function () {
            if (!this.auth.isAdmin()) {
                this.loadGrid({ value: !this.Organization ? this.auth.getOrgID() : this.Organization }, false);
            }
            else {
                this.loadGrid({ value: this.Organization ? this.Organization : 'Select-ALL' }, false);
            }
        };
        GridListComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            /**
             * Datagrid even listener we can customize column event
             */
            this.dataGrid.onRowClick.subscribe(function (row) {
                _this.selectedRowsData.emit(row);
            });
            this.dataGrid.onOptionChanged.subscribe(function (e) {
                if (e.name === 'columns' && e.fullName.endsWith('filterValues')) {
                    var colIndex = Number(e.fullName
                        .match(/\[\d+\]/)[0]
                        .replace('[', '')
                        .replace(']', ''));
                    e.component.columnOption(colIndex, 'filterValues');
                    _this.multipleFilterValues.emit(e);
                }
                // Search
                if (e.name === 'columns' && e.fullName.endsWith('filterValue')) {
                    console.log(e);
                    _this.filterSearchValue.emit(e);
                }
                // filter Builder Popup
                if (e.name === 'filterBuilderPopup') {
                    console.log('filterBuilderPopup');
                    console.log(e);
                    _this.filterBuilderPopup.emit(e);
                }
                // filter Panel - enable or disable
                if (e.name === 'filterPanel') {
                    console.log(e.value);
                    _this.filterPanel.emit(e);
                }
                // Sorting
                if (e.name === 'columns' && e.fullName.endsWith('sortOrder')) {
                    _this.sortOrder.emit(e);
                }
                // Paging
                if (e.name === 'paging') {
                    _this.currentPage.emit(e.value);
                }
                // pageIndex
                if (e.fullName === 'paging.pageIndex') {
                    _this.pageIndex.emit(e.value);
                }
                // pageSize
                if (e.fullName === 'paging.pageSize') {
                    _this.currentSize.emit(e.value);
                }
            });
        };
        /**
         * Generating data grid and restructuring data for Developer grid
         * @param orgID origination details
         * @param load optional boolean is for checking data should load organization respective or all
         */
        GridListComponent.prototype.loadGrid = function (orgID, load) {
            var _this = this;
            if (load === void 0) { load = true; }
            var _a;
            this.Organization = orgID.value;
            if (load) {
                this.currentPage.emit(orgID.value === 'Select-ALL' ? 'all' : orgID.value);
            }
            if (((_a = this.dataList) === null || _a === void 0 ? void 0 : _a.length) && this.rUrl && this.rUrl[2] === 'view-dashboard') {
                this.dUrl = 'view-dashboard/dashboard';
                this.router.navigateByUrl("pages/" + this.dUrl + "/" + this.dataList[0]['id']);
            }
            this.customStore = new CustomStore__default["default"]({
                load: function (_opts) {
                    _this.multipleFilterValueToAPI.emit(_opts.filter);
                    return Promise.resolve(_this.dataList);
                },
                totalCount: function (_opts) {
                    return Promise.resolve(_this.totalCount);
                }
            });
        };
        GridListComponent.prototype.getRouter = function (data) {
            this.routeTo.emit(data);
        };
        GridListComponent.prototype.navigateTo = function (data) {
            this.navigate.emit(data);
        };
        GridListComponent.prototype.popup = function (data) {
            this.openPopup.emit(data);
        };
        GridListComponent.prototype.downloadData = function (evt) {
            this.downloadTableRow.emit(evt);
        };
        GridListComponent.prototype.editData = function (evt) {
            this.editTableRow.emit(evt);
        };
        GridListComponent.prototype.editDataMyApplciation = function (evt) {
            this.editTableRow.emit(evt);
        };
        GridListComponent.prototype.editAppeal = function (evt) {
            this.editTableRow.emit(evt);
        };
        GridListComponent.prototype.onSelectionChanged = function (evt) {
            this.rowSelection.emit(evt);
        };
        GridListComponent.prototype.viewData = function (evt) {
            this.viewTableRow.emit(evt);
        };
        GridListComponent.prototype.deleteData = function (evt) {
            this.deleteTableRow.emit(evt);
        };
        GridListComponent.prototype.duplicateDate = function (evt) {
            this.duplicateRow.emit(evt);
        };
        GridListComponent.prototype.openLink = function (evt) {
            this.openExternalLink.emit(evt);
        };
        GridListComponent.prototype.openPopupLink = function (evt) {
            this.openpopupLink.emit(evt);
        };
        GridListComponent.prototype.activeUser = function (evt) {
            this.toggleRow.emit(evt);
        };
        GridListComponent.prototype.getVisabilityByChoosableProp = function (chooser, visible) {
            if (chooser) {
                return visible;
            }
            else {
                return true;
            }
        };
        GridListComponent.prototype.getSortOrder = function (defaultSortColumn, defaultSortType, columnDef) {
            if (defaultSortColumn && defaultSortType) {
                return defaultSortColumn === columnDef ? defaultSortType : '';
            }
            return '';
        };
        GridListComponent.prototype.outComeData = function (evt) {
            this.outComeTableRow.emit(evt);
        };
        GridListComponent.prototype.downloadFormResponseAttachments = function (evt) {
            this.downloadFormResponseFiles.emit(evt);
        };
        GridListComponent.prototype.deleteFormResponseAttachments = function (evt) {
            this.deleteFormResponseFiles.emit(evt);
        };
        GridListComponent.prototype.onRowPrepared = function (e) {
            if (e.rowType == 'data' && e.data.isnew) {
                var element = e.rowElement;
                element.classList.add('isnew');
            }
        };
        GridListComponent.prototype.onCellPrepared = function (e) {
            var _a, _b;
            if (e.rowType == 'data') {
                if (e.column.dataField === 'notice') {
                    var element = e.cellElement;
                    e.cellElement.innerHTML = '';
                    var livetext = document.createElement('div');
                    this.checkOncellprepare(e, livetext);
                    element.appendChild(livetext);
                }
                else if (e.column.dataField === 'notificationEventChannels') {
                    var element = e.cellElement;
                    e.cellElement.innerHTML = '';
                    var livetext = document.createElement('div');
                    var ele_1 = '';
                    e.data.notificationEventChannels.map(function (t) {
                        if (t.templatename) {
                            ele_1 += "<label>" + t.templatename + "&nbsp;(<b>" + t.templatechannel + "</b>)</label>,";
                        }
                    });
                    livetext.innerHTML = ele_1;
                    element.appendChild(livetext);
                }
                else if (e.column.dataField === 'link') {
                    var element = e.cellElement;
                    e.cellElement.innerHTML = '';
                    var livetext = document.createElement('div');
                    livetext.innerHTML = "<img  src=\"" + (e.data.link ? (_b = (_a = e.data) === null || _a === void 0 ? void 0 : _a.link) === null || _b === void 0 ? void 0 : _b.split('?')[0] : '') + "\"style=\"max-width: 45px; cursor: pointer\"/>";
                    element.appendChild(livetext);
                }
                this.checkCellprepare(e);
            }
        };
        GridListComponent.prototype.checkCellprepare = function (e) {
            var _a, _b, _c, _d;
            if (e.column.dataField === 'status' && e.data['tabname'] === 'RECORDS' && e.data['status'] === 'NO MATCH') {
                var element = e.cellElement;
                var livetext = document.createElement('span');
                livetext.classList.add('ml-2');
                livetext.innerHTML = "<em class=\"fa fa-info-circle\" aria-hidden=\"true\" title=\"" + ((_b = (_a = e.data) === null || _a === void 0 ? void 0 : _a.execution_error) === null || _b === void 0 ? void 0 : _b.error) + "\" ></em>";
                if ((_d = (_c = e.data) === null || _c === void 0 ? void 0 : _c.execution_error) === null || _d === void 0 ? void 0 : _d.error) {
                    element.appendChild(livetext);
                }
            }
        };
        GridListComponent.prototype.checkOncellprepare = function (e, livetext) {
            if (e.value !== 'No Data Found') {
                livetext.innerHTML = "<a class=\"btn-link loginLabel\" href=\"" + e.value + "\" target=\"_blank\">Click Here<a>";
            }
            else {
                livetext.innerHTML = 'No Data Found';
            }
        };
        GridListComponent.prototype.onExporting = function (e) {
            var pageName = this.localstorage.getObj('FILE EXPORT NAME');
            var currentDate = moment__namespace().format('YYYY-MM-DD');
            var fileName;
            if (pageName) {
                fileName = pageName + " Versions " + currentDate;
            }
            else if (this.exportPageName) {
                fileName = this.exportPageName + "-" + currentDate;
            }
            else {
                fileName = "Dynamic-Pages " + currentDate;
            }
            if (e.format === 'pdf') {
                var doc_1 = new jsPDF__namespace.jsPDF();
                pdf_exporter.exportDataGrid({
                    jsPDFDocument: doc_1,
                    component: e.component
                }).then(function () {
                    doc_1.save(fileName + ".pdf");
                });
            }
            else if (e.format === 'xlsx') {
                e.fileName = fileName;
            }
            else if (e.format === 'csv') {
                var workbook_1 = new ExcelJS__namespace.Workbook();
                var worksheet = workbook_1.addWorksheet('Main sheet');
                excel_exporter.exportDataGrid({
                    component: e.component,
                    worksheet: worksheet
                }).then(function () {
                    workbook_1.csv.writeBuffer().then(function (buffer) {
                        fileSaverEs.saveAs(new Blob([buffer], { type: 'application/octet-stream' }), fileName + ".csv");
                    });
                });
                e.cancel = true;
            }
        };
        GridListComponent.prototype.customizeHeaderFilterData = function (options) {
            options.dataSource.postProcess = function (results) {
                results.map(function (x) {
                    x.text = x[options.dataSource.group[0].selector];
                    x.value = [options.dataSource.group[0].selector, '=', x[options.dataSource.group[0].selector]];
                    return x;
                });
                console.log(results, 'update customizeHeaderFilterData');
                return results;
            };
        };
        return GridListComponent;
    }());
    GridListComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListComponent, deps: [{ token: i1__namespace$1.Router }, { token: AuthService }, { token: LocalService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    GridListComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: GridListComponent, selector: "app-grid-list", inputs: { dataList: "dataList", dataSource: "dataSource", columns: "columns", updateGrid: "updateGrid", totalCount: "totalCount", page: "page", isShow: "isShow", remoteOperations: "remoteOperations", enableExport: "enableExport", showHeaderFilter: "showHeaderFilter", exportPageName: "exportPageName", pageSize: "pageSize" }, outputs: { currentPage: "currentPage", pageIndex: "pageIndex", currentSize: "currentSize", editTableRow: "editTableRow", viewTableRow: "viewTableRow", deleteTableRow: "deleteTableRow", openExternalLink: "openExternalLink", openpopupLink: "openpopupLink", routeTo: "routeTo", openPopup: "openPopup", duplicateRow: "duplicateRow", sortOrder: "sortOrder", filterSearchValue: "filterSearchValue", filterBuilderPopup: "filterBuilderPopup", filterPanel: "filterPanel", multipleFilterValues: "multipleFilterValues", downloadTableRow: "downloadTableRow", toggleRow: "toggleRow", outComeTableRow: "outComeTableRow", downloadFormResponseFiles: "downloadFormResponseFiles", deleteFormResponseFiles: "deleteFormResponseFiles", rowSelection: "rowSelection", navigate: "navigate", multipleFilterValueToAPI: "multipleFilterValueToAPI", selectedRowsData: "selectedRowsData" }, providers: [GridListService], viewQueries: [{ propertyName: "dataGrid", first: true, predicate: i4.DxDataGridComponent, descendants: true }], usesOnChanges: true, ngImport: i0__namespace, template: "<dx-data-grid\r\n  id=\"gridContainer\"\r\n  [dataSource]=\"customStore\"\r\n  [allowColumnReordering]=\"true\"\r\n  [allowColumnResizing]=\"true\"\r\n  [columnAutoWidth]=\"true\"\r\n  [showBorders]=\"true\"\r\n  [rowAlternationEnabled]=\"updateGrid?.rowSelection ? false : true\"\r\n  [showColumnLines]=\"true\"\r\n  [showRowLines]=\"true\"\r\n  [filterValue]=\"filterValue\"\r\n  [remoteOperations]=\"remoteOperations ? remoteOperations : false\"\r\n  [hoverStateEnabled]=\"updateGrid?.rowSelection\"\r\n  (onSelectionChanged)=\"onSelectionChanged($event)\"\r\n  (onRowPrepared)=\"onRowPrepared($event)\"\r\n  (onCellPrepared)=\"onCellPrepared($event)\"\r\n  (onContentReady)=\"contentReady($event)\"\r\n  (onExporting)=\"onExporting($event)\">\r\n  <dxo-load-panel [enabled]=\"false\"></dxo-load-panel>\r\n  <dxo-filter-panel [visible]=\"false\"></dxo-filter-panel>\r\n  <dxo-paging [pageSize]=\"currentPageSize\"></dxo-paging>\r\n  <dxo-pager\r\n    [visible]=\"true\"\r\n    [allowedPageSizes]=\"[10, 25, 50, 100]\"\r\n    [displayMode]=\"displayMode\"\r\n    [showPageSizeSelector]=\"true\"\r\n    [showInfo]=\"true\"\r\n    [showNavigationButtons]=\"true\"></dxo-pager>\r\n  <!--end pagination-->\r\n\r\n  <dxo-export [enabled]=\"enableExport\" [formats]=\"['xlsx', 'csv']\"></dxo-export>\r\n\r\n  <dxo-filter-builder [customOperations]=\"customOperations\"> </dxo-filter-builder>\r\n  <dxo-filter-builder-popup [position]=\"popupPosition\"> </dxo-filter-builder-popup>\r\n\r\n  <dxo-filter-row [visible]=\"showHeaderFilter\" [applyFilter]=\"currentFilter\"></dxo-filter-row>\r\n  <dxo-header-filter [visible]=\"true\" [allowSearch]=\"false\"></dxo-header-filter>\r\n  <dxo-selection mode=\"single\" *ngIf=\"updateGrid?.rowSelection\"></dxo-selection>\r\n  <ng-container *ngFor=\"let column of columns; let i = index\">\r\n    <ng-container *ngIf=\"column?.hide !== true\">\r\n      <ng-container *ngIf=\"column?.link; else noLink\">\r\n        <dxi-column\r\n          [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n          [allowHiding]=\"!column?.Choosable\"\r\n          [fixed]=\"column?.fixed\"\r\n          [dataField]=\"column?.columnDef\"\r\n          [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n          [caption]=\"column?.header\"\r\n          [allowFiltering]=\"column?.filter\"\r\n          cellTemplate=\"cellTemplate\"\r\n          [allowSorting]=\"column?.sort\"\r\n          [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n          <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n        </dxi-column>\r\n      </ng-container>\r\n      <ng-template #noLink>\r\n        <ng-container *ngIf=\"column?.icon; else noIcon\">\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            cellTemplate=\"iconTemplate\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n        </ng-container>\r\n      </ng-template>\r\n      <ng-template #noIcon>\r\n        <ng-container *ngIf=\"column?.dateFormat; else noDate\">\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            *ngIf=\"column?.datetext === 'MMDD24'\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            dataType=\"date\"\r\n            format=\"MM/dd/yyyy, HH:mm\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            *ngIf=\"column?.datetext === 'MDY'\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            dataType=\"date\"\r\n            format=\"MM/dd/yyyy\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            *ngIf=\"column?.datetext !== 'MDY' && column?.datetext !== 'MMDD24'\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            dataType=\"date\"\r\n            [format]=\"column?.removeTime ? 'MM/dd/yyyy' : 'MM/dd/yyyy, hh:mm a'\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n        </ng-container>\r\n      </ng-template>\r\n      <ng-template #noDate>\r\n        <dxi-column\r\n          [dataField]=\"column.columnDef\"\r\n          [caption]=\"column.header\"\r\n          [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n          [allowFiltering]=\"column.filter\">\r\n          <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n        </dxi-column>\r\n        <ng-container *ngIf=\"column?.header.toLowerCase().trim() === 'status'\">\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            cellTemplate=\"statusTemplate\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n        </ng-container>\r\n      </ng-template>\r\n    </ng-container>\r\n  </ng-container>\r\n  <ng-container\r\n    *ngIf=\"\r\n      updateGrid &&\r\n      (updateGrid?.externalLink ||\r\n        updateGrid?.openPopup ||\r\n        updateGrid?.edit ||\r\n        updateGrid?.editMyApplication ||\r\n        updateGrid?.editAppeal ||\r\n        updateGrid?.editBilling ||\r\n        updateGrid?.delete ||\r\n        updateGrid?.delete ||\r\n        updateGrid?.download ||\r\n        updateGrid?.showDownload ||\r\n        updateGrid?.showDelete ||\r\n        updateGrid?.pdf)\r\n    \">\r\n    <dxi-column\r\n      [width]=\"100\"\r\n      [allowFiltering]=\"false\"\r\n      [allowSorting]=\"false\"\r\n      caption=\"Action\"\r\n      cellTemplate=\"editCellTemplate\"></dxi-column>\r\n    <!-- Action label added for admin grid -->\r\n\r\n    <div *dxTemplate=\"let d of 'editCellTemplate'\">\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.externalLink\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Open\"\r\n        (click)=\"openLink(d)\">\r\n        <em class=\"fa fa-external-link\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Appeal\"\r\n        *ngIf=\"updateGrid?.appeal\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Appeal\"\r\n        (click)=\"navigateTo(d)\">\r\n        <em class=\"fa fa-external-link\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.showDownload && !updateGrid?.isNewlyUploaded\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Download File\"\r\n        (click)=\"downloadFormResponseAttachments(d)\">\r\n        <em class=\"fa fa-download\" aria-hidden=\"true\"></em> </a\r\n      >&nbsp;&nbsp;\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.showDelete\"\r\n        class=\"no-bg text-danger\"\r\n        matTooltip=\"Delete File\"\r\n        (click)=\"deleteFormResponseAttachments(d)\">\r\n        <em class=\"fa fa-trash\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.openPopup\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Open\"\r\n        (click)=\"openPopupLink(d)\">\r\n        <em class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.duplicate\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Copy\"\r\n        (click)=\"duplicateDate(d)\">\r\n        <em class=\"fa fa-copy\" aria-hidden=\"true\"\r\n          ><span class=\"sr-only\">Copy</span></em\r\n        >\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.download\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Download\"\r\n        (click)=\"downloadData(d)\">\r\n        <em class=\"fa fa-download\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Edit\"\r\n        *ngIf=\"updateGrid?.edit && !d.data?.extendedProps?.outcome\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Edit\"\r\n        (click)=\"editData(d)\">\r\n        <em class=\"fa fa-pencil\" title=\"Edit\" aria-hidden=\"true\" style=\"font-size: 13px\"></em>\r\n      </a>\r\n      <a\r\n      href=\"javascript:void(0)\"\r\n      *ngIf=\"updateGrid?.editRecord\"\r\n      class=\"no-bg mr-2\"\r\n      matTooltip=\"Edit\"\r\n      (click)=\"editData(d)\">\r\n      <em class=\"fa fa-pencil\" aria-hidden=\"true\"><span class=\"sr-only\">Edit</span></em>\r\n      <span class=\"sr-only\">View</span>\r\n    </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Edit\"\r\n        *ngIf=\"updateGrid?.editMyApplication && d?.data?.application_status === 'In Progress'\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Edit\"\r\n        (click)=\"editDataMyApplciation(d)\">\r\n        <em class=\"fa fa-pencil\" title=\"Edit\" aria-hidden=\"true\" style=\"font-size: 13px\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Edit\"\r\n        *ngIf=\"updateGrid?.editAppeal && d?.data?.status === 'In Progress'\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Edit\"\r\n        (click)=\"editAppeal(d)\">\r\n        <em class=\"fa fa-pencil\" title=\"Edit\" aria-hidden=\"true\" style=\"font-size: 13px\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Edit\"\r\n        *ngIf=\"updateGrid?.editBilling && d?.data?.status === 'Waiting for approval'\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Edit\"\r\n        (click)=\"editAppeal(d)\">\r\n        <em class=\"fa fa-pencil\" title=\"Edit\" aria-hidden=\"true\" style=\"font-size: 13px\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"View\"\r\n        *ngIf=\"updateGrid?.view\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"View\"\r\n        (click)=\"viewData(d)\">\r\n        <em class=\"fa fa-eye\" title=\"View\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"delete\"\r\n        *ngIf=\"updateGrid?.delete\"\r\n        class=\"no-bg text-danger\"\r\n        matTooltip=\"Delete\"\r\n        (click)=\"deleteData(d)\">\r\n        <em class=\"fa fa-trash\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.outcome && d.data?.extendedProps?.outcome\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"View\"\r\n        (click)=\"outComeData(d)\">\r\n        <em class=\"fa fa-eye\" title=\"View\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a href=\"javascript:void(0)\" title=\"pdf\" *ngIf=\"updateGrid?.pdf\" class=\"no-bg\" matTooltip=\"PDF\">\r\n        <em class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <button\r\n        *ngIf=\"updateGrid?.toggle\"\r\n        class=\"no-bg\"\r\n        [matTooltip]=\"d.data.isactive === true ? 'Deactivate' : 'Activate'\"\r\n        (click)=\"activeUser(d)\">\r\n        <em *ngIf=\"updateGrid?.toggle && d.data.isactive === true\" class=\"fa fa-toggle-on\"></em>\r\n        <em *ngIf=\"updateGrid?.toggle && d.data.isactive === false\" class=\"fa fa-toggle-off\"></em>\r\n      </button>\r\n      <button *ngIf=\"updateGrid?.activeordeactive\" class=\"no-bg\" (click)=\"deleteData(d)\">\r\n        <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 1\" class=\"fa fa-toggle-on\"></em>\r\n        <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 0\" class=\"fa fa-toggle-off\"></em>\r\n      </button>\r\n    </div>\r\n  </ng-container>\r\n  <div *dxTemplate=\"let d of 'cellTemplate'\">\r\n    <a href=\"javascript:void(0)\" *ngIf=\"d.value && d.value !== 'null'\" (click)=\"getRouter(d)\">{{\r\n      d.value !== 'null' ? d.value : ''\r\n    }}</a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'iconTemplate'\">\r\n    <em class=\"fa fa-book\" (click)=\"popup(d.value)\" aria-hidden=\"true\"></em>\r\n  </div>\r\n</dx-data-grid>\r\n<!-- <ng-template #callNarrativePopup>\r\n  <h2 matDialogTitle>Narrative</h2>\r\n  <div [innerHTML]=\"narrativeData\"></div>\r\n  <div class=\"text-right\">\r\n    <button mat-button (click)=\"closeNarrativePopup()\" class=\"btn btn-cancel mr-2\">Close</button>\r\n  </div>\r\n</ng-template> -->\r\n", styles: [".split-page{outline:3px;margin:5px}.searchlist{min-width:620px!important;height:280px!important}.searchlist table,.searchlist table tr th,.searchlist table tr td{padding:0}.dx-datagrid .dx-data-row>td.bullet{padding-top:0;padding-bottom:0}.dx-datagrid .dx-row>tr>td{padding:0!important}.dx-datagrid .dx-row>td{padding:1px 5px!important;vertical-align:middle!important;text-align:center!important}.org-title{margin:0;font-size:12px!important;color:#0079fe}:host ::ng-deep .dx-row.dx-data-row.dx-row-lines.dx-column-lines.isnew{background-color:#f2f2f2}:host ::ng-deep .dx-row.dx-data-row.dx-row-lines.dx-column-lines.isnew td{font-weight:bold}\n"], components: [{ type: i4__namespace.DxDataGridComponent, selector: "dx-data-grid", inputs: ["accessKey", "activeStateEnabled", "allowColumnReordering", "allowColumnResizing", "autoNavigateToFocusedRow", "cacheEnabled", "cellHintEnabled", "columnAutoWidth", "columnChooser", "columnFixing", "columnHidingEnabled", "columnMinWidth", "columnResizingMode", "columns", "columnWidth", "customizeColumns", "customizeExportData", "dataRowTemplate", "dataSource", "dateSerializationFormat", "disabled", "editing", "elementAttr", "errorRowEnabled", "export", "filterBuilder", "filterBuilderPopup", "filterPanel", "filterRow", "filterSyncEnabled", "filterValue", "focusedColumnIndex", "focusedRowEnabled", "focusedRowIndex", "focusedRowKey", "focusStateEnabled", "grouping", "groupPanel", "headerFilter", "height", "highlightChanges", "hint", "hoverStateEnabled", "keyboardNavigation", "keyExpr", "loadPanel", "masterDetail", "noDataText", "pager", "paging", "remoteOperations", "renderAsync", "repaintChangesOnly", "rowAlternationEnabled", "rowDragging", "rowTemplate", "rtlEnabled", "scrolling", "searchPanel", "selectedRowKeys", "selection", "selectionFilter", "showBorders", "showColumnHeaders", "showColumnLines", "showRowLines", "sortByGroupSummaryInfo", "sorting", "stateStoring", "summary", "tabIndex", "toolbar", "twoWayBindingEnabled", "visible", "width", "wordWrapEnabled"], outputs: ["onAdaptiveDetailRowPreparing", "onCellClick", "onCellDblClick", "onCellHoverChanged", "onCellPrepared", "onContentReady", "onContextMenuPreparing", "onDataErrorOccurred", "onDisposing", "onEditCanceled", "onEditCanceling", "onEditingStart", "onEditorPrepared", "onEditorPreparing", "onExported", "onExporting", "onFileSaving", "onFocusedCellChanged", "onFocusedCellChanging", "onFocusedRowChanged", "onFocusedRowChanging", "onInitialized", "onInitNewRow", "onKeyDown", "onOptionChanged", "onRowClick", "onRowCollapsed", "onRowCollapsing", "onRowDblClick", "onRowExpanded", "onRowExpanding", "onRowInserted", "onRowInserting", "onRowPrepared", "onRowRemoved", "onRowRemoving", "onRowUpdated", "onRowUpdating", "onRowValidating", "onSaved", "onSaving", "onSelectionChanged", "onToolbarPreparing", "accessKeyChange", "activeStateEnabledChange", "allowColumnReorderingChange", "allowColumnResizingChange", "autoNavigateToFocusedRowChange", "cacheEnabledChange", "cellHintEnabledChange", "columnAutoWidthChange", "columnChooserChange", "columnFixingChange", "columnHidingEnabledChange", "columnMinWidthChange", "columnResizingModeChange", "columnsChange", "columnWidthChange", "customizeColumnsChange", "customizeExportDataChange", "dataRowTemplateChange", "dataSourceChange", "dateSerializationFormatChange", "disabledChange", "editingChange", "elementAttrChange", "errorRowEnabledChange", "exportChange", "filterBuilderChange", "filterBuilderPopupChange", "filterPanelChange", "filterRowChange", "filterSyncEnabledChange", "filterValueChange", "focusedColumnIndexChange", "focusedRowEnabledChange", "focusedRowIndexChange", "focusedRowKeyChange", "focusStateEnabledChange", "groupingChange", "groupPanelChange", "headerFilterChange", "heightChange", "highlightChangesChange", "hintChange", "hoverStateEnabledChange", "keyboardNavigationChange", "keyExprChange", "loadPanelChange", "masterDetailChange", "noDataTextChange", "pagerChange", "pagingChange", "remoteOperationsChange", "renderAsyncChange", "repaintChangesOnlyChange", "rowAlternationEnabledChange", "rowDraggingChange", "rowTemplateChange", "rtlEnabledChange", "scrollingChange", "searchPanelChange", "selectedRowKeysChange", "selectionChange", "selectionFilterChange", "showBordersChange", "showColumnHeadersChange", "showColumnLinesChange", "showRowLinesChange", "sortByGroupSummaryInfoChange", "sortingChange", "stateStoringChange", "summaryChange", "tabIndexChange", "toolbarChange", "twoWayBindingEnabledChange", "visibleChange", "widthChange", "wordWrapEnabledChange"] }, { type: i5__namespace.DxoLoadPanelComponent, selector: "dxo-load-panel", inputs: ["enabled", "height", "indicatorSrc", "shading", "shadingColor", "showIndicator", "showPane", "text", "width"] }, { type: i5__namespace.DxoFilterPanelComponent, selector: "dxo-filter-panel", inputs: ["customizeText", "filterEnabled", "texts", "visible"], outputs: ["filterEnabledChange"] }, { type: i5__namespace.DxoPagingComponent, selector: "dxo-paging", inputs: ["enabled", "pageIndex", "pageSize"], outputs: ["pageIndexChange", "pageSizeChange"] }, { type: i5__namespace.DxoPagerComponent, selector: "dxo-pager", inputs: ["allowedPageSizes", "displayMode", "infoText", "showInfo", "showNavigationButtons", "showPageSizeSelector", "visible"] }, { type: i5__namespace.DxoExportComponent, selector: "dxo-export", inputs: ["backgroundColor", "enabled", "fileName", "formats", "margin", "printingEnabled", "proxyUrl", "svgToCanvas", "allowExportSelectedData", "customizeExcelCell", "excelFilterEnabled", "excelWrapTextEnabled", "ignoreExcelErrors", "texts"] }, { type: i5__namespace.DxoFilterBuilderComponent, selector: "dxo-filter-builder", inputs: ["accessKey", "activeStateEnabled", "allowHierarchicalFields", "customOperations", "disabled", "elementAttr", "fields", "filterOperationDescriptions", "focusStateEnabled", "groupOperationDescriptions", "groupOperations", "height", "hint", "hoverStateEnabled", "maxGroupLevel", "onContentReady", "onDisposing", "onEditorPrepared", "onEditorPreparing", "onInitialized", "onOptionChanged", "onValueChanged", "rtlEnabled", "tabIndex", "value", "visible", "width"], outputs: ["valueChange"] }, { type: i5__namespace.DxoFilterBuilderPopupComponent, selector: "dxo-filter-builder-popup", inputs: ["accessKey", "animation", "closeOnOutsideClick", "container", "contentTemplate", "copyRootClassesToWrapper", "deferRendering", "disabled", "dragAndResizeArea", "dragEnabled", "dragOutsideBoundary", "elementAttr", "focusStateEnabled", "fullScreen", "height", "hideOnOutsideClick", "hideOnParentScroll", "hint", "hoverStateEnabled", "maxHeight", "maxWidth", "minHeight", "minWidth", "onContentReady", "onDisposing", "onHidden", "onHiding", "onInitialized", "onOptionChanged", "onResize", "onResizeEnd", "onResizeStart", "onShowing", "onShown", "onTitleRendered", "position", "resizeEnabled", "restorePosition", "rtlEnabled", "shading", "shadingColor", "showCloseButton", "showTitle", "tabIndex", "title", "titleTemplate", "toolbarItems", "visible", "width", "wrapperAttr"], outputs: ["heightChange", "positionChange", "visibleChange", "widthChange"] }, { type: i5__namespace.DxoFilterRowComponent, selector: "dxo-filter-row", inputs: ["applyFilter", "applyFilterText", "betweenEndText", "betweenStartText", "operationDescriptions", "resetOperationText", "showAllText", "showOperationChooser", "visible"] }, { type: i5__namespace.DxoHeaderFilterComponent, selector: "dxo-header-filter", inputs: ["allowSearch", "dataSource", "groupInterval", "height", "searchMode", "width", "searchTimeout", "texts", "visible", "showRelevantValues"] }, { type: i5__namespace.DxoSelectionComponent, selector: "dxo-selection", inputs: ["allowSelectAll", "deferred", "mode", "selectAllMode", "showCheckBoxesMode", "recursive"] }, { type: i5__namespace.DxiColumnComponent, selector: "dxi-column", inputs: ["alignment", "allowEditing", "allowExporting", "allowFiltering", "allowFixing", "allowGrouping", "allowHeaderFiltering", "allowHiding", "allowReordering", "allowResizing", "allowSearch", "allowSorting", "autoExpandGroup", "buttons", "calculateCellValue", "calculateDisplayValue", "calculateFilterExpression", "calculateGroupValue", "calculateSortValue", "caption", "cellTemplate", "columns", "cssClass", "customizeText", "dataField", "dataType", "editCellTemplate", "editorOptions", "encodeHtml", "falseText", "filterOperations", "filterType", "filterValue", "filterValues", "fixed", "fixedPosition", "format", "formItem", "groupCellTemplate", "groupIndex", "headerCellTemplate", "headerFilter", "hidingPriority", "isBand", "lookup", "minWidth", "name", "ownerBand", "renderAsync", "selectedFilterOperation", "setCellValue", "showEditorAlways", "showInColumnChooser", "showWhenGrouped", "sortIndex", "sortingMethod", "sortOrder", "trueText", "type", "validationRules", "visible", "visibleIndex", "width"], outputs: ["filterValueChange", "filterValuesChange", "groupIndexChange", "selectedFilterOperationChange", "sortIndexChange", "sortOrderChange", "visibleChange", "visibleIndexChange"] }], directives: [{ type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7__namespace.DxTemplateDirective, selector: "[dxTemplate]", inputs: ["dxTemplateOf"] }, { type: i8__namespace.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltipPosition", "matTooltipDisabled", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-grid-list',
                        providers: [GridListService],
                        templateUrl: './grid-list.component.html',
                        styleUrls: ['./grid-list.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.Router }, { type: AuthService }, { type: LocalService }]; }, propDecorators: { dataGrid: [{
                    type: i0.ViewChild,
                    args: [i4.DxDataGridComponent, { static: false }]
                }], dataList: [{
                    type: i0.Input
                }], dataSource: [{
                    type: i0.Input
                }], columns: [{
                    type: i0.Input
                }], updateGrid: [{
                    type: i0.Input
                }], totalCount: [{
                    type: i0.Input
                }], page: [{
                    type: i0.Input
                }], isShow: [{
                    type: i0.Input
                }], remoteOperations: [{
                    type: i0.Input
                }], enableExport: [{
                    type: i0.Input
                }], showHeaderFilter: [{
                    type: i0.Input
                }], exportPageName: [{
                    type: i0.Input
                }], pageSize: [{
                    type: i0.Input
                }], currentPage: [{
                    type: i0.Output
                }], pageIndex: [{
                    type: i0.Output
                }], currentSize: [{
                    type: i0.Output
                }], editTableRow: [{
                    type: i0.Output
                }], viewTableRow: [{
                    type: i0.Output
                }], deleteTableRow: [{
                    type: i0.Output
                }], openExternalLink: [{
                    type: i0.Output
                }], openpopupLink: [{
                    type: i0.Output
                }], routeTo: [{
                    type: i0.Output
                }], openPopup: [{
                    type: i0.Output
                }], duplicateRow: [{
                    type: i0.Output
                }], sortOrder: [{
                    type: i0.Output
                }], filterSearchValue: [{
                    type: i0.Output
                }], filterBuilderPopup: [{
                    type: i0.Output
                }], filterPanel: [{
                    type: i0.Output
                }], multipleFilterValues: [{
                    type: i0.Output
                }], downloadTableRow: [{
                    type: i0.Output
                }], toggleRow: [{
                    type: i0.Output
                }], outComeTableRow: [{
                    type: i0.Output
                }], downloadFormResponseFiles: [{
                    type: i0.Output
                }], deleteFormResponseFiles: [{
                    type: i0.Output
                }], rowSelection: [{
                    type: i0.Output
                }], navigate: [{
                    type: i0.Output
                }], multipleFilterValueToAPI: [{
                    type: i0.Output
                }], selectedRowsData: [{
                    type: i0.Output
                }] } });

    var PermissionDirective = /** @class */ (function () {
        function PermissionDirective(renderer, elementRef, dataStore) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.dataStore = dataStore;
        }
        PermissionDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            var permissions = this.dataStore.state;
            console.log(permissions, 'permissions event scheduler');
            if (permissions) {
                if (!permissions[this.fieldKey]) {
                    var template = this.elementRef.nativeElement;
                    if (template.tagName === 'A') {
                        if (template) {
                            var r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
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
                            var r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                            r.innerHTML = template.innerHTML;
                            r.className = template.className;
                            r.className += ' p-disabled';
                            this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                        }
                    }
                    else {
                        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                        var childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                        childInputNodes.forEach(function (elem) {
                            _this.renderer.setAttribute(elem, 'disabled', 'true');
                        });
                    }
                }
            }
        };
        return PermissionDirective;
    }());
    PermissionDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionDirective, deps: [{ token: i0__namespace.Renderer2 }, { token: i0__namespace.ElementRef }, { token: PermissionStore }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    PermissionDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[fieldKey]'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Renderer2 }, { type: i0__namespace.ElementRef }, { type: PermissionStore }]; }, propDecorators: { fieldKey: [{
                    type: i0.Input
                }] } });

    var ShowFieldDirective = /** @class */ (function () {
        function ShowFieldDirective(templateRef, viewContainer, dataStore) {
            this.templateRef = templateRef;
            this.viewContainer = viewContainer;
            this.dataStore = dataStore;
        }
        ShowFieldDirective.prototype.ngOnInit = function () {
            var _this = this;
            var permissions = this.dataStore.state;
            if (!permissions || !permissions[this.showField]) {
                this.viewContainer.clear();
            }
            else {
                this.viewContainer.createEmbeddedView(this.templateRef);
                var lookupIds = sessionStorage.getItem('LOOKUP_IDS');
                if (lookupIds) {
                    var lookupIdArray_1 = lookupIds.split(',');
                    Object.entries(permissions)
                        .filter(function (item) { return item[0].startsWith('GALKP_'); })
                        .forEach(function (_a) {
                        var e_1, _b;
                        var _c = __read(_a, 2), key = _c[0], value = _c[1];
                        try {
                            for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                                var _value = value_1_1.value;
                                var _key = key.replace('GALKP_', '');
                                if (_key === _this.showField &&
                                    lookupIdArray_1.includes(String(_value['lookupid'])) &&
                                    _value['action'] === 'H') {
                                    _this.viewContainer.clear();
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (value_1_1 && !value_1_1.done && (_b = value_1.return)) _b.call(value_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    });
                }
            }
        };
        return ShowFieldDirective;
    }());
    ShowFieldDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShowFieldDirective, deps: [{ token: i0__namespace.TemplateRef }, { token: i0__namespace.ViewContainerRef }, { token: PermissionStore }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    ShowFieldDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShowFieldDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[showField]'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.TemplateRef }, { type: i0__namespace.ViewContainerRef }, { type: PermissionStore }]; }, propDecorators: { showField: [{
                    type: i0.Input
                }] } });

    var EmailComponent$1 = /** @class */ (function () {
        function EmailComponent(_emailTemplateService, _alertService, formBuilder, _storeservice) {
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
        EmailComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgSubs = this._storeservice.currentStore.subscribe(function (res) {
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.RBACORG = res['RBACORG'];
                    console.log(_this.RBACORG, 'RBACORG Event Scheduler');
                    _this.environment = _this.RBACORG['environment'];
                    _this.orgId = parseInt(_this.RBACORG['orgID']);
                    if (_this.environment) {
                        _this.getAllEmailTemplateCategories();
                        _this.initEditor();
                        _this.setGridColumns();
                    }
                }
            });
        };
        EmailComponent.prototype.ngOnDestroy = function () {
            this.orgSubs.unsubscribe();
        };
        EmailComponent.prototype.setGridColumns = function () {
            this.tableColumns = [
                {
                    columnDef: 'name',
                    header: 'Name',
                    cell: function (element) { return "" + element.name; },
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
                    cell: function (element) { return "" + element.subject; },
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
                    cell: function (element) { return "" + element.created; },
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
                    cell: function (element) { return "" + element.username; },
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
                    cell: function (element) { return "" + element.updated; },
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
        };
        EmailComponent.prototype.editTableRow = function (evt) {
            this.showTemplate = true;
            this.editTemplate(evt.data);
        };
        EmailComponent.prototype.showDeleteModal = function (evt) {
            this.selectedTemplate = evt.data;
            event.stopPropagation();
            $('#Deletetemplate').modal('show');
        };
        EmailComponent.prototype.deleteTemplate = function () {
            this.editStatus = true;
            this.editTemplateId = this.selectedTemplate ? this.selectedTemplate.id : '';
            this.emailTemplateForm.patchValue({
                templatename: this.selectedTemplate.name,
                template: this.selectedTemplate.template,
                id: this.selectedTemplate.id,
                subject: this.selectedTemplate.subject
            });
            this.updateTemplate('DELETE');
        };
        EmailComponent.prototype.formInitialize = function () {
            this.emailTemplateForm = this.formBuilder.group({
                templatename: [''],
                senderEmails: [''],
                template: [''],
                id: [''],
                selectTemplate: [''],
                subject: ['']
            });
        };
        EmailComponent.prototype.editTemplate = function (templateinfo) {
            var _this = this;
            try {
                this.editTemplateId = templateinfo ? templateinfo.id : '';
                this.editStatus = true;
                var editData = this.templateList.filter(function (data) { return data.id === _this.editTemplateId; })[0];
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
                console.log("Error in getTemplateList: " + e);
            }
        };
        EmailComponent.prototype.saveTemplate = function () {
            var _this = this;
            try {
                var getEditorHTML = this.editor.runCommand('gjs-get-inlined-html');
                var requestObject = this.emailTemplateForm.getRawValue();
                if (this.editStatus) {
                    requestObject['emailtemplateid'] = this.editTemplateId;
                }
                requestObject['template'] = getEditorHTML;
                if (requestObject.templatename == '' || requestObject.template == '') {
                    this._alertService.error('Template name and template cannot be empty');
                    return false;
                }
                var inputRequest = {
                    name: requestObject.templatename,
                    template: requestObject.template,
                    category: this.allEmailTemplateCategories.length > 0 ? this.allEmailTemplateCategories[0].id : 1,
                    subject: requestObject.subject
                };
                this._emailTemplateService.createTemplate(inputRequest).subscribe(function (_Response) {
                    _this.editTemplateId = '';
                    _this.backToList();
                    _this._alertService.success('Template created successfully');
                    _this.reset();
                    _this.getEmailTemplateList();
                });
            }
            catch (e) {
                console.log("Error in the restoreTrigger: " + e);
            }
        };
        EmailComponent.prototype.updateTemplate = function (status) {
            var getEditorHTML = this.editor.runCommand('gjs-get-inlined-html');
            var requestObject = this.emailTemplateForm.getRawValue();
            requestObject['template'] = getEditorHTML;
            if (requestObject.templatename === '') {
                this._alertService.error('Template name and template cannot be empty');
                return false;
            }
            var inputRequest = {
                name: requestObject.templatename,
                template: requestObject.template,
                category: this.allEmailTemplateCategories.length > 0 ? this.allEmailTemplateCategories[0].id : 1,
                subject: requestObject.subject,
                deleted: status === 'DELETE'
            };
            this.genericTemplate(inputRequest, status);
        };
        EmailComponent.prototype.genericTemplate = function (modal, status) {
            var _this = this;
            this._emailTemplateService.UpdateDeleteTemplate(this.editTemplateId, modal).subscribe(function (_Response) {
                _this.editTemplateId = '';
                _this.editStatus = false;
                if (status === 'DELETE') {
                    _this._alertService.success('Template deleted successfully');
                }
                else {
                    _this.showTemplate = false;
                    _this._alertService.success('Template updated successfully');
                }
                _this.reset();
                _this.getEmailTemplateList();
            });
        };
        EmailComponent.prototype.reset = function () {
            this.editStatus = false;
            this.editTemplateId = '';
            this.editor.Components.clear();
            this.emailTemplateForm.reset();
        };
        EmailComponent.prototype.backToList = function () {
            this.showTemplate = false;
        };
        EmailComponent.prototype.addTemplate = function () {
            this.showTemplate = true;
        };
        EmailComponent.prototype.initEditor = function () {
            var _this = this;
            var user_access_token = this.currentUser.id;
            var uploadURL = +'/attachments/uploadsFile' + '?access_token=' + this.currentUser.id;
            var unique_timestamp = Math.floor(new Date().getTime() / 1000);
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
                    uploadName: "files_" + unique_timestamp,
                    assets: [],
                    uploadFile: function (e) {
                        var files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
                        var formData = new FormData();
                        for (var i in files) {
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
                            success: function (result) {
                                _this.editor.AssetManager.add(result.s3bucketpathname);
                            }
                        });
                    }
                }
            });
            this.editorInit();
        };
        EmailComponent.prototype.editorInit = function () {
            var _this = this;
            var block_paragraph = {
                label: 'Paragraph',
                category: 'Text',
                content: "<p>\n          {Insert Paragraph Content Here}.\n      </p>",
                select: true
            };
            this.editor.BlockManager.add('paragraph', block_paragraph);
            this.editor.Panels.getButton('options', 'sw-visibility');
            this.editor.RichTextEditor.remove('link');
            this.editor.RichTextEditor.add('dropcap', {
                icon: '<b>D<sup>c</sup></b>',
                attributes: { title: 'Dropcap' },
                result: function (rte) {
                    var component = _this.editor.getSelected();
                    if (component.is('text') && component.getClasses().includes('dropCaps')) {
                        component.replaceWith("" + component.get('content'));
                    }
                    else {
                        var range = rte.selection().getRangeAt(0);
                        var container = range.commonAncestorContainer;
                        if (container.nodeType == 3)
                            container = container.parentNode;
                        if (container.nodeName == 'SPAN' && container.classList.contains('dropCaps')) {
                            var parent = container.parentNode;
                            var content = document.createTextNode(container.innerHTML);
                            // insert all our children before ourselves.
                            parent.insertBefore(content, container);
                            parent.removeChild(container);
                        }
                        else {
                            rte.insertHTML("<span class=\"dropCaps\">" + rte.selection() + "</span>");
                        }
                    }
                }
            });
            this.editor.RichTextEditor.add('superscript', {
                icon: '<b>S<sup>s</sup></b>',
                attributes: { title: 'Superscript' },
                result: function (rte) { return rte.exec('superscript'); }
            });
            this.editor.RichTextEditor.add('subscript', {
                icon: '<b>S<sub>s</sub></b>',
                attributes: { title: 'Subscript' },
                result: function (rte) { return rte.exec('subscript'); }
            });
            this.editor.RichTextEditor.add('hyperlink', {
                icon: '&#128279;',
                attributes: { title: 'Hyperlink' },
                result: function (rte) {
                    var component = _this.editor.getSelected();
                    if (component.is('link')) {
                        component.replaceWith("" + component.get('content'));
                    }
                    else {
                        var range = rte.selection().getRangeAt(0);
                        var container = range.commonAncestorContainer;
                        if (container.nodeType == 3)
                            container = container.parentNode;
                        if (container.nodeName === 'A') {
                            var sel = rte.selection();
                            sel.removeAllRanges();
                            range = document.createRange();
                            range.selectNodeContents(container);
                            sel.addRange(range);
                            rte.exec('unlink');
                        }
                        else {
                            var url = window.prompt('Enter the URL to link to:');
                            if (url)
                                rte.insertHTML("<a class=\"link\" href=\"" + url + "\">" + rte.selection() + "</a>");
                        }
                    }
                }
            });
            this.editor.RichTextEditor.add('indent', {
                icon: '&#8594;',
                attributes: { title: 'Indent' },
                result: function (rte) { return rte.exec('indent'); }
            });
            this.editor.RichTextEditor.add('outdent', {
                icon: '&#8592;',
                attributes: { title: 'Outdent' },
                result: function (rte) { return rte.exec('outdent'); }
            });
            this.editor.RichTextEditor.add('orderedList', {
                icon: '1.',
                attributes: { title: 'Ordered List' },
                result: function (rte) { return rte.exec('insertOrderedList'); }
            });
            this.editor.RichTextEditor.add('unorderedList', {
                icon: '&#8226;',
                attributes: { title: 'Unordered List' },
                result: function (rte) { return rte.exec('insertUnorderedList'); }
            });
            this.editor.RichTextEditor.add('fontName', {
                icon: 'A',
                attributes: { title: 'Font' },
                result: function (rte) { return rte.exec('fontName'); }
            });
        };
        EmailComponent.prototype.getAllEmailTemplateCategories = function () {
            var _this = this;
            this._emailTemplateService.getAllEmailTemplateCategories().subscribe(function (res) {
                if (res) {
                    _this.allEmailTemplateCategories = [];
                    _this.allEmailTemplateCategories = res.data;
                    _this.allEmailTemplateCategories = _this.allEmailTemplateCategories.filter(function (x) { return x.key === 'REFERRAL'; });
                    _this.getEmailTemplateList();
                    _this.getVariableList();
                }
            });
        };
        EmailComponent.prototype.getEmailTemplateList = function () {
            var _this = this;
            var id = this.allEmailTemplateCategories.length > 0 ? this.allEmailTemplateCategories[0].id : 1;
            this._emailTemplateService.getEmailTemplateList(id).subscribe(function (res) {
                if (res) {
                    _this.templateList = [];
                    _this.templateList = res.data.map(function (template) {
                        return Object.assign(Object.assign({}, template), { username: template.user.firstname + " " + template.user.lastname });
                    });
                }
            });
        };
        EmailComponent.prototype.validateTemplateCreate = function () {
            var _this = this;
            var requestObject = this.emailTemplateForm.getRawValue();
            this._alertService.warn('Validate template name inprogress!');
            this._emailTemplateService.checkDuplicateForCreate(requestObject.templatename).subscribe(function (res) {
                if (res) {
                    if (res.data.success === true) {
                        _this.saveTemplate();
                    }
                    else {
                        _this._alertService.error(res.data.message);
                    }
                }
            }, function (_error) {
                _this._alertService.error('Unable to process your request.');
            });
        };
        EmailComponent.prototype.validateTempUpdate = function () {
            var _this = this;
            var requestObject = this.emailTemplateForm.getRawValue();
            this._alertService.warn('Validate template name inprogress!');
            this._emailTemplateService.checkDuplicateForUpdate(requestObject.templatename, requestObject.id).subscribe(function (res) {
                console.log(res);
                if (res) {
                    if (res.data.success === true) {
                        _this.updateTemplate('UPDATE');
                    }
                    else {
                        _this._alertService.error(res.data.message);
                    }
                }
            }, function (_error) {
                _this._alertService.error('Unable to process your request.');
            });
        };
        EmailComponent.prototype.copyText = function (val) {
            var selBox = document.createElement('textarea');
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
        };
        EmailComponent.prototype.getVariableList = function () {
            var _this = this;
            var id = this.allEmailTemplateCategories.length > 0 ? this.allEmailTemplateCategories[0].key : 'REFFERAL';
            this._emailTemplateService.getVariableList(id).subscribe(function (res) {
                if (res) {
                    _this.templatevaliableList = [];
                    _this.templatevaliableList = res.data;
                }
            });
        };
        return EmailComponent;
    }());
    EmailComponent$1.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EmailComponent$1, deps: [{ token: EmailTemplateService }, { token: AlertService }, { token: i3__namespace.FormBuilder }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmailComponent$1.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EmailComponent$1, selector: "pics-email", ngImport: i0__namespace, template: "<app-alert></app-alert>\r\n<div class=\"bg-white p-2 mb-3 mt-2 d-none\">\r\n  <h5 class=\"col font-weight-bold mb-0\">Email</h5>\r\n  <div class=\"col rightBtnSeacrch clearfix text-right\">\r\n    <div\r\n      class=\"notificationICon f-left\"\r\n      data-container=\"body\"\r\n      data-toggle=\"tooltip\"\r\n      data-placement=\"left\"\r\n      title=\"Notification\">\r\n      <span class=\"clsCount\"> {{ totalNotificationCount }} </span>\r\n      <svg\r\n        width=\"13\"\r\n        height=\"20\"\r\n        viewBox=\"0 0 16 20\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        class=\"bellBtn\"\r\n        data-test-img=\"bell_btn\">\r\n        <path\r\n          d=\"M7 .5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.525A4.994 4.994 0 0 1 12.502 3 7.512 7.512 0 0 1 14 7.503V14l2 1v2H0v-2l2-1V7.504C2 5.88 2.527 4.3 3.5 3.001A5.002 5.002 0 0 1 7 1.025V.5zM6 18h4a2 2 0 1 1-4 0z\"\r\n          fill-rule=\"evenodd\"></path>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-design\" [hidden]=\"showTemplate\">\r\n  <div class=\"strip_head def-addIcon toggleleft d-flex justify-content-between px-3\">\r\n    <div class=\"f-left\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-primary btn-icon my-2\"\r\n        title=\"Add New Page\"\r\n        (click)=\"addTemplate()\"\r\n        pRipple>\r\n        <em class=\"pi pi-plus font-weight-bold\"></em>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mb-4\">\r\n      <p-card styleClass=\"rbac-card gridview w-100\">\r\n        <app-grid-list\r\n          [dataList]=\"templateList\"\r\n          [updateGrid]=\"updateGrid\"\r\n          [columns]=\"tableColumns\"\r\n          [totalCount]=\"totalcount\"\r\n          (editTableRow)=\"editTableRow($event)\"\r\n          (deleteTableRow)=\"showDeleteModal($event)\"\r\n        >\r\n        </app-grid-list>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" [hidden]=\"!showTemplate\">\r\n  <div class=\"col-md-9 pt-10 mb-4\">\r\n    <p-card styleClass=\"d-block h-100\" [style]=\"{ width: '100%' }\">\r\n      <div class=\"row textLeft m-t-10\" [formGroup]=\"emailTemplateForm\">\r\n          <div class=\"d-flex justify-content-between align-items-center col-12 my-3\" >\r\n              <h6 class=\"font-weight-bold mb-0 fromTitle\">Email Template</h6>\r\n              <button type=\"button\" class=\"btn btn-cancel\" (click)=\"backToList()\">\r\n                Back \r\n              </button>\r\n            </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col mb-3\">\r\n              <label for=\"template-name\" class=\"intake-form-labels\">Template Name</label>\r\n              <div class=\"col-12 px-0\">\r\n                <input\r\n                  id=\"template\"\r\n                  aria-labelledby=\"template\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"templatename\"\r\n                  fieldKey=\"EMA_TEM_TEMPLATE_NAME\"\r\n                  type=\"email\"\r\n                  placeholder=\"Enter Template Name\"\r\n                  pInputText />\r\n              </div>\r\n            </div>\r\n            <div class=\"col mb-3\">\r\n              <label for=\"template-name\" class=\"intake-form-labels\">Subject</label>\r\n              <div class=\"col-12 px-0\">\r\n                <input\r\n                  id=\"subject\"\r\n                  class=\"form-control\"\r\n                  fieldKey=\"EMA_TEM_SUBJECT\"\r\n                  type=\"text\"\r\n                  placeholder=\"Enter subject here\"\r\n                  formControlName=\"subject\"\r\n                  pInputText />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"pt-10\">\r\n            <label> Template Editor </label>\r\n          </div>\r\n          <div id=\"emailEditor\"></div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 text-right mt-4\">\r\n          <button\r\n            class=\"btn btn-md bg-white text-primary border-primary btncancel mr-2\"\r\n            fieldKey=\"EMA_TEM_CANCEL\"\r\n            (click)=\"reset()\">\r\n            Clear\r\n          </button>\r\n          <button\r\n            class=\"mb-0 btn btn-primary btncommon\"\r\n            fieldKey=\"EMA_TEM_SAVE\"\r\n            (click)=\"editStatus ? validateTempUpdate() : validateTemplateCreate()\">\r\n            {{ editStatus ? 'Update' : 'Save' }}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </p-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-3 pl-0 pt-10 mb-4\">\r\n    <p-card styleClass=\"d-block h-100 w-100\">\r\n      <div class=\"clearfix pt-10\">\r\n        <div class=\"attach-tb table-theme table-responsive notificationConfig\">\r\n          <label for=\"client-name\" class=\"intake-form-labels\">Variable Name</label>\r\n          <table aria-describedby=\"Variable Name\" class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Variable</th>\r\n                <th scope=\"col\">Copy</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let template of templatevaliableList\">\r\n                <td style=\"cursor: pointer\">{{ template.value }}</td>\r\n                <td>\r\n                  <em class=\"pi pi-copy\" *showField=\"'EMA_TEM_VARIABLE_COPY'\" (click)=\"copyText(template.value)\"></em>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <ng-template #noRecordFound>\r\n          <div class=\"claerfix\">\r\n            <div class=\"text-center no-record-img mt-5\">\r\n              <p class=\"m-0\">No Record Found</p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </p-card>\r\n  </div>\r\n</div>\r\n<div class=\"modal\" id=\"Deletetemplate\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Email Template</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure you want to delete Email Template?\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"deleteTemplate()\">\r\n            Delete\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n\r\n", styles: [".m-10{margin:10px}.config-action{margin:10px}.notificationConfig .assesmentActive{background-color:#f0f8ff!important}.m-b-25{margin-bottom:25px}.email-template-config button{font-size:1.5em!important}.fixedBtnsHoveAction{width:48px;position:fixed;bottom:20px;right:20px;z-index:999}.fixedBtnsHoveAction .triangeBtn{width:48px;height:48px;cursor:pointer;position:relative;border-radius:50%}.fixedBtnsHoveAction .triangeBtn .beforeActionICon{width:100%;height:100%;left:-3px;position:relative;z-index:1;transition:all .3s linear 0s;opacity:1;overflow:hidden;border-radius:50%}.fixedBtnsHoveAction .triangeBtn .beforeActionICon .connectBtn{width:100%;height:100%;fill:var(--primary)}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon{position:absolute;width:100%;height:100%;top:0;left:-3px;z-index:999;background-color:var(--primary);transition:all .3s linear 0s;opacity:0;cursor:pointer;overflow:hidden;border-radius:50%;padding:5px}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon .chatIconNew{width:100%;height:100%;fill:var(--primary)}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon .logoIconChat{width:100%;height:100%;background-color:#fff;border-radius:50%;padding:3px;overflow:hidden}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon .logoIconChat img{width:100%;height:100%;display:block}.fixedBtnsHoveAction .notificationICon{width:48px;height:48px;left:-3px;position:relative;background-color:var(--primary);border-radius:50%;overflow:hidden;margin-bottom:0;transition:all .2s linear 0s;opacity:0;cursor:pointer}.fixedBtnsHoveAction .notificationICon .bellBtn{width:20px;height:20px;margin:0 auto;top:13px;display:block;position:relative;fill:#fff;animation:tada 1.5s ease infinite}.fixedBtnsHoveAction:hover .triangeBtn .beforeActionICon{opacity:0}.fixedBtnsHoveAction:hover .triangeBtn .afterChangeChatIcon{opacity:1}.fixedBtnsHoveAction:hover .notificationICon{margin-bottom:15px;opacity:1;animation:bounce .54s ease;animation-delay:.15s}.topNavigation{width:100%;border-bottom:solid 1px #ddd;box-shadow:10px 2px 10px #0000001a;position:relative;z-index:99;height:50px;padding:0 15px}.topNavigation .leftFlowMenu{padding:15px 15px 15px 0}.topNavigation .leftFlowMenu .pageIcon{height:20px;width:auto;display:inline-block}.topNavigation .leftFlowMenu span,.topNavigation .leftFlowMenu a{display:inline-block;padding:0 6px;line-height:20px;color:#555;font-size:14px;font-weight:400;text-transform:uppercase}.topNavigation .leftFlowMenu span.pageName,.topNavigation .leftFlowMenu a.pageName{color:#222;padding-left:0}.topNavigation .leftFlowMenu span.active,.topNavigation .leftFlowMenu a.active{color:var(--primary)}.topNavigation .rightSearch{padding:6px 0 6px 15px}.topNavigation .rightSearch .search-box{position:relative}.topNavigation .rightSearch .search-box input{line-height:36px;padding:0 15px 0 40px;border:0;border-bottom:1px solid #ddd;display:block;width:100%}.topNavigation .rightSearch .search-box input:focus{border:0;border-bottom:solid 1px #ddd;outline:none}.topNavigation .rightSearch .search-box button,.topNavigation .rightSearch .search-box button:focus{width:36px;height:36px;line-height:36px;color:#777;position:absolute;top:1px;left:-39px;background-color:transparent;font-size:17px;border:0}.topNavigation .rightSearch .notificationICon{width:38px;height:38px;position:relative;background-color:#f7fcff;border-radius:50%;display:inline-block;cursor:pointer}.topNavigation .rightSearch .notificationICon .bellBtn{width:20px;height:20px;margin:0 auto;top:8px;display:block;position:relative;fill:var(--primary)}.topNavigation .rightSearch .notificationICon .clsCount+.bellBtn{animation:tada 1.5s ease infinite}.topNavigation .rightSearch .notificationICon .clsCount{position:absolute;top:-6px;right:0px;width:18px;height:18px;border-radius:50%;text-align:center;line-height:17px;color:var(--primary);font-size:12px;font-weight:700}.table{border:1px solid #ddd;border-color:var(--table-border)}.table thead th{padding:5px;background:var(--background-color);color:var(--text-dark);border-width:1px;border-color:var(--table-border);font-size:var(--base-font-size)}.table tbody td{padding:5px;vertical-align:middle;font-size:var(--base-font-size);color:var(--text-dark);border-color:var(--table-border)}.table thead th:last-child,.table tbody td:last-child{width:110px}.table .addBtnsNew{padding:0 10px}#emailEditor{height:935px!important;border:1px solid var(--table-border)}.p-button-icon-only{padding:.1rem 0}:host ::ng-deep .p-dropdown .p-dropdown-panel{background:var(--bg-light)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item{color:var(--text-dark)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover{background:var(--primary);color:var(--hover-text)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:focus{background:var(--primary);color:var(--hover-text)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:focus{background:var(--primary);color:var(--hover-text)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items p-dropdownitem:hover,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items p-dropdownitem:focus{background:var(--primary);color:var(--hover-text)}@media print{.hideForPrint{display:none}}:host ::ng-deep .gjs-editor{font-family:\"Roboto\",sans-serif!important}:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{display:flex;align-items:center;justify-content:center}:host ::ng-deep .gjs-editor .gjs-block{display:flex;align-items:center;justify-content:center}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-family:\"Roboto\",sans-serif!important}@media screen and (min-width: 1024px){:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{font-size:var(--base-font-size)}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:45px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:7px}}@media screen and (max-width: 1280px){:host ::ng-deep .gjs-editor .gjs-pn-panel .gjs-blocks-cs .gjs-block{width:100%;min-height:60px;margin:5px 5px 0}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:45px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:10px}}@media screen and (min-width: 1530px){:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{font-size:var(--font-17)}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:52px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:9px}}@media screen and (min-width: 1600px){:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{font-size:var(--font-16)}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:52px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:10px}}:host ::ng-deep .page-design .gridview.p-card .card-body,:host ::ng-deep .page-design .gridview.p-card .p-card-body,:host ::ng-deep .page-design .gridview.card .card-body,:host ::ng-deep .page-design .gridview.card .p-card-body{padding-top:0;padding-bottom:0;background:var(--bg-light)}:host ::ng-deep .page-design .p-card-content{padding:0}:host ::ng-deep .page-design .dropdown-menu,:host ::ng-deep .page-design .p-component{font-size:var(--base-font-size)}:host ::ng-deep .page-design .dropdown-item.active,:host ::ng-deep .page-design .dropdown-item:active{background:transparent;color:#16181b}:host ::ng-deep .page-design .checkbox label{cursor:pointer}:host ::ng-deep .page-design .dropdown-item:focus{background:#431e8d12}:host ::ng-deep .page-design .dropdown-item:hover{background:#431e8d12}:host ::ng-deep .page-design .checkbox label,:host ::ng-deep .page-design .radio label{min-height:inherit}:host ::ng-deep .page-design .filter-menu{padding:8px;border:1px solid #a7a7a7;max-height:180px;overflow-y:auto}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar{width:4px!important;height:4px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-track{background:#f6f6f6!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-corner{background:#f6f6f6!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb{background:#2c2863!important;border-radius:2px!important}:host ::ng-deep .page-design .filter-menu::-webkit-scrollbar-thumb:hover{background:#3e397e!important}:host ::ng-deep .page-design .p-checkbox{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box{width:16px;height:16px}:host ::ng-deep .page-design .p-checkbox .p-checkbox-box .p-checkbox-icon{font-size:9px;font-weight:600}.def-addIcon{position:relative;margin-bottom:-50px;z-index:1;top:0px;float:left}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i6__namespace$1.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: GridListComponent, selector: "app-grid-list", inputs: ["dataList", "dataSource", "columns", "updateGrid", "totalCount", "page", "isShow", "remoteOperations", "enableExport", "showHeaderFilter", "exportPageName", "pageSize"], outputs: ["currentPage", "pageIndex", "currentSize", "editTableRow", "viewTableRow", "deleteTableRow", "openExternalLink", "openpopupLink", "routeTo", "openPopup", "duplicateRow", "sortOrder", "filterSearchValue", "filterBuilderPopup", "filterPanel", "multipleFilterValues", "downloadTableRow", "toggleRow", "outComeTableRow", "downloadFormResponseFiles", "deleteFormResponseFiles", "rowSelection", "navigate", "multipleFilterValueToAPI", "selectedRowsData"] }, { type: i8__namespace$1.ConfirmDialog, selector: "p-confirmDialog", inputs: ["header", "icon", "message", "style", "styleClass", "maskStyleClass", "acceptIcon", "acceptLabel", "acceptAriaLabel", "acceptVisible", "rejectIcon", "rejectLabel", "rejectAriaLabel", "rejectVisible", "acceptButtonStyleClass", "rejectButtonStyleClass", "closeOnEscape", "dismissableMask", "blockScroll", "rtl", "closable", "appendTo", "key", "autoZIndex", "baseZIndex", "transitionOptions", "focusTrap", "defaultFocus", "breakpoints", "visible", "position"], outputs: ["onHide"] }], directives: [{ type: i9__namespace.Ripple, selector: "[pRipple]" }, { type: i3__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i11__namespace.InputText, selector: "[pInputText]" }, { type: i6__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: ShowFieldDirective, selector: "[showField]", inputs: ["showField"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EmailComponent$1, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'pics-email',
                        templateUrl: './email.component.html',
                        styleUrls: ['./email.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: EmailTemplateService }, { type: AlertService }, { type: i3__namespace.FormBuilder }, { type: DataStoreService }]; } });

    var EmailComponent = /** @class */ (function () {
        function EmailComponent(permissionStore, _storeservice) {
            this.permissionStore = permissionStore;
            this._storeservice = _storeservice;
            this.RBACORG = new RBACINFO();
        }
        EmailComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.emailEvent.subscribe(function (val) {
                _this.RBACORG = val.RBACORG;
                _this.PERMISSION = val.PERMISSION;
                _this._storeservice.setData('RBACORG', _this.RBACORG);
                _this.permissionStore.setStore(_this.PERMISSION);
            });
        };
        return EmailComponent;
    }());
    EmailComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EmailComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmailComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EmailComponent, selector: "email", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", emailEvent: "emailEvent" }, ngImport: i0__namespace, template: "\n    <pics-email></pics-email>\n  ", isInline: true, components: [{ type: EmailComponent$1, selector: "pics-email" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EmailComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'email',
                        template: "\n    <pics-email></pics-email>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                    type: i0.Input
                }], PERMISSION: [{
                    type: i0.Input
                }], emailEvent: [{
                    type: i0.Input
                }] } });

    var DirectivesModule = /** @class */ (function () {
        function DirectivesModule() {
        }
        return DirectivesModule;
    }());
    DirectivesModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DirectivesModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [i6.CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
    DirectivesModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, imports: [[i6.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [PermissionDirective, ShowFieldDirective],
                        imports: [i6.CommonModule],
                        exports: [PermissionDirective, ShowFieldDirective]
                    }]
            }] });

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        return AlertModule;
    }());
    AlertModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AlertModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, declarations: [AlertComponent], imports: [i6.CommonModule], exports: [AlertComponent] });
    AlertModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, imports: [[i6.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i6.CommonModule],
                        declarations: [AlertComponent],
                        exports: [AlertComponent]
                    }]
            }] });

    var MaterialUIModule = /** @class */ (function () {
        function MaterialUIModule() {
        }
        return MaterialUIModule;
    }());
    MaterialUIModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MaterialUIModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MaterialUIModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MaterialUIModule, imports: [i6.CommonModule,
            bottomSheet.MatBottomSheetModule,
            button.MatButtonModule,
            card.MatCardModule,
            datepicker.MatDatepickerModule,
            icon.MatIconModule,
            input.MatInputModule,
            core.MatNativeDateModule,
            menu.MatMenuModule,
            radio.MatRadioModule,
            select.MatSelectModule,
            stepper.MatStepperModule,
            i8.MatTooltipModule,
            dialog.MatDialogModule,
            tabs.MatTabsModule,
            checkbox.MatCheckboxModule,
            slideToggle.MatSlideToggleModule,
            sort.MatSortModule,
            table.MatTableModule,
            formField.MatFormFieldModule], exports: [i6.CommonModule,
            bottomSheet.MatBottomSheetModule,
            button.MatButtonModule,
            card.MatCardModule,
            datepicker.MatDatepickerModule,
            icon.MatIconModule,
            input.MatInputModule,
            core.MatNativeDateModule,
            menu.MatMenuModule,
            radio.MatRadioModule,
            select.MatSelectModule,
            stepper.MatStepperModule,
            i8.MatTooltipModule,
            dialog.MatDialogModule,
            tabs.MatTabsModule,
            checkbox.MatCheckboxModule,
            slideToggle.MatSlideToggleModule,
            sort.MatSortModule,
            table.MatTableModule,
            formField.MatFormFieldModule] });
    MaterialUIModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MaterialUIModule, imports: [[
                i6.CommonModule,
                bottomSheet.MatBottomSheetModule,
                button.MatButtonModule,
                card.MatCardModule,
                datepicker.MatDatepickerModule,
                icon.MatIconModule,
                input.MatInputModule,
                core.MatNativeDateModule,
                menu.MatMenuModule,
                radio.MatRadioModule,
                select.MatSelectModule,
                stepper.MatStepperModule,
                i8.MatTooltipModule,
                dialog.MatDialogModule,
                tabs.MatTabsModule,
                checkbox.MatCheckboxModule,
                slideToggle.MatSlideToggleModule,
                sort.MatSortModule,
                table.MatTableModule,
                formField.MatFormFieldModule
            ], i6.CommonModule,
            bottomSheet.MatBottomSheetModule,
            button.MatButtonModule,
            card.MatCardModule,
            datepicker.MatDatepickerModule,
            icon.MatIconModule,
            input.MatInputModule,
            core.MatNativeDateModule,
            menu.MatMenuModule,
            radio.MatRadioModule,
            select.MatSelectModule,
            stepper.MatStepperModule,
            i8.MatTooltipModule,
            dialog.MatDialogModule,
            tabs.MatTabsModule,
            checkbox.MatCheckboxModule,
            slideToggle.MatSlideToggleModule,
            sort.MatSortModule,
            table.MatTableModule,
            formField.MatFormFieldModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MaterialUIModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [
                            i6.CommonModule,
                            bottomSheet.MatBottomSheetModule,
                            button.MatButtonModule,
                            card.MatCardModule,
                            datepicker.MatDatepickerModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            core.MatNativeDateModule,
                            menu.MatMenuModule,
                            radio.MatRadioModule,
                            select.MatSelectModule,
                            stepper.MatStepperModule,
                            i8.MatTooltipModule,
                            dialog.MatDialogModule,
                            tabs.MatTabsModule,
                            checkbox.MatCheckboxModule,
                            slideToggle.MatSlideToggleModule,
                            sort.MatSortModule,
                            table.MatTableModule,
                            formField.MatFormFieldModule
                        ],
                        exports: [
                            i6.CommonModule,
                            bottomSheet.MatBottomSheetModule,
                            button.MatButtonModule,
                            card.MatCardModule,
                            datepicker.MatDatepickerModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            core.MatNativeDateModule,
                            menu.MatMenuModule,
                            radio.MatRadioModule,
                            select.MatSelectModule,
                            stepper.MatStepperModule,
                            i8.MatTooltipModule,
                            dialog.MatDialogModule,
                            tabs.MatTabsModule,
                            checkbox.MatCheckboxModule,
                            slideToggle.MatSlideToggleModule,
                            sort.MatSortModule,
                            table.MatTableModule,
                            formField.MatFormFieldModule
                        ]
                    }]
            }] });

    var FilterPipe = /** @class */ (function () {
        function FilterPipe() {
        }
        FilterPipe.prototype.transform = function (value, input) {
            if (input) {
                return value.filter(function (val) { return val.toLowerCase().indexOf(input.toLowerCase()) >= 0; });
            }
            else {
                return value;
            }
        };
        return FilterPipe;
    }());
    FilterPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FilterPipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    FilterPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FilterPipe, name: "FilterPipe" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FilterPipe, decorators: [{
                type: i0.Pipe,
                args: [{
                        name: 'FilterPipe'
                    }]
            }] });

    var MaskPipe = /** @class */ (function () {
        function MaskPipe() {
        }
        MaskPipe.prototype.transform = function (value, showSsnMask) {
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
                var cleaned = ('' + value).replace(/\D/g, '');
                var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
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
        };
        return MaskPipe;
    }());
    MaskPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MaskPipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    MaskPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MaskPipe, name: "ssnMask" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MaskPipe, decorators: [{
                type: i0.Pipe,
                args: [{ name: 'ssnMask' }]
            }] });

    var SharedPipesModule = /** @class */ (function () {
        function SharedPipesModule() {
        }
        return SharedPipesModule;
    }());
    SharedPipesModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SharedPipesModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SharedPipesModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SharedPipesModule, declarations: [MaskPipe, FilterPipe], imports: [i6.CommonModule], exports: [MaskPipe, FilterPipe] });
    SharedPipesModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SharedPipesModule, providers: [MaskPipe, FilterPipe], imports: [[i6.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SharedPipesModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i6.CommonModule],
                        declarations: [MaskPipe, FilterPipe],
                        exports: [MaskPipe, FilterPipe],
                        providers: [MaskPipe, FilterPipe]
                    }]
            }] });

    var GridListModule = /** @class */ (function () {
        function GridListModule() {
        }
        return GridListModule;
    }());
    GridListModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    GridListModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListModule, declarations: [GridListComponent], imports: [i6.CommonModule,
            ngxPagination.NgxPaginationModule,
            i4.DxDataGridModule,
            MaterialUIModule,
            SharedPipesModule,
            i3.FormsModule,
            i3.ReactiveFormsModule,
            ngxfUploader.NgxfUploaderModule, i1__namespace$2.NgxMaskModule], exports: [GridListComponent] });
    GridListModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListModule, imports: [[
                i6.CommonModule,
                ngxPagination.NgxPaginationModule,
                i4.DxDataGridModule,
                MaterialUIModule,
                SharedPipesModule,
                i3.FormsModule,
                i3.ReactiveFormsModule,
                ngxfUploader.NgxfUploaderModule,
                i1$2.NgxMaskModule.forRoot()
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [GridListComponent],
                        imports: [
                            i6.CommonModule,
                            ngxPagination.NgxPaginationModule,
                            i4.DxDataGridModule,
                            MaterialUIModule,
                            SharedPipesModule,
                            i3.FormsModule,
                            i3.ReactiveFormsModule,
                            ngxfUploader.NgxfUploaderModule,
                            i1$2.NgxMaskModule.forRoot()
                        ],
                        exports: [GridListComponent]
                    }]
            }] });

    var PicsEmailModule = /** @class */ (function () {
        function PicsEmailModule() {
        }
        return PicsEmailModule;
    }());
    PicsEmailModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsEmailModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PicsEmailModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsEmailModule, declarations: [EmailComponent$1], imports: [i6.CommonModule,
            i3.FormsModule,
            i3.ReactiveFormsModule,
            ngBootstrap.NgbModule,
            tabmenu.TabMenuModule,
            tabview.TabViewModule,
            treeselect.TreeSelectModule,
            i1.HttpClientModule,
            checkbox$1.CheckboxModule,
            dropdown.DropdownModule,
            i6$1.CardModule,
            i8$1.ConfirmDialogModule,
            accordion.AccordionModule,
            message.MessageModule,
            table$1.TableModule,
            i11.InputTextModule,
            calendar.CalendarModule,
            editor.EditorModule,
            fieldset.FieldsetModule,
            button$1.ButtonModule,
            radiobutton.RadioButtonModule,
            inputtextarea.InputTextareaModule,
            inputmask.InputMaskModule,
            steps.StepsModule,
            toast.ToastModule,
            i9.RippleModule,
            avatar.AvatarModule,
            badge.BadgeModule,
            multiselect.MultiSelectModule,
            inputswitch.InputSwitchModule,
            progressspinner.ProgressSpinnerModule,
            speeddial.SpeedDialModule,
            orderlist.OrderListModule,
            fileupload.FileUploadModule,
            dialog$1.DialogModule,
            password.PasswordModule,
            knob.KnobModule,
            sidebar.SidebarModule,
            contextmenu.ContextMenuModule,
            confirmpopup.ConfirmPopupModule,
            DirectivesModule,
            AlertModule,
            GridListModule], exports: [EmailComponent$1] });
    PicsEmailModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsEmailModule, imports: [[
                i6.CommonModule,
                i3.FormsModule,
                i3.ReactiveFormsModule,
                ngBootstrap.NgbModule,
                tabmenu.TabMenuModule,
                tabview.TabViewModule,
                treeselect.TreeSelectModule,
                i1.HttpClientModule,
                checkbox$1.CheckboxModule,
                dropdown.DropdownModule,
                i6$1.CardModule,
                i8$1.ConfirmDialogModule,
                accordion.AccordionModule,
                message.MessageModule,
                table$1.TableModule,
                i11.InputTextModule,
                calendar.CalendarModule,
                editor.EditorModule,
                fieldset.FieldsetModule,
                button$1.ButtonModule,
                radiobutton.RadioButtonModule,
                inputtextarea.InputTextareaModule,
                inputmask.InputMaskModule,
                steps.StepsModule,
                toast.ToastModule,
                i9.RippleModule,
                avatar.AvatarModule,
                badge.BadgeModule,
                multiselect.MultiSelectModule,
                inputswitch.InputSwitchModule,
                progressspinner.ProgressSpinnerModule,
                speeddial.SpeedDialModule,
                orderlist.OrderListModule,
                fileupload.FileUploadModule,
                dialog$1.DialogModule,
                password.PasswordModule,
                knob.KnobModule,
                sidebar.SidebarModule,
                contextmenu.ContextMenuModule,
                confirmpopup.ConfirmPopupModule,
                DirectivesModule,
                AlertModule,
                GridListModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsEmailModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            EmailComponent$1
                        ],
                        imports: [
                            i6.CommonModule,
                            i3.FormsModule,
                            i3.ReactiveFormsModule,
                            ngBootstrap.NgbModule,
                            tabmenu.TabMenuModule,
                            tabview.TabViewModule,
                            treeselect.TreeSelectModule,
                            i1.HttpClientModule,
                            checkbox$1.CheckboxModule,
                            dropdown.DropdownModule,
                            i6$1.CardModule,
                            i8$1.ConfirmDialogModule,
                            accordion.AccordionModule,
                            message.MessageModule,
                            table$1.TableModule,
                            i11.InputTextModule,
                            calendar.CalendarModule,
                            editor.EditorModule,
                            fieldset.FieldsetModule,
                            button$1.ButtonModule,
                            radiobutton.RadioButtonModule,
                            inputtextarea.InputTextareaModule,
                            inputmask.InputMaskModule,
                            steps.StepsModule,
                            toast.ToastModule,
                            i9.RippleModule,
                            avatar.AvatarModule,
                            badge.BadgeModule,
                            multiselect.MultiSelectModule,
                            inputswitch.InputSwitchModule,
                            progressspinner.ProgressSpinnerModule,
                            speeddial.SpeedDialModule,
                            orderlist.OrderListModule,
                            fileupload.FileUploadModule,
                            dialog$1.DialogModule,
                            password.PasswordModule,
                            knob.KnobModule,
                            sidebar.SidebarModule,
                            contextmenu.ContextMenuModule,
                            confirmpopup.ConfirmPopupModule,
                            DirectivesModule,
                            AlertModule,
                            GridListModule
                        ],
                        exports: [
                            EmailComponent$1
                        ],
                        schemas: [i0.NO_ERRORS_SCHEMA, i0.CUSTOM_ELEMENTS_SCHEMA],
                    }]
            }] });

    var CardiEmailModule = /** @class */ (function () {
        function CardiEmailModule() {
        }
        return CardiEmailModule;
    }());
    CardiEmailModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiEmailModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CardiEmailModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiEmailModule, declarations: [EmailComponent], imports: [PicsEmailModule], exports: [EmailComponent] });
    CardiEmailModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiEmailModule, providers: [EmailTemplateService, i1.HttpClient, HttpService, AlertService, api.ConfirmationService, PermissionStore, DataStoreService, AuthService], imports: [[
                PicsEmailModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiEmailModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            EmailComponent
                        ],
                        imports: [
                            PicsEmailModule
                        ],
                        exports: [
                            EmailComponent
                        ],
                        providers: [EmailTemplateService, i1.HttpClient, HttpService, AlertService, api.ConfirmationService, PermissionStore, DataStoreService, AuthService]
                    }]
            }] });

    /*
     * Public API Surface of email
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CardiEmailModule = CardiEmailModule;
    exports.EmailComponent = EmailComponent;
    exports.EmailService = EmailService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pics-module-email.umd.js.map
