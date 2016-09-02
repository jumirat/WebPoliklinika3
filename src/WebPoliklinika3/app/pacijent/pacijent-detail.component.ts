import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pacijent } from './pacijent';
import { RouteParams } from '@angular/router-deprecated';
import { PacijentService } from './pacijent.service';

@Component({
    selector: 'my-patient-detail',
    templateUrl: '/app/pacijent/pacijent-detail.component.html',
    styleUrls: ['app/pacijent/pacijent-detail.component.css']
})

export class PacijentDetailComponent implements OnInit {
    @Input() pacijent: Pacijent;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    constructor(
        private pacijentService: PacijentService,
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        if (this.routeParams.get('id') !== null) {
            let id = +this.routeParams.get('id');
            this.navigated = true;
            this.pacijentService.getPacijent(id)
                .then(pacijent => this.pacijent = pacijent);
        } else {
            this.navigated = false;
            this.pacijent = new Pacijent();
        }
    }

    save() {
        this.pacijentService
            .save(this.pacijent)
            .then(pacijent => {
                this.pacijent = pacijent; // saved patient, w/ id if new
                this.goBack(pacijent);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack(savedPacijent: Pacijent = null) {
        this.close.emit(savedPacijent);
        if (this.navigated) { window.history.back(); }
    }
}