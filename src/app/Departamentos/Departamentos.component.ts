import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Departamentos',
  templateUrl: './Departamentos.component.html',
  styleUrls: ['./Departamentos.component.css'],
})
export class DepartamentosComponent implements OnInit {

  titulo = 'departamentos';

  public departamentos = [
    {id: 1, nome: 'Administrativo'  ,sigla: 1 },
    {id: 2, nome: 'Financeiro'      ,sigla: 2  },
    {id: 3, nome: 'Recursos Humanos',sigla: 3  },
    {id: 4, nome: 'Comercial'       ,sigla: 4  },
    {id: 5, nome: 'Marketing'       ,sigla: 5  },
  ]

  constructor() { }

  ngOnInit() {
  }

}
