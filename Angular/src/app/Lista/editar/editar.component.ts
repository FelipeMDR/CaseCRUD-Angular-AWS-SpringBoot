import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/Modelo/Lista';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  lista: Lista = new Lista();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = JSON.parse(localStorage.getItem('id') || '{} ');
    this.service.getTarefaId(id)
    .subscribe(data=>{
      this.lista=data;
    })
  }

  Atualizar(lista: Lista){
    this.service.atualizarTarefa(lista)
    .subscribe(data=> {
      this.lista=data;
    })
    this.router.navigate(["lista"]);
  }
}
