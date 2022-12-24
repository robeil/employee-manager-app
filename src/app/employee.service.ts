import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./employee";

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    public apiServiceUrl = '';

    constructor(private http: HttpClient) { }

    public getEmployees(): Observable<Employee[]> {
        return this.http.get<any>('${this.spiServerUrl}/employees');
    }
}
