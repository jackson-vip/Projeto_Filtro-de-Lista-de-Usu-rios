import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit{

  // Variáveis:
  foods = [{
    value: 'Teste',
    viewValue: 'Teste'
  }];

  constructor (
    private fb: FormBuilder,
  ){}

  ngOnInit() {}

  meuForm = new FormGroup ({
    nome: new FormControl ('', {}),
  })

  clearValue(): void {
    // Limpa o valor do input e oculta o botão
    this.meuForm.get('nome')?.setValue('');
  }

}
