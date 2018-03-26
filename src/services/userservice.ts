import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/index';
import {Restangular} from 'ng2-restangular';
import {AppSettings} from '../app/globalconstants';

@Injectable()

export class UserService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(AppSettings.RESTDB_URL + 'fusers' , AppSettings.httpOptions);
    }
}
