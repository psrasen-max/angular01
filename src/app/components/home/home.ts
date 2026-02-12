import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {
  private enviaFormularioService = inject(EnviaFormulario);
  name = "Murilo"; // atributo de classe para armazenar o nome
  meuBoolerano = false; // atributo de classe para armazenar um valor booleano
  deveMostrarTitulo = false; // atributo de classe para controlar a exibição do título
  listItems = ["Item 1", "Item 2", "Item 3"]; // atributo de classe para armazenar a lista de itens

  @Input("name") minhaInfoExterna!: string; // decorator @Input para receber um valor externo de outro componente (neste caso do app.ts)
  @Output() exportandoInformacao = new EventEmitter<string>(); // decorator @Output para criar um evento que pode ser emitido para o componente pai

  atualizaBoolerano(valor: boolean) { // Método para atualizar a variável boolean (alterar o valor do atributo da classe)
    this.meuBoolerano = valor;
  }

  submit() {
    this.exportandoInformacao.emit(this.name); // Emite um evento com uma string como informação
    this.enviaFormularioService.enviaInformacaoParaBackend("Informação enviada do componente Home"); // Chama o método do serviço para enviar a informação para o backend
  }
}
