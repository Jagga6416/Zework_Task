import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class UserService {
    baseUrl = "https://jsonplaceholder.typicode.com/";
    constructor(private http:HttpClient) {
    }
 
    // Uses http.get() to load data from a single API endpoint
    getUserData(){
        let header = new HttpHeaders({
            'Authorization': 'Bearer ' + 'access token'
        })
        return this.http.get(this.baseUrl+ "todos" ,{
            headers: header
        })
    }
    postUserData(data : any){
        let header = new HttpHeaders({
            'Authorization': 'Bearer ' + 'access token'
        })
        return this.http.post(this.baseUrl + "posts", data,{
            headers: header
        })
    }
    putUserData(data : any){
        let header = new HttpHeaders({
            'Authorization': 'Bearer ' + 'access token'
        })
        return this.http.put(this.baseUrl + "posts/"+ data.id, data,{
            headers: header
        })
    }
}