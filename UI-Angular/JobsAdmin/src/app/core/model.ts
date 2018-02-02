export class Endereco {
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
}

export class Pessoa {
  codigo: number;
  nome: string;
  endereco = new Endereco();
  ativo = true;
}

export class Categoria {
  codigo: number;
}

export class Lancamento {
  codigo: number;
  tipo = 'RECEITA';
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  observacao: string;
  pessoa = new Pessoa();
  categoria = new Categoria();
}




export class Applicants {
  code: number;
  fullname: string;
  email: string;
  phone_number: string;
  profile_url: string;
  cover_letter: string;
  status = 'New applicant';
  applicant_date: Date;
  job = new Jobs();
}

export class Jobs {
  code: number;
  title: string;
  position: string;
  location: string;
  organization: string;
  publication: Date;
  description: string;
  status: string;
}
