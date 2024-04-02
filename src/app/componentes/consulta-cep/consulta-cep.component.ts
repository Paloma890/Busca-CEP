import { CepServicoService } from './../../service/cep-servico.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';



@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.component.html',
  styleUrls: ['./consulta-cep.component.css']
})
export class ConsultaCepComponent {


  constructor(

    private router: Router,
    private cepServico: CepServicoService,
    private localStorage: LocalStorageService){}

  consultaCEP(ev: any, f: NgForm){
    const cep = ev.target.value;
    if(cep !== ''){
      this.cepServico.getConsultaCep(cep).subscribe((resultado: any) =>
      {console.log(resultado);
      this.populandoEndereco(resultado, f);
    });
    }

  }

  populandoEndereco(dados: any , f: NgForm){
    f.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }

  salvar(form : NgForm){
   console.log(form.controls);
  }

}


