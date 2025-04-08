import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  valorRange = 0;
  valorEmprestimo = 0;
  taxaJuros = 0;
  jurosDecimal = 0;
  prazo = 0;
  prestacao = 0;
  totalEmprestimo = 0;
  jurosAnual = 0;
  anos =0;
  mensagemEx1 = "";
  onIonChange(ev:RangeCustomEvent) {
    this.valorRange = parseInt(ev.detail.value.toString());
  }
  
  calcularEx1(){


    if(this.prazo > 11){
      
    this.jurosDecimal = this.taxaJuros/100;

    this.anos = Math.ceil(this.prazo/23);

    this.jurosAnual = this.valorEmprestimo*this.jurosDecimal*this.anos;

    this.totalEmprestimo = this.valorEmprestimo + this.jurosAnual; 

    this.prestacao = this.totalEmprestimo / Math.ceil(this.prazo);
    
      
    } else {
      this.totalEmprestimo = this.valorEmprestimo;
      this.prestacao = this.totalEmprestimo/this.prazo;
    }
    
  }


}
