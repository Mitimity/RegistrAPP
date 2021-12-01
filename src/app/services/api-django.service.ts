import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ProfesorI } from '../model/profesor';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiDjangoService {
  /* Opciones */
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
    })
  }

  /* Links */

  /* Profesor */
  ruta_profe:string="http://127.0.0.1:8000/api/profe/"
  /* Alumno */
  ruta_alumno:string="http://127.0.0.1:8000/api/alum/"

  constructor(private http: HttpClient) { }

  /* Metodos */
  getProfesor(id):Observable<any>{
    return this.http.post(this.ruta_profe+id,this.httpOptions);
  }
  getAlumno(id):Observable<any>{
    return this.http.post(this.ruta_alumno+id,this.httpOptions);
  }
  
}
