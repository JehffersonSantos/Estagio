import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
})
export class FuncionariosComponent implements OnInit {

  public titulo = 'funcionarios';

  public funcionarios = [
    { id:1, nome: 'Jefferson', rg: '123456', departamentoId:'1' },
    { id:2, nome: 'Jucimara',  rg: '456789', departamentoId:'2' },
    { id:3, nome: 'Gilmar',    rg: '456123', departamentoId:'3' },
    { id:4, nome: 'Valdo',     rg: '123789', departamentoId:'4' },
    { id:5, nome: 'Josenilda', rg: '789123', departamentoId:'5' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
