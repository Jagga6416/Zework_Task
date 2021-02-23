
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class DataService {
    baseUrl = "https://jsonplaceholder.typicode.com/todos";
    constructor(private http:HttpClient) {
    }
 
    // Uses http.get() to load data from a single API endpoint
    getUserData(){
        let header = new HttpHeaders({
            'Authorization': 'Bearer ' + 'access token'
        })
        return this.http.get(this.baseUrl, {
            headers: header
        })
    }
}