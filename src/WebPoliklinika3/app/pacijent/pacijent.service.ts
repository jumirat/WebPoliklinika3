import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Pacijent } from './pacijent';

@Injectable()
export class PacijentService {
    private pacijentiUrl = 'api/Pacients';  // URL to web api

    constructor(private http: Http) { }

    getPacijenti(): Promise<Pacijent[]> {
        return this.http.get(this.pacijentiUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getPacijent(id: number) {
        return this.getPacijenti()
            .then(pacijenti => pacijenti.filter(pacijent => pacijent.id === id)[0]);
    }

    // Add new Patient
    private post(pacijent: Pacijent): Promise<Pacijent> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.pacijentiUrl, JSON.stringify(pacijent), { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    // Update existing Patient
    private put(pacijent: Pacijent) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.pacijentiUrl}/${pacijent.id}`;

        return this.http
            .put(url, JSON.stringify(pacijent), { headers: headers })
            .toPromise()
            .then(() => pacijent)
            .catch(this.handleError);
    }

    // Delete existing Patient
    delete(pacijent: Pacijent) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.pacijentiUrl}/${pacijent.id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    save(pacijent: Pacijent): Promise<Pacijent> {
        if (pacijent.id) {
            return this.put(pacijent);
        }
        return this.post(pacijent);
    }

    resetPacijenti() {
        var url = `${this.pacijentiUrl}/reset`;
        return this.http.post(url, null)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}