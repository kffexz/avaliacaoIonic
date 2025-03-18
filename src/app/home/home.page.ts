import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  // EXERCÍCIO 1
  alertButtons = ['OK'];
  mensagem = '';
  moeda = '';
  valor = 0;
  valorfinal = 0;

  taxaEUR = 5.50;
  taxaUSD = 5;

  converterMoeda(){
    if (this.moeda == 'usd'){
      this.valorfinal = this.valor / this.taxaUSD;
      this.mensagem = 'R$' + this.valor +  ' = USD ' + this.valorfinal;
    }
    else if (this.moeda == 'eur'){
      this.valorfinal = this.valor / this.taxaEUR;
      this.mensagem = 'R$' + this.valor + ' = EUR ' + this.valorfinal;
    }
    else {
      this.mensagem = 'escolha uma tipo de moeda';
    }
  }

  // EXERCÍCIO 2
  peso = 0;
  altura = 0;
  imc = 0;
  altura2 = 0;
  class = '';

  calcularIMC(){

    this.altura2 = this.altura*this.altura;
    this.imc = this.peso/this.altura2;
    console.log(this.imc);


    if (this.imc<18.5){
      this.class='Você está abixo do peso.';
    }
    else if(this.imc<=24.9) {
      this.class='Você está com o peso normal.';
    }
    else if(this.imc<=29.9 ){
      this.class='Você está sobrepeso.';
    }
    else if (this.imc>30){
      this.class='Você está com obesidade';
    }
  }

  // EXERCÍCIO 3

  fuel='';
  distancia = 0;
  msgCombustivel = '';
  consumo = 0;
  autonomia = 0;

  calcularConsumo(){
    if(this.fuel == 'gas'){
      this.autonomia = 1/12;
      this.consumo = this.distancia * this.autonomia;
      this.msgCombustivel = 'Serão necessários ' + this.consumo + 'L para esta viagem';
    }
    else if(this.fuel == 'al'){
      this.autonomia = 1/8;
      this.consumo = this.distancia * this.autonomia;
      this.msgCombustivel = 'Serão necessários ' + this.consumo + 'L para esta viagem';
    }
    else if(this.fuel == 'dis'){
      this.autonomia = 1/10;
      this.consumo = this.distancia * this.autonomia;
      this.msgCombustivel = 'Serão necessários ' + this.consumo + 'L para esta viagem';
    }

  }
}
