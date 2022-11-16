import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
})
export class FuncionariosComponent implements OnInit {

  titulo = 'funcionarios';

  public funcionarios = [
    { nome: 'Jefferson' },
    { nome: 'Jucimara' },
    { nome: 'Gilmar' },
    { nome: 'Florisvaldo' },
    { nome: 'Josenilda' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
