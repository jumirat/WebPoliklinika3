﻿import { Component, OnInit  } from '@angular/core';
import { Pacijent } from './pacijent';
import { PacijentService } from './pacijent.service';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-dashboard',
    templateUrl: '/app/pacijent/dashboard.component.html',
    styleUrls: ['app/pacijent/dashboard.component.css']
})


export class DashboardComponent implements OnInit {
    pacijenti: Pacijent[] = [];
    constructor(private router: Router, private pacijentService: PacijentService) { }
    ngOnInit() {
        this.pacijentService.getPacijenti()
            .then(pacijenti => this.pacijenti = pacijenti);
    }
    gotoDetail(pacijent: Pacijent) {
        let link = ['PacijentDetail', { id: pacijent.id }];
        this.router.navigate(link);
    }
}
