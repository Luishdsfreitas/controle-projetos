export class Projeto {
    constructor(
      public id: string,
      public titulo: string,
      public descricao: string,
      public previsaoDataInicial: Date,
      public previsaoDataFinal: Date,
      public previsaoOrcamento: number,
      public numeroPessoas: number
    ) {}
  }