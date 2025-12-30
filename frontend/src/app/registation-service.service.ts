import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistationServiceService {

  private url= 'https://localhost:7097/api/Registation'


  constructor(private http:HttpClient) { }

  addRegistation(Registation: any):Observable<any>{

    return this.http.post<any>(this.url, Registation)
  }
  login(data: any) {
  return this.http.post(
    'https://localhost:7097/api/Registation/login',
    data
  );
}


getEmploye():Observable<any[]>{
  return this.http.get<any[]>(this.url)
}
}
