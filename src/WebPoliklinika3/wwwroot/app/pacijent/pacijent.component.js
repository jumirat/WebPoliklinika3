System.register(['@angular/core', '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1;
    var HeroesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(router, heroService) {
                    this.router = router;
                    this.heroService = heroService;
                    this.addingHero = false;
                }
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                HeroesComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                    this.addingHero = false;
                };
                HeroesComponent.prototype.gotoDetail = function () {
                    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
                };
                HeroesComponent.prototype.addHero = function () {
                    this.addingHero = true;
                    this.selectedHero = null;
                };
                HeroesComponent.prototype.close = function (savedHero) {
                    this.addingHero = false;
                    if (savedHero) {
                        this.getHeroes();
                    }
                };
                HeroesComponent.prototype.delete = function (hero, event) {
                    var _this = this;
                    event.stopPropagation();
                    this.heroService
                        .delete(hero)
                        .then(function (res) {
                        _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
                        if (_this.selectedHero === hero) {
                            _this.selectedHero = null;
                        }
                    })
                        .catch(function (error) { return _this.error = error; }); // TODO: Display error message
                };
                HeroesComponent.prototype.resetHeroes = function () {
                    var _this = this;
                    this.heroService.resetHeroes()
                        .then(function () { return _this.getHeroes(); });
                };
                HeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-patients',
                        templateUrl: '/app/pacijenti.component.html',
                        styleUrls: ['app/heroes.component.css'],
                        directives: [HeroDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, Object])
                ], HeroesComponent);
                return HeroesComponent;
            }());
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
