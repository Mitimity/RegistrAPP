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
      'Access-Control-Allow-Methods':'GET,HEAD,OPTIONS,POST,PUT',
    })
  }

  /* Links */

  /* Profesor */
  ruta_profe:string="http://127.0.0.1:8000/api/profe/"
  /* Alumno */
  ruta_alumno:string="http://127.0.0.1:8000/api/alum/"
  /*  */
  ruta_curso:string="http://127.0.0.1:8000/api/cursos/"
  /*  */
  ruta_asistencia:string="http://127.0.0.1:8000/api/asistencia/"
  /* Guardar asistencia */
  ruta_grabar_asistencia:string="http://127.0.0.1:8000/api/grabar_asistencia/"

  constructor(private http: HttpClient) { }

  /* Metodos */
  getProfesor(id):Observable<any>{
    return this.http.post(this.ruta_profe+id,this.httpOptions);
  }
  getAlumno(id):Observable<any>{
    return this.http.post(this.ruta_alumno+id,this.httpOptions);
  }
  getCurso(id):Observable<any>{
    return this.http.post(this.ruta_curso+id,this.httpOptions);
  }
  getCursos():Observable<any>{
    return this.http.post(this.ruta_curso,this.httpOptions);
  }
  getAsistencia(id):Observable<any>{
    return this.http.post(this.ruta_asistencia+id,this.httpOptions);
  }
  //Grabar asistencia
  addAsistencia(asistencia):Observable<any>{
    return this.http.post(this.ruta_grabar_asistencia,asistencia,this.httpOptions).pipe(retry(2));
  }
  getConteo():Observable<any>{
    return this.http.post("http://127.0.0.1:8000/api/conteo/",this.httpOptions)
  }
}
