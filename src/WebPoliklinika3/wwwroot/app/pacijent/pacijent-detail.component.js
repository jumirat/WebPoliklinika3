System.register(['@angular/core', './pacijent', '@angular/router-deprecated', './pacijent.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pacijent_1, router_deprecated_1, pacijent_service_1;
    var PacijentDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pacijent_1_1) {
                pacijent_1 = pacijent_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (pacijent_service_1_1) {
                pacijent_service_1 = pacijent_service_1_1;
            }],
        execute: function() {
            PacijentDetailComponent = (function () {
                function PacijentDetailComponent(pacijentService, routeParams) {
                    this.pacijentService = pacijentService;
                    this.routeParams = routeParams;
                    this.close = new core_1.EventEmitter();
                    this.navigated = false; // true if navigated here
                }
                PacijentDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.routeParams.get('id') !== null) {
                        var id = +this.routeParams.get('id');
                        this.navigated = true;
                        this.pacijentService.getPacijent(id)
                            .then(function (pacijent) { return _this.pacijent = pacijent; });
                    }
                    else {
                        this.navigated = false;
                        this.pacijent = new pacijent_1.Pacijent();
                    }
                };
                PacijentDetailComponent.prototype.save = function () {
                    var _this = this;
                    this.pacijentService
                        .save(this.pacijent)
                        .then(function (pacijent) {
                        _this.pacijent = pacijent; // saved patient, w/ id if new
                        _this.goBack(pacijent);
                    })
                        .catch(function (error) { return _this.error = error; }); // TODO: Display error message
                };
                PacijentDetailComponent.prototype.goBack = function (savedPacijent) {
                    if (savedPacijent === void 0) { savedPacijent = null; }
                    this.close.emit(savedPacijent);
                    if (this.navigated) {
                        window.history.back();
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', pacijent_1.Pacijent)
                ], PacijentDetailComponent.prototype, "pacijent", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], PacijentDetailComponent.prototype, "close", void 0);
                PacijentDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-patient-detail',
                        templateUrl: '/app/pacijent/pacijent-detail.component.html',
                        styleUrls: ['app/pacijent/pacijent-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [pacijent_service_1.PacijentService, router_deprecated_1.RouteParams])
                ], PacijentDetailComponent);
                return PacijentDetailComponent;
            }());
            exports_1("PacijentDetailComponent", PacijentDetailComponent);
        }
    }
});
