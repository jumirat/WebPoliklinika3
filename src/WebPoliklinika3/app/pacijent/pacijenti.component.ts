import { Component, OnInit } from '@angular/core';
import { Pacijent } from './pacijent';
import { PacijentService } from './pacijent.service';
import { Router } from '@angular/router-deprecated';
import { PacijentDetailComponent } from './pacijent-detail.component';

@Component({
    selector: 'my-patients',
    templateUrl: '/app/pacijenti.component.html',
    styleUrls: ['app/pacijenti.component.css'],
    directives: [PacijentDetailComponent]
})

export class PacijentiComponent implements OnInit {
    pacijenti: Pacijent[];
    selectedPacijent: Pacijent;
    addingPacijent = false;
    error: any;
    constructor(private router: Router, private pacijentService: PacijentService) { }
    ngOnInit() {
        this.getPacijenti();
    }
    getPacijenti() {
        this.pacijentService.getPacijenti().then(pacijenti => this.pacijenti = pacijenti);
    }

    onSelect(pacijent: Pacijent) {
        this.selectedPacijent = pacijent;
        this.addingPacijent = false;
    }

    gotoDetail() {
        this.router.navigate(['PacijentDetail', { id: this.selectedPacijent.id }]);
    }
    addPAcijent() {
        this.addingPacijent = true;
        this.selectedPacijent = null;
    }

    close(savedPacijent: Pacijent) {
        this.addingPacijent = false;
        if (savedPacijent) { this.getPacijenti(); }
    }

    delete(pacijent: Pacijent, event: any) {
        event.stopPropagation();
        this.pacijentService
            .delete(pacijent)
            .then(res => {
                this.pacijenti = this.pacijenti.filter(h => h !== pacijent);
                if (this.selectedPacijent === pacijent) { this.selectedPacijent = null; }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    resetPacijenti() {
        this.pacijentService.resetPacijenti()
            .then(() => this.getPacijenti());
    }
}
