System.register(['@angular/core', './pacijent.service', '@angular/router-deprecated', './pacijent-detail.component'], function(exports_1, context_1) {
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
    var core_1, pacijent_service_1, router_deprecated_1, pacijent_detail_component_1;
    var PacijentiComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pacijent_service_1_1) {
                pacijent_service_1 = pacijent_service_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (pacijent_detail_component_1_1) {
                pacijent_detail_component_1 = pacijent_detail_component_1_1;
            }],
        execute: function() {
            PacijentiComponent = (function () {
                function PacijentiComponent(router, pacijentService) {
                    this.router = router;
                    this.pacijentService = pacijentService;
                    this.addingPacijent = false;
                }
                PacijentiComponent.prototype.ngOnInit = function () {
                    this.getPacijenti();
                };
                PacijentiComponent.prototype.getPacijenti = function () {
                    var _this = this;
                    this.pacijentService.getPacijenti().then(function (pacijenti) { return _this.pacijenti = pacijenti; });
                };
                PacijentiComponent.prototype.onSelect = function (pacijent) {
                    this.selectedPacijent = pacijent;
                    this.addingPacijent = false;
                };
                PacijentiComponent.prototype.gotoDetail = function () {
                    this.router.navigate(['PacijentDetail', { id: this.selectedPacijent.id }]);
                };
                PacijentiComponent.prototype.addPacijent = function () {
                    this.addingPacijent = true;
                    this.selectedPacijent = null;
                };
                PacijentiComponent.prototype.close = function (savedPacijent) {
                    this.addingPacijent = false;
                    if (savedPacijent) {
                        this.getPacijenti();
                    }
                };
                PacijentiComponent.prototype.delete = function (pacijent, event) {
                    var _this = this;
                    event.stopPropagation();
                    this.pacijentService
                        .delete(pacijent)
                        .then(function (res) {
                        _this.pacijenti = _this.pacijenti.filter(function (h) { return h !== pacijent; });
                        if (_this.selectedPacijent === pacijent) {
                            _this.selectedPacijent = null;
                        }
                    })
                        .catch(function (error) { return _this.error = error; }); // TODO: Display error message
                };
                PacijentiComponent = __decorate([
                    core_1.Component({
                        selector: 'my-patients',
                        templateUrl: '/app/pacijent/pacijenti.component.html',
                        styleUrls: ['app/pacijent/pacijenti.component.css'],
                        directives: [pacijent_detail_component_1.PacijentDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, pacijent_service_1.PacijentService])
                ], PacijentiComponent);
                return PacijentiComponent;
            }());
            exports_1("PacijentiComponent", PacijentiComponent);
        }
    }
});
