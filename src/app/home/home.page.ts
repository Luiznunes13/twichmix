import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tabela = [
  {titulo: 'Umidade', porcentagem: 98},
  {titulo: 'Energia', porcentagem: 99},
  {titulo: 'Proteína', porcentagem: 75},
  {titulo: 'Lipídeos', porcentagem: 40},
  {titulo: 'Colesterol', porcentagem: 99},
  {titulo: 'idrato', porcentagem: 6},
  {titulo: 'Alimentar', porcentagem: 32},
  {titulo: 'Cinzas', porcentagem: 63},
  {titulo: 'Cálcio', porcentagem: 42},
  {titulo: 'Magnésio', porcentagem: 2}
  ];

  constructor() {}

  calcular(porcentagem) {

    if(porcentagem <= 25) {
      return 'danger'
    } else if (porcentagem > 25 && porcentagem <= 50) {
      return 'warning'
    } else if (porcentagem > 50 && porcentagem <= 75) {
      return 'primary'
    } else if (porcentagem > 75) {
      return 'success'
    }
  }


  calcularPorcentagem(porcentagem) {

    if(porcentagem <= 25) {
      return 0.2
    } else if (porcentagem > 25 && porcentagem <= 50) {
      return 0.4
    } else if (porcentagem > 50 && porcentagem <= 75) {
      return 0.6
    } else if (porcentagem > 75) {
      return 0.9
    }
  }

}
