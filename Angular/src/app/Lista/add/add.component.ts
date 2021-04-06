import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/Modelo/Lista';
import { ServiceService } from '../Service/service.service'; 

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  lista: Lista = new Lista();
  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  Salvar(){
    this.service.saveLista(this.lista)
    .subscribe(()=> {
      this.router.navigate(["lista"]);
    })
  }
}
