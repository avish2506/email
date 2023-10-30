(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common/http'), require('rxjs/add/operator/map'), require('rxjs/internal/observable/throwError'), require('rxjs/operators'), require('@angular/router'), require('@angular/forms'), require('primeng/api'), require('@angular/common'), require('primeng/card'), require('primeng/dropdown'), require('primeng/confirmdialog'), require('primeng/inputtext'), require('primeng/button'), require('primeng/ripple'), require('primeng/tooltip'), require('@ng-bootstrap/ng-bootstrap'), require('primeng/accordion'), require('primeng/avatar'), require('primeng/badge'), require('primeng/calendar'), require('primeng/checkbox'), require('primeng/confirmpopup'), require('primeng/contextmenu'), require('primeng/dialog'), require('primeng/editor'), require('primeng/fieldset'), require('primeng/fileupload'), require('primeng/inputmask'), require('primeng/inputswitch'), require('primeng/inputtextarea'), require('primeng/knob'), require('primeng/message'), require('primeng/multiselect'), require('primeng/orderlist'), require('primeng/password'), require('primeng/progressspinner'), require('primeng/radiobutton'), require('primeng/sidebar'), require('primeng/speeddial'), require('primeng/steps'), require('primeng/table'), require('primeng/tabmenu'), require('primeng/tabview'), require('primeng/toast'), require('primeng/treeselect')) :
    typeof define === 'function' && define.amd ? define('@pics-module/email', ['exports', '@angular/core', 'rxjs', '@angular/common/http', 'rxjs/add/operator/map', 'rxjs/internal/observable/throwError', 'rxjs/operators', '@angular/router', '@angular/forms', 'primeng/api', '@angular/common', 'primeng/card', 'primeng/dropdown', 'primeng/confirmdialog', 'primeng/inputtext', 'primeng/button', 'primeng/ripple', 'primeng/tooltip', '@ng-bootstrap/ng-bootstrap', 'primeng/accordion', 'primeng/avatar', 'primeng/badge', 'primeng/calendar', 'primeng/checkbox', 'primeng/confirmpopup', 'primeng/contextmenu', 'primeng/dialog', 'primeng/editor', 'primeng/fieldset', 'primeng/fileupload', 'primeng/inputmask', 'primeng/inputswitch', 'primeng/inputtextarea', 'primeng/knob', 'primeng/message', 'primeng/multiselect', 'primeng/orderlist', 'primeng/password', 'primeng/progressspinner', 'primeng/radiobutton', 'primeng/sidebar', 'primeng/speeddial', 'primeng/steps', 'primeng/table', 'primeng/tabmenu', 'primeng/tabview', 'primeng/toast', 'primeng/treeselect'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["pics-module"] = global["pics-module"] || {}, global["pics-module"].email = {}), global.ng.core, global.rxjs, global.ng.common.http, global.rxjs["add/operator/map"], global.rxjs["internal/observable/throwError"], global.rxjs.operators, global.ng.router, global.ng.forms, global.i4, global.ng.common, global.i7, global.i8, global.i9, global.i11, global.i12, global.i13, global.i14, global.ngBootstrap, global.accordion, global.avatar, global.badge, global.calendar, global.checkbox, global.confirmpopup, global.contextmenu, global.dialog, global.editor, global.fieldset, global.fileupload, global.inputmask, global.inputswitch, global.inputtextarea, global.knob, global.message, global.multiselect, global.orderlist, global.password, global.progressspinner, global.radiobutton, global.sidebar, global.speeddial, global.steps, global.table, global.tabmenu, global.tabview, global.toast, global.treeselect));
})(this, (function (exports, i0, rxjs, i1, map, throwError, operators, i1$1, i3, i4, i15, i7, i8, i9, i11, i12, i13, i14, ngBootstrap, accordion, avatar, badge, calendar, checkbox, confirmpopup, contextmenu, dialog, editor, fieldset, fileupload, inputmask, inputswitch, inputtextarea, knob, message, multiselect, orderlist, password, progressspinner, radiobutton, sidebar, speeddial, steps, table, tabmenu, tabview, toast, treeselect) { 'use strict';

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
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i15__namespace = /*#__PURE__*/_interopNamespace(i15);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i11__namespace = /*#__PURE__*/_interopNamespace(i11);
    var i12__namespace = /*#__PURE__*/_interopNamespace(i12);
    var i13__namespace = /*#__PURE__*/_interopNamespace(i13);
    var i14__namespace = /*#__PURE__*/_interopNamespace(i14);

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
            CreateTemplate: '/solution/emailtemplate/create',
            UpdateDeleteTemplate: '/solution/emailtemplate/',
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
    AlertComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0__namespace, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i15__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, decorators: [{
                type: i0.Component,
                args: [{
                        // moduleId: module.id,
                        selector: 'app-alert',
                        templateUrl: 'alert.component.html',
                        styleUrls: ['./alert.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: AlertService }]; } });

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

    var EmailComponent$1 = /** @class */ (function () {
        function EmailComponent(_emailTemplateService, _alertService, formBuilder, confirmationService, _storeservice) {
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
                    }
                }
            });
        };
        EmailComponent.prototype.ngOnDestroy = function () {
            this.orgSubs.unsubscribe();
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
                var editData = this.templateList.filter(function (data) { return data.emailtemplateid === _this.editTemplateId; })[0];
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
            if (requestObject.templatename == '' || requestObject.template == '') {
                this._alertService.error('Template name and template cannot be empty');
                return false;
            }
            var inputRequest = {
                name: requestObject.templatename,
                template: requestObject.template,
                category: this.allEmailTemplateCategories.length > 0 ? this.allEmailTemplateCategories[0].id : 1,
                subject: requestObject.subject,
                deleted: status === 'DELETE' ? true : false
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
            var block_address = {
                label: 'Address',
                category: 'Text',
                attributes: { title: 'Address' },
                content: "<div id=\"i59h\" style=\"box-sizing: border-box; padding: 10px;\">Address\n      </div>\n      <div id=\"ihtj\" style=\"box-sizing: border-box; padding: 10px;\">Street: {{street}\n      </div>\n      <div id=\"im5z\" style=\"box-sizing: border-box; padding: 10px;\">City: {{city}\n      </div>",
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
                        var win = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
                        var img = win.document.createElement('div');
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
                    _this.templateList = res.data;
                    _this.templateList = _this.templateList.map(function (x) {
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
        };
        EmailComponent.prototype.deleteTemplate = function () {
            var _this = this;
            this.editStatus = true;
            this.confirmationService.confirm({
                message: 'Are you sure that you want to delete?',
                accept: function () {
                    _this.updateTemplate('DELETE');
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
                _this._alertService.error('Enter required details.');
            });
        };
        EmailComponent.prototype.validateTempUpdate = function () {
            var _this = this;
            var requestObject = this.emailTemplateForm.getRawValue();
            this._alertService.warn('Validate template name inprogress!');
            this._emailTemplateService.checkDuplicateForUpdate(requestObject.templatename, requestObject.id).subscribe(function (res) {
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
    EmailComponent$1.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EmailComponent$1, deps: [{ token: EmailTemplateService }, { token: AlertService }, { token: i3__namespace.FormBuilder }, { token: i4__namespace.ConfirmationService }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    EmailComponent$1.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EmailComponent$1, selector: "pics-email", ngImport: i0__namespace, template: "<app-alert></app-alert>\r\n<div class=\"bg-white p-2 mb-3 mt-2 d-none\">\r\n  <h5 class=\"col font-weight-bold mb-0\">Email</h5>\r\n  <div class=\"col rightBtnSeacrch clearfix text-right\">\r\n    <div\r\n      class=\"notificationICon f-left\"\r\n      data-container=\"body\"\r\n      data-toggle=\"tooltip\"\r\n      data-placement=\"left\"\r\n      title=\"Notification\">\r\n      <span class=\"clsCount\"> {{ totalNotificationCount }} </span>\r\n      <svg\r\n        width=\"13\"\r\n        height=\"20\"\r\n        viewBox=\"0 0 16 20\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        class=\"bellBtn\"\r\n        data-test-img=\"bell_btn\">\r\n        <path\r\n          d=\"M7 .5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.525A4.994 4.994 0 0 1 12.502 3 7.512 7.512 0 0 1 14 7.503V14l2 1v2H0v-2l2-1V7.504C2 5.88 2.527 4.3 3.5 3.001A5.002 5.002 0 0 1 7 1.025V.5zM6 18h4a2 2 0 1 1-4 0z\"\r\n          fill-rule=\"evenodd\"></path>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-9 pt-10 mb-4\">\r\n    <p-card styleClass=\"d-block h-100\" [style]=\"{ width: '100%' }\">\r\n      <div class=\"row textLeft m-t-10\" [formGroup]=\"emailTemplateForm\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col mb-3\">\r\n              <label for=\"template-name\" class=\"intake-form-labels\">Template Name <span class=\"requiredfield text-danger\">*</span></label>\r\n              <div class=\"col-12 px-0\">\r\n                <input\r\n                  id=\"template\"\r\n                  aria-labelledby=\"template\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"templatename\"\r\n                  fieldKey=\"EMA_TEM_TEMPLATE_NAME\"\r\n                  type=\"email\"\r\n                  placeholder=\"Enter Template Name\"\r\n                  pInputText />\r\n              </div>\r\n            </div>\r\n            <div class=\"col mb-3\">\r\n              <label for=\"template-list\" class=\"intake-form-labels\">Template List</label>\r\n              <div class=\"col-12 px-0\">\r\n                <div class=\"p-inputgroup\">\r\n                  <p-dropdown\r\n                  inputId=\"template-list\"\r\n                    [options]=\"templateList\"\r\n                    styleClass=\"w-100\"\r\n                    fieldKey=\"EMA_TEM_TEMPLATE_LIST\"\r\n                    placeholder=\"Select Template\"\r\n                    optionLabel=\"templatename\"\r\n                    formControlName=\"selectTemplate\"\r\n                    (onChange)=\"editTemplate($event.value)\">\r\n                  </p-dropdown>\r\n                  <button\r\n                    type=\"button\"\r\n                    aria-label=\"Add-template\"\r\n                    pButton\r\n                    pRipple\r\n                    icon=\"pi pi-plus\"\r\n                    class=\"ml-2\"\r\n                    fieldKey=\"EMA_TEM_ADD_NEW_TEMPLATE\"\r\n                    styleClass=\"p-button-success ml-2\"\r\n                    pTooltip=\"Add New Template\"\r\n                    tooltipPosition=\"top\"\r\n                    (click)=\"reset()\"></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col mb-3\">\r\n              <label for=\"subject\" class=\"intake-form-labels\">Subject</label>\r\n              <div class=\"col-12 px-0\">\r\n                <input\r\n                  id=\"subject\"\r\n                  class=\"form-control\"\r\n                  fieldKey=\"EMA_TEM_SUBJECT\"\r\n                  type=\"text\"\r\n                  placeholder=\"Enter subject here\"\r\n                  formControlName=\"subject\"\r\n                  pInputText />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"pt-10\">\r\n            <label> Template Editor <span class=\"requiredfield text-danger\">*</span></label>\r\n          </div>\r\n          <div id=\"emailEditor\"></div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 text-right mt-4\">\r\n          <button\r\n            class=\"btn btn-md bg-white text-primary border-primary btncancel mr-2\"\r\n            fieldKey=\"EMA_TEM_CANCEL\"\r\n            (click)=\"reset()\">\r\n            Cancel\r\n          </button>\r\n          <button\r\n            class=\"btn btn-md btn-primary btncommon mr-2\"\r\n            fieldKey=\"EMA_TEM_DELETE\"\r\n            *ngIf=\"editStatus\"\r\n            (click)=\"deleteTemplate()\">\r\n            Delete\r\n          </button>\r\n          <button\r\n            class=\"mb-0 btn btn-md btn-primary btncommon\"\r\n            fieldKey=\"EMA_TEM_SAVE\"\r\n            (click)=\"editStatus ? validateTempUpdate() : validateTemplateCreate()\">\r\n            {{ editStatus ? 'Update' : 'Save' }}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </p-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-3 pl-0 pt-10 mb-4\">\r\n    <p-card styleClass=\"d-block h-100 w-100\">\r\n      <div class=\"clearfix pt-10\">\r\n        <div class=\"attach-tb table-theme table-responsive notificationConfig\">\r\n          <label for=\"client-name\" class=\"intake-form-labels\">Variable Name</label>\r\n          <table aria-describedby=\"Variable Name\" class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">Variable</th>\r\n                <th scope=\"col\">Copy</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let template of templatevaliableList; let i = index\">\r\n                <td style=\"cursor: pointer\">{{ template.value }}</td>\r\n                <td>\r\n                  <em class=\"pi pi-copy\" (click)=\"copyText(template.value)\"></em>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <ng-template #noRecordFound>\r\n          <div class=\"claerfix\">\r\n            <div class=\"text-center no-record-img mt-5\">\r\n              <p class=\"m-0\">No Record Found</p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </p-card>\r\n  </div>\r\n</div>\r\n<p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n", styles: [".m-10{margin:10px}.config-action{margin:10px}.notificationConfig .assesmentActive{background-color:#f0f8ff!important}.m-b-25{margin-bottom:25px}.email-template-config button{font-size:1.5em!important}.fixedBtnsHoveAction{width:48px;position:fixed;bottom:20px;right:20px;z-index:999}.fixedBtnsHoveAction .triangeBtn{width:48px;height:48px;cursor:pointer;position:relative;border-radius:50%}.fixedBtnsHoveAction .triangeBtn .beforeActionICon{width:100%;height:100%;left:-3px;position:relative;z-index:1;transition:all .3s linear 0s;opacity:1;overflow:hidden;border-radius:50%}.fixedBtnsHoveAction .triangeBtn .beforeActionICon .connectBtn{width:100%;height:100%;fill:var(--primary)}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon{position:absolute;width:100%;height:100%;top:0;left:-3px;z-index:999;background-color:var(--primary);transition:all .3s linear 0s;opacity:0;cursor:pointer;overflow:hidden;border-radius:50%;padding:5px}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon .chatIconNew{width:100%;height:100%;fill:var(--primary)}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon .logoIconChat{width:100%;height:100%;background-color:#fff;border-radius:50%;padding:3px;overflow:hidden}.fixedBtnsHoveAction .triangeBtn .afterChangeChatIcon .logoIconChat img{width:100%;height:100%;display:block}.fixedBtnsHoveAction .notificationICon{width:48px;height:48px;left:-3px;position:relative;background-color:var(--primary);border-radius:50%;overflow:hidden;margin-bottom:0;transition:all .2s linear 0s;opacity:0;cursor:pointer}.fixedBtnsHoveAction .notificationICon .bellBtn{width:20px;height:20px;margin:0 auto;top:13px;display:block;position:relative;fill:#fff;animation:tada 1.5s ease infinite}.fixedBtnsHoveAction:hover .triangeBtn .beforeActionICon{opacity:0}.fixedBtnsHoveAction:hover .triangeBtn .afterChangeChatIcon{opacity:1}.fixedBtnsHoveAction:hover .notificationICon{margin-bottom:15px;opacity:1;animation:bounce .54s ease;animation-delay:.15s}.topNavigation{width:100%;border-bottom:solid 1px #ddd;box-shadow:10px 2px 10px #0000001a;position:relative;z-index:99;height:50px;padding:0 15px}.topNavigation .leftFlowMenu{padding:15px 15px 15px 0}.topNavigation .leftFlowMenu .pageIcon{height:20px;width:auto;display:inline-block}.topNavigation .leftFlowMenu span,.topNavigation .leftFlowMenu a{display:inline-block;padding:0 6px;line-height:20px;color:#555;font-size:14px;font-weight:400;text-transform:uppercase}.topNavigation .leftFlowMenu span.pageName,.topNavigation .leftFlowMenu a.pageName{color:#222;padding-left:0}.topNavigation .leftFlowMenu span.active,.topNavigation .leftFlowMenu a.active{color:var(--primary)}.topNavigation .rightSearch{padding:6px 0 6px 15px}.topNavigation .rightSearch .search-box{position:relative}.topNavigation .rightSearch .search-box input{line-height:36px;padding:0 15px 0 40px;border:0;border-bottom:1px solid #ddd;display:block;width:100%}.topNavigation .rightSearch .search-box input:focus{border:0;border-bottom:solid 1px #ddd;outline:none}.topNavigation .rightSearch .search-box button,.topNavigation .rightSearch .search-box button:focus{width:36px;height:36px;line-height:36px;color:#777;position:absolute;top:1px;left:-39px;background-color:transparent;font-size:17px;border:0}.topNavigation .rightSearch .notificationICon{width:38px;height:38px;position:relative;background-color:#f7fcff;border-radius:50%;display:inline-block;cursor:pointer}.topNavigation .rightSearch .notificationICon .bellBtn{width:20px;height:20px;margin:0 auto;top:8px;display:block;position:relative;fill:var(--primary)}.topNavigation .rightSearch .notificationICon .clsCount+.bellBtn{animation:tada 1.5s ease infinite}.topNavigation .rightSearch .notificationICon .clsCount{position:absolute;top:-6px;right:0px;width:18px;height:18px;border-radius:50%;text-align:center;line-height:17px;color:var(--primary);font-size:12px;font-weight:700}.table{border:1px solid #ddd;border-color:var(--table-border)}.table thead th{padding:5px;background:var(--background-color);color:var(--text-dark);border-width:1px;border-color:var(--table-border);font-size:var(--base-font-size)}.table tbody td{padding:5px;vertical-align:middle;font-size:var(--font-14);color:var(--text-dark);border-color:var(--table-border)}.table thead th:last-child,.table tbody td:last-child{width:110px}.table .addBtnsNew{padding:0 10px}#emailEditor{height:935px!important;border:1px solid var(--table-border)}.p-button-icon-only{padding:.1rem 0}:host ::ng-deep .p-dropdown .p-dropdown-panel{background:var(--bg-light)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item{color:var(--text-dark)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover{background:var(--primary);color:var(--hover-text)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:focus{background:var(--primary);color:var(--hover-text)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:focus{background:var(--primary);color:var(--hover-text)}:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items p-dropdownitem:hover,:host ::ng-deep .p-dropdown .p-dropdown-panel .p-dropdown-items p-dropdownitem:focus{background:var(--primary);color:var(--hover-text)}@media print{.hideForPrint{display:none}}:host ::ng-deep .gjs-editor{font-family:\"Roboto\",sans-serif!important}:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{display:flex;align-items:center;justify-content:center}:host ::ng-deep .gjs-editor .gjs-block{display:flex;align-items:center;justify-content:center}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-family:\"Roboto\",sans-serif!important}@media screen and (min-width: 1024px){:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{font-size:var(--base-font-size)}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:45px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:7px}}@media screen and (max-width: 1280px){:host ::ng-deep .gjs-editor .gjs-pn-panel .gjs-blocks-cs .gjs-block{width:100%;min-height:60px;margin:5px 5px 0}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:45px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:10px}}@media screen and (min-width: 1530px){:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{font-size:var(--font-17)}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:52px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:9px}}@media screen and (min-width: 1600px){:host ::ng-deep .gjs-editor .gjs-pn-buttons .fa{font-size:var(--font-16)}:host ::ng-deep .gjs-editor .gjs-fonts:before{font-size:52px}:host ::ng-deep .gjs-editor .gjs-block .gjs-block-label{font-size:10px}}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i7__namespace.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i8__namespace.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }, { type: i9__namespace.ConfirmDialog, selector: "p-confirmDialog", inputs: ["header", "icon", "message", "style", "styleClass", "maskStyleClass", "acceptIcon", "acceptLabel", "acceptAriaLabel", "acceptVisible", "rejectIcon", "rejectLabel", "rejectAriaLabel", "rejectVisible", "acceptButtonStyleClass", "rejectButtonStyleClass", "closeOnEscape", "dismissableMask", "blockScroll", "rtl", "closable", "appendTo", "key", "autoZIndex", "baseZIndex", "transitionOptions", "focusTrap", "defaultFocus", "breakpoints", "visible", "position"], outputs: ["onHide"] }], directives: [{ type: i3__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i11__namespace.InputText, selector: "[pInputText]" }, { type: i12__namespace.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading"] }, { type: i13__namespace.Ripple, selector: "[pRipple]" }, { type: i14__namespace.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { type: i15__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i15__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EmailComponent$1, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'pics-email',
                        templateUrl: './email.component.html',
                        styleUrls: ['./email.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: EmailTemplateService }, { type: AlertService }, { type: i3__namespace.FormBuilder }, { type: i4__namespace.ConfirmationService }, { type: DataStoreService }]; } });

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

    var DirectivesModule = /** @class */ (function () {
        function DirectivesModule() {
        }
        return DirectivesModule;
    }());
    DirectivesModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DirectivesModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [i15.CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
    DirectivesModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, imports: [[i15.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [PermissionDirective, ShowFieldDirective],
                        imports: [i15.CommonModule],
                        exports: [PermissionDirective, ShowFieldDirective]
                    }]
            }] });

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        return AlertModule;
    }());
    AlertModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AlertModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, declarations: [AlertComponent], imports: [i15.CommonModule], exports: [AlertComponent] });
    AlertModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, imports: [[i15.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i15.CommonModule],
                        declarations: [AlertComponent],
                        exports: [AlertComponent]
                    }]
            }] });

    var PicsEmailModule = /** @class */ (function () {
        function PicsEmailModule() {
        }
        return PicsEmailModule;
    }());
    PicsEmailModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsEmailModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PicsEmailModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsEmailModule, declarations: [EmailComponent$1], imports: [i15.CommonModule,
            i3.FormsModule,
            i3.ReactiveFormsModule,
            ngBootstrap.NgbModule,
            tabmenu.TabMenuModule,
            tabview.TabViewModule,
            treeselect.TreeSelectModule,
            i1.HttpClientModule,
            checkbox.CheckboxModule,
            i8.DropdownModule,
            i7.CardModule,
            i9.ConfirmDialogModule,
            accordion.AccordionModule,
            message.MessageModule,
            table.TableModule,
            i11.InputTextModule,
            calendar.CalendarModule,
            editor.EditorModule,
            fieldset.FieldsetModule,
            i12.ButtonModule,
            radiobutton.RadioButtonModule,
            inputtextarea.InputTextareaModule,
            inputmask.InputMaskModule,
            steps.StepsModule,
            toast.ToastModule,
            i13.RippleModule,
            avatar.AvatarModule,
            badge.BadgeModule,
            multiselect.MultiSelectModule,
            inputswitch.InputSwitchModule,
            progressspinner.ProgressSpinnerModule,
            speeddial.SpeedDialModule,
            orderlist.OrderListModule,
            fileupload.FileUploadModule,
            dialog.DialogModule,
            password.PasswordModule,
            knob.KnobModule,
            sidebar.SidebarModule,
            contextmenu.ContextMenuModule,
            confirmpopup.ConfirmPopupModule,
            DirectivesModule,
            AlertModule], exports: [EmailComponent$1] });
    PicsEmailModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsEmailModule, imports: [[
                i15.CommonModule,
                i3.FormsModule,
                i3.ReactiveFormsModule,
                ngBootstrap.NgbModule,
                tabmenu.TabMenuModule,
                tabview.TabViewModule,
                treeselect.TreeSelectModule,
                i1.HttpClientModule,
                checkbox.CheckboxModule,
                i8.DropdownModule,
                i7.CardModule,
                i9.ConfirmDialogModule,
                accordion.AccordionModule,
                message.MessageModule,
                table.TableModule,
                i11.InputTextModule,
                calendar.CalendarModule,
                editor.EditorModule,
                fieldset.FieldsetModule,
                i12.ButtonModule,
                radiobutton.RadioButtonModule,
                inputtextarea.InputTextareaModule,
                inputmask.InputMaskModule,
                steps.StepsModule,
                toast.ToastModule,
                i13.RippleModule,
                avatar.AvatarModule,
                badge.BadgeModule,
                multiselect.MultiSelectModule,
                inputswitch.InputSwitchModule,
                progressspinner.ProgressSpinnerModule,
                speeddial.SpeedDialModule,
                orderlist.OrderListModule,
                fileupload.FileUploadModule,
                dialog.DialogModule,
                password.PasswordModule,
                knob.KnobModule,
                sidebar.SidebarModule,
                contextmenu.ContextMenuModule,
                confirmpopup.ConfirmPopupModule,
                DirectivesModule,
                AlertModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsEmailModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            EmailComponent$1
                        ],
                        imports: [
                            i15.CommonModule,
                            i3.FormsModule,
                            i3.ReactiveFormsModule,
                            ngBootstrap.NgbModule,
                            tabmenu.TabMenuModule,
                            tabview.TabViewModule,
                            treeselect.TreeSelectModule,
                            i1.HttpClientModule,
                            checkbox.CheckboxModule,
                            i8.DropdownModule,
                            i7.CardModule,
                            i9.ConfirmDialogModule,
                            accordion.AccordionModule,
                            message.MessageModule,
                            table.TableModule,
                            i11.InputTextModule,
                            calendar.CalendarModule,
                            editor.EditorModule,
                            fieldset.FieldsetModule,
                            i12.ButtonModule,
                            radiobutton.RadioButtonModule,
                            inputtextarea.InputTextareaModule,
                            inputmask.InputMaskModule,
                            steps.StepsModule,
                            toast.ToastModule,
                            i13.RippleModule,
                            avatar.AvatarModule,
                            badge.BadgeModule,
                            multiselect.MultiSelectModule,
                            inputswitch.InputSwitchModule,
                            progressspinner.ProgressSpinnerModule,
                            speeddial.SpeedDialModule,
                            orderlist.OrderListModule,
                            fileupload.FileUploadModule,
                            dialog.DialogModule,
                            password.PasswordModule,
                            knob.KnobModule,
                            sidebar.SidebarModule,
                            contextmenu.ContextMenuModule,
                            confirmpopup.ConfirmPopupModule,
                            DirectivesModule,
                            AlertModule
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
    CardiEmailModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiEmailModule, providers: [EmailTemplateService, i1.HttpClient, HttpService, AlertService, i4.ConfirmationService, PermissionStore, DataStoreService], imports: [[
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
                        providers: [EmailTemplateService, i1.HttpClient, HttpService, AlertService, i4.ConfirmationService, PermissionStore, DataStoreService]
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
