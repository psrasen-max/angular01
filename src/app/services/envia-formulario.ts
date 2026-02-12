import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnviaFormulario {

  enviaInformacaoParaBackend(informacao: string) {

    // Aqui você pode implementar a lógica para enviar a informação para o backend

    console.log("informacao");
  }

}
