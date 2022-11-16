import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Departamentos',
  templateUrl: './Departamentos.component.html',
  styleUrls: ['./Departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  titulo = 'Departamentos';

  public departamentos = [
    {nome: 'Administrativo'},
    {nome: 'Financeiro'},
    {nome: 'Recursos Humanos'},
    {nome: 'Comercial'},
    {nome: 'Marketing'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
