import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(
        private httpClient: HttpClient,
    ) {}

    public post<T>(url: string, payload: any): Observable<T> {
        return this.httpClient.post<T>(
            `${environment.baseUrl}/${url}`,
            payload
        );
    }
}