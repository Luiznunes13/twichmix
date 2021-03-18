import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refeicoes',
  templateUrl: './refeicoes.component.html',
  styleUrls: ['./refeicoes.component.scss'],
})
export class RefeicoesComponent implements OnInit {

  public search: string = '' ;

  constructor() { }

  ngOnInit() {}
  searchChanged(){
    console.log(this.search);
  }
}
