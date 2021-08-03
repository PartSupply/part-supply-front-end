import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { switchMap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(
        private httpClient: HttpClient,
    ) {}

    public async post<T>(url: string, payload: any): Promise<T> {
        return await this.httpClient.post<T>(
            `${environment.baseUrl}/${url}`,
            payload
        ).toPromise();
    }

    public async get<T>(url: string): Promise<T> {
        const user: any = JSON.parse(localStorage.getItem('user'));
        const headerDict = {
            'Authorization': `Bearer ${user.access_token}`,
        };
        const requestOptions = {
            headers: new HttpHeaders(headerDict),
        };
        return await this.httpClient.get<T>(
            `${environment.baseUrl}/${url}`,
            requestOptions,
        ).toPromise();
    }
}