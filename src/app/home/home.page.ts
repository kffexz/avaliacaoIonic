import { Component, numberAttribute } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor() {}

  onIonChange(ev: RangeCustomEvent) {
    this.valorRange = parseInt(ev.detail.value.toString());
  }

  // EXERCÍCIO 1
  valorRange = 0;
  valorEmprestimo = 0;
  taxaJuros = 0;
  jurosDecimal = 0;
  prazo = 0;
  prestacao = 0;
  totalEmprestimo = 0;
  jurosAnual = 0;
  anos = 0;
  mensagemEx1 = '';

  calcularEx1() {
    if (this.prazo == 0){
      this.totalEmprestimo = this.valorEmprestimo;
      this.prestacao = this.totalEmprestimo;
    }
    else if (this.prazo < 11 ) {


      this.totalEmprestimo = this.valorEmprestimo;
      this.prestacao = this.totalEmprestimo / this.prazo;

    } 
    else {

      this.jurosDecimal = this.taxaJuros / 100;

      this.anos = Math.ceil(this.prazo / 23);

      this.jurosAnual = this.valorEmprestimo * this.jurosDecimal * this.anos;

      this.totalEmprestimo = this.valorEmprestimo + this.jurosAnual;

      this.prestacao = this.totalEmprestimo / Math.ceil(this.prazo);
    }
  }

  // EXERCÍCIO 2

  alertButtons = ['Confirmar'];
  mensagem = '';
  valorProduto = 0;
  desconto = 0;
  descontoDecimal = 0;
  precoFinal = 0;

  clDesconto() {
    this.descontoDecimal = this.desconto / 100;
    this.precoFinal =
      this.valorProduto - this.valorProduto * this.descontoDecimal;

    this.mensagem =
      'Preço original: R$' +
      this.valorProduto +
      '\n Desconto: ' +
      this.desconto +
      '%' +
      '\n Preço final: R$' +
      this.precoFinal;
  }

  //EXERCÍCIO 3

  diaria = 0;
  quarto = '';
  ref = '';
  mensagemDiaria = 'Por favor preencha todos os campos.';
  valorRef = 0;
  valorDiaria = 0;
  valorQuarto = 0;
  estadia = 0;

  calcularEx3() {
    if(this.diaria == 0){
      this.mensagemDiaria = 'Você precisa escolher os dias de sua estadia.'
    }

    // QUARTO ECONOMICO
    else if (this.quarto == 'eco') {
      this.valorQuarto = 150;

      if (this.ref == 'sem') {
        this.valorRef = 0;
        this.valorDiaria = this.valorQuarto + this.valorRef;
        this.estadia = this.valorDiaria * this.diaria; 

        this.mensagemDiaria =  
        'Diárias: ' +
        this.diaria +
        '\n Quarto: Econômico' +
        '\n Refeição: Nenhuma' +
        '\n Valor da diária: R$' +
        this.valorDiaria +
        '\n Valor da estadia: R$' +
        this.estadia; 

      }
      else if (this.ref == 'cafe'){
        this.valorRef = 30;
        this.valorDiaria = this.valorQuarto + this.valorRef;
        this.estadia = this.valorDiaria * this.diaria; 

        this.mensagemDiaria =  
        'Diárias: ' +
        this.diaria +
        '\n Quarto: Econômico' +
        '\n Refeição: Café da Manhã' +
        '\n Valor da diária: R$' +
        this.valorDiaria +
        '\n Valor da estadia: R$' +
        this.estadia; 
      }
      else if (this.ref == 'mp'){
        this.valorRef = 70;
        this.valorDiaria = this.valorQuarto + this.valorRef;
        this.estadia = this.valorDiaria * this.diaria; 

        this.mensagemDiaria =  
        'Diárias: ' +
        this.diaria +
        '\n Quarto: Econômico' +
        '\n Refeição: Café e almoço' +
        '\n Valor da diária: R$' +
        this.valorDiaria +
        '\n Valor da estadia: R$' +
        this.estadia; 
      }
      else if (this.ref == 'pc'){
        this.valorRef = 120;
        this.valorDiaria = this.valorQuarto + this.valorRef;
        this.estadia = this.valorDiaria * this.diaria; 

        this.mensagemDiaria =  
        'Diárias: ' +
        this.diaria +
        '\n Quarto: Econômico' +
        '\n Refeição: Café, almoço e jantar' +
        '\n Valor da diária: R$' +
        this.valorDiaria +
        '\n Valor da estadia: R$' +
        this.estadia; 
      }
    }


    // QUARTO PADRAO
    else if (this.quarto == 'padrao') {
      this.valorQuarto = 250;
      if (this.ref == 'sem') {
        this.valorRef = 0;
        this.valorDiaria = this.valorQuarto + this.valorRef;
        this.estadia = this.valorDiaria * this.diaria; 

        this.mensagemDiaria =  
        'Diárias: ' +
        this.diaria +
        '\n Quarto: Padrão' +
        '\n Refeição: Nenhuma' +
        '\n Valor da diária: R$' +
        this.valorDiaria +
        '\n Valor da estadia: R$' +
        this.estadia; 

      }
      else if (this.ref == 'cafe'){
        this.valorRef = 30;
        this.valorDiaria = this.valorQuarto + this.valorRef;
        this.estadia = this.valorDiaria * this.diaria; 

        this.mensagemDiaria =  
        'Diárias: ' +
        this.diaria +
        '\n Quarto: Padrão' +
        '\n Refeição: Café da Manhã' +
        '\n Valor da diária: R$' +
        this.valorDiaria +
        '\n Valor da estadia: R$' +
        this.estadia; 
      }
      else if (this.ref == 'mp'){
        this.valorRef = 70;
        this.valorDiaria = this.valorQuarto + this.valorRef;
        this.estadia = this.valorDiaria * this.diaria; 

        this.mensagemDiaria =  
        'Diárias: ' +
        this.diaria +
        '\n Quarto: Padrão' +
        '\n Refeição: Café e almoço' +
        '\n Valor da diária: R$' +
        this.valorDiaria +
        '\n Valor da estadia: R$' +
        this.estadia; 
      }
      else if (this.ref == 'pc'){
        this.valorRef = 120;
        this.valorDiaria = this.valorQuarto + this.valorRef;
        this.estadia = this.valorDiaria * this.diaria; 

        this.mensagemDiaria =  
        'Diárias: ' +
        this.diaria +
        '\n Quarto: Padrão' +
        '\n Refeição: Café, almoço e jantar' +
        '\n Valor da diária: R$' +
        this.valorDiaria +
        '\n Valor da estadia: R$' +
        this.estadia; 
      }
    }

    // QUARTO DE LUXO

    else if (this.quarto == 'luxo') {
      this.valorQuarto = 400;
      if (this.ref == 'sem') {
        this.valorRef = 0;
        this.valorDiaria = this.valorQuarto + this.valorRef;
        this.estadia = this.valorDiaria * this.diaria; 

        this.mensagemDiaria =  
        'Diárias: ' +
        this.diaria +
        '\n Quarto: Luxo' +
        '\n Refeição: Nenhuma' +
        '\n Valor da diária: R$' +
        this.valorDiaria +
        '\n Valor da estadia: R$' +
        this.estadia; 

      }
      else if (this.ref == 'cafe'){
        this.valorRef = 30;
        this.valorDiaria = this.valorQuarto + this.valorRef;
        this.estadia = this.valorDiaria * this.diaria; 

        this.mensagemDiaria =  
        'Diárias: ' +
        this.diaria +
        '\n Quarto: Luxo' +
        '\n Refeição: Café da Manhã' +
        '\n Valor da diária: R$' +
        this.valorDiaria +
        '\n Valor da estadia: R$' +
        this.estadia; 
      }
      else if (this.ref == 'mp'){
        this.valorRef = 70;
        this.valorDiaria = this.valorQuarto + this.valorRef;
        this.estadia = this.valorDiaria * this.diaria; 

        this.mensagemDiaria =  
        'Diárias: ' +
        this.diaria +
        '\n Quarto: Luxo' +
        '\n Refeição: Café e almoço' +
        '\n Valor da diária: R$' +
        this.valorDiaria +
        '\n Valor da estadia: R$' +
        this.estadia; 
      }
      else if (this.ref == 'pc'){
        this.valorRef = 120;
        this.valorDiaria = this.valorQuarto + this.valorRef;
        this.estadia = this.valorDiaria * this.diaria; 

        this.mensagemDiaria =  
        'Diárias: ' +
        this.diaria +
        '\n Quarto: Luxo' +
        '\n Refeição: Café, almoço e jantar' +
        '\n Valor da diária: R$' +
        this.valorDiaria +
        '\n Valor da estadia: R$' +
        this.estadia; 
      }
    }

    
  }
}
