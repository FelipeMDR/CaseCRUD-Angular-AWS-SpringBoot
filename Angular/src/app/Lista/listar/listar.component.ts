import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import { Lista } from 'src/app/Modelo/Lista';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listas!:Lista[];
  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getLista()
    .subscribe(data=>{
      this.listas=data;
    })
  }

  Editar(lista: Lista): void{
    localStorage.setItem('id', JSON.stringify(lista.id));
    this.router.navigate(["editar"]);
  }

  Deletar(lista: Lista){
    this.service.deletarTarefa(lista)
    .subscribe(()=>{
      this.listas=this.listas.filter(p=>p!==lista);
    })
    location.reload();
  }
}
