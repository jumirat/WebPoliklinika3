/*
 * See here if using Typescript 1.8.34 extensions or below, there's a bug that needs some manual fixing:
 * https://github.com/Microsoft/TypeScript/issues/8518
 */

import { Component }       from '@angular/core';
import { PacijentService }     from './pacijent.service';
import { PacijentiComponent } from './pacijenti.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent } from './dashboard.component';
import { PacijentDetailComponent } from './pacijent-detail.component';

@Component({
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Pacijenti']">Pacijenti</a>
  </nav>
  <router-outlet></router-outlet>
  `,
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        ROUTER_PROVIDERS,
        PacijentService
    ],
    styleUrls: ['app/pacijent/app.component.css']
})
@RouteConfig([
    {
        path: '/pacijenti',
        name: 'Pacijenti',
        component: PacijentiComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'PacijentDetail',
        component: PacijentDetailComponent
    }
])
export class AppComponent {
    title = 'Lista pacijenata';
}
