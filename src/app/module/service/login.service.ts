import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	constructor(private http: HttpClient, private router: Router) {}
	baseUrl = environment.baseUrl + '/login';


	LoginUser(usuario: any)  {
		return this.http.post<any>(this.baseUrl, usuario);
	}
}
