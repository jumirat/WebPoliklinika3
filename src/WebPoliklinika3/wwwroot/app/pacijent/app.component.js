/*
 * See here if using Typescript 1.8.34 extensions or below, there's a bug that needs some manual fixing:
 * https://github.com/Microsoft/TypeScript/issues/8518
 */
System.register(['@angular/core', './pacijent.service', './pacijenti.component', '@angular/router-deprecated', './dashboard.component', './pacijent-detail.component'], function(exports_1, context_1) {
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
    var core_1, pacijent_service_1, pacijenti_component_1, router_deprecated_1, dashboard_component_1, pacijent_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pacijent_service_1_1) {
                pacijent_service_1 = pacijent_service_1_1;
            },
            function (pacijenti_component_1_1) {
                pacijenti_component_1 = pacijenti_component_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (pacijent_detail_component_1_1) {
                pacijent_detail_component_1 = pacijent_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Lista pacijenata';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <h1>{{title}}</h1>\n  <nav>\n    <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n    <a [routerLink]=\"['Pacijenti']\">Pacijenti</a>\n  </nav>\n  <router-outlet></router-outlet>\n  ",
                        directives: [
                            router_deprecated_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            router_deprecated_1.ROUTER_PROVIDERS,
                            pacijent_service_1.PacijentService
                        ],
                        styleUrls: ['app/pacijent/app.component.css']
                    }),
                    router_deprecated_1.RouteConfig([
                        {
                            path: '/pacijenti',
                            name: 'Pacijenti',
                            component: pacijenti_component_1.PacijentiComponent
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/detail/:id',
                            name: 'PacijentDetail',
                            component: pacijent_detail_component_1.PacijentDetailComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
