import { Injectable } from '@angular/core';

/* importar librerias */
import { Observable } from 'rxjs';

//
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usuario } from './pages/model/usuario';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private usuario: Observable<Usuario[]>;
  private usuariosCollection: AngularFirestoreCollection<Usuario>;

  constructor(
    private db: AngularFirestore
    ) {
    this.usuariosCollection= db.collection<Usuario>('usuarios');
    this.usuario = this.usuariosCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map(
          a=>{
            const data= a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          }
        )
      }
    ));
  }

  //metodos
  //recuperar todo
  getTodos(){
    return this.usuario;
  }
  /* recuperar uno */
  getUno(id:string){
    return this.usuariosCollection.doc<Usuario>(id).valueChanges();
  }
  /* añadir una persona */
  addUsuario(usuario: Usuario){
    return this.usuariosCollection.add(usuario);
  }
  /* Eliminar usuario */
  removeUsuario(id:string){
    return this.usuariosCollection.doc(id).delete();
  }
  /* Actualizar persona */
  updateUsuario(nvo_usuario: Usuario, id:string){
    return this.usuariosCollection.doc(id).update(nvo_usuario);
  }
}
