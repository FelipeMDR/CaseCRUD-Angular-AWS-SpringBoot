import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lista } from 'src/app/Modelo/Lista';

@Injectable({
    providedIn: 'root'
})
export class ServiceService {
    
    constructor(private http: HttpClient) { }

    Url= '*';

    getLista(){
        return this.http.get<Lista[]>(this.Url);
    }
    saveLista(lista:Lista){
        return this.http.post<Lista>(this.Url, lista);
    }
    getTarefaId(id:string){
        return this.http.get<Lista>(this.Url+"/"+id);
    }   
    atualizarTarefa(lista: Lista){
        return this.http.put<Lista>(this.Url+"/"+lista.id, lista);
    }
    deletarTarefa(lista: Lista){
        return this.http.delete<Lista>(this.Url+"/"+lista.id);
    }
}