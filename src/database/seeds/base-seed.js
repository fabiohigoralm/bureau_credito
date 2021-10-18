const BaseA = require('../model/model-baseA');
const Divida = require('../model/model-divida');
const BaseB = require('../model/model-baseB');
const BaseC = require('../model/model-baseC');
const Inventario = require('../model/model-inventario');
const FonteRenda = require('../model/model-fonteRenda');
const Movimentacao = require('../model/model-movimentacao');
const Endereco = require('../model/model-endereco');
const User = require('../model/model-user');

// seed para Base A ------------------------------------------------------****
const div_1 = new Divida({
  descricao: 'Financiamento de automóvel',
  valor: 15000,
  anoDivida: 2015,
});
div_1.save();

const div_2 = new Divida({
  descricao: 'Divida de cartão de credito',
  valor: 3000,
  anoDivida: 2019,
});
div_2.save();

const div_3 = new Divida({
  descricao: 'Reforma residencial',
  valor: 9000,
  anoDivida: 2021,
});
div_3.save();

const div_4 = new Divida({
  descricao: 'Cheque devolvido',
  valor: 2000,
  anoDivida: 2019,
});
div_4.save();

const div_5 = new Divida({
  descricao: 'IPTU anual',
  valor: 350,
  anoDivida: 2021,
});
div_5.save();

const div_6 = new Divida({
  descricao: 'Emprestimo bancario',
  valor: 10200,
  anoDivida: 2019,
});
div_6.save();

const div_7 = new Divida({
  descricao: 'Limite cheque especial',
  valor: 2000,
  anoDivida: 2020,
});
div_7.save();

const end_1 = new Endereco({
  rua: 'Rua das flores',
  numero: 103,
  bairro: 'Vila das aguas',
  cidade: 'Campinas',
  estado: 'SP',
  cep: 13000000,
});
end_1.save();

const end_2 = new Endereco({
  rua: 'Rua das garças',
  numero: 520,
  bairro: 'Trindade',
  cidade: 'Florianópolis',
  estado: 'SC',
  cep: 15000000,
});
end_2.save();

const end_3 = new Endereco({
  rua: 'Rua das lajotas',
  numero: 1234,
  bairro: 'Serraria',
  cidade: 'Rio de Janeiro',
  estado: 'RJ',
  cep: 22000000,
});
end_3.save();

const end_4 = new Endereco({
  rua: 'Rua das flores',
  numero: 651,
  bairro: 'Monte verde',
  cidade: 'Laguna',
  estado: 'SC',
  cep: 26600000,
});
end_4.save();

const end_5 = new Endereco({
  rua: 'Rua das tainhas',
  numero: 50,
  bairro: 'Campo Alto',
  cidade: 'Sorocaba',
  estado: 'SP',
  cep: 89600000,
});
end_5.save();

const base_a_1 = new BaseA({
  nome: 'Luis Henrique',
  cpf: '12345678910',
  endereco: [end_3],
  dividas: [div_1, div_2],
});
base_a_1.save();

const base_a_2 = new BaseA({
  nome: 'Pedro Rocha',
  cpf: '10987654321',
  endereco: [end_1],
  dividas: [div_3],
});
base_a_2.save();

const base_a_3 = new BaseA({
  nome: 'Vera Amorin',
  cpf: '12345678920',
  endereco: [end_2],
  dividas: [div_4, div_5],
});
base_a_3.save();

const base_a_4 = new BaseA({
  nome: 'Daniela da Silva',
  cpf: '12345678101',
  endereco: [end_4],
  dividas: [div_6],
});
base_a_4.save();

const base_a_5 = new BaseA({
  nome: 'Ana Cardoso',
  cpf: '25777912345',
  endereco: [end_5],
  dividas: [div_7],
});
base_a_5.save();

// --------------------------------------------------------------------****

// seed para BaseB
const invetario_1 = new Inventario({
  descricaoPatrimonio: 'terreno de familia',
  valorMedio: '30000',
  apartirDoAno: '1990',
});
invetario_1.save();

const invetario_2 = new Inventario({
  descricaoPatrimonio: 'anel de ouro',
  valorMedio: '2000',
  apartirDoAno: '2002',
});
invetario_2.save();

const invetario_3 = new Inventario({
  descricaoPatrimonio: 'casa propria',
  valorMedio: '450000',
  apartirDoAno: '2000',
});
invetario_3.save();

const invetario_4 = new Inventario({
  descricaoPatrimonio: 'Automovel',
  valorMedio: '30000',
  apartirDoAno: '2018',
});
invetario_4.save();

const invetario_5 = new Inventario({
  descricaoPatrimonio: 'Jóias ',
  valorMedio: '3000',
  apartirDoAno: '2005',
});
invetario_5.save();

const invetario_6 = new Inventario({
  descricaoPatrimonio: 'Jóias de Prata',
  valorMedio: '2000',
  apartirDoAno: '2015',
});
invetario_6.save();

const renda_1 = new FonteRenda({
  descricao: 'Salario Mensal',
  valorMedioRenda: '3500',
  primeiroAnoRenda: '2018',
});
renda_1.save();

const renda_2 = new FonteRenda({
  descricao: 'Bolsa de estudos',
  valorMedioRenda: '1600',
  primeiroAnoRenda: '2021',
});
renda_2.save();

const renda_3 = new FonteRenda({
  descricao: 'freelancing',
  valorMedioRenda: '2500',
  primeiroAnoRenda: '2020',
});
renda_3.save();

const renda_4 = new FonteRenda({
  descricao: 'Salario Mensal',
  valorMedioRenda: '2500',
  primeiroAnoRenda: '2020',
});
renda_4.save();

const renda_5 = new FonteRenda({
  descricao: 'Motorista aplicativo',
  valorMedioRenda: '2200',
  primeiroAnoRenda: '2021',
});
renda_5.save();

const renda_6 = new FonteRenda({
  descricao: 'Seguro médico',
  valorMedioRenda: '1800',
  primeiroAnoRenda: '2021',
});
renda_6.save();

const base_b_1 = new BaseB({
  idade: 22,
  listaBens: [invetario_2],
  fonteDeRenda: [renda_2],
  user_id: base_a_2._id,
});

base_b_1.save();

const base_b_2 = new BaseB({
  idade: 35,
  listaBens: [invetario_1, invetario_3],
  fonteDeRenda: [renda_1, renda_3],
  user_id: base_a_1._id,
});

base_b_2.save();

const base_b_3 = new BaseB({
  idade: 29,
  listaBens: [invetario_4],
  fonteDeRenda: [renda_4],
  user_id: base_a_3._id,
});

base_b_3.save();

const base_b_4 = new BaseB({
  idade: 40,
  listaBens: [invetario_5],
  fonteDeRenda: [renda_6],
  user_id: base_a_4._id,
});

base_b_4.save();

const base_b_5 = new BaseB({
  idade: 50,
  listaBens: [invetario_6],
  fonteDeRenda: [renda_5],
  user_id: base_a_5._id,
});

base_b_5.save();

// --------------------------------------------------------------------****

// seed para BaseC

const movimentacao_1 = new Movimentacao({
  descricaoCompra: 'Compra de calçados',
  valorCompra: 600,
});
movimentacao_1.save();

const movimentacao_2 = new Movimentacao({
  descricaoCompra: 'Saque para aluguel',
  valorCompra: 600,
});
movimentacao_2.save();

const movimentacao_3 = new Movimentacao({
  descricaoCompra: 'Parcela automovel',
  valorCompra: 1200,
});
movimentacao_3.save();

const movimentacao_4 = new Movimentacao({
  descricaoCompra: 'Plano de saúde',
  valorCompra: 200,
});
movimentacao_4.save();

const movimentacao_5 = new Movimentacao({
  descricaoCompra: 'Conta de agua e luz',
  valorCompra: 275,
});
movimentacao_5.save();

const movimentacao_6 = new Movimentacao({
  descricaoCompra: 'Ingressos Cinema',
  valorCompra: 30,
});
movimentacao_6.save();

const movimentacao_7 = new Movimentacao({
  descricaoCompra: 'Restaurante',
  valorCompra: 200,
});
movimentacao_7.save();

const movimentacao_8 = new Movimentacao({
  descricaoCompra: 'Posto de Gasolina',
  valorCompra: 150,
});
movimentacao_8.save();

const movimentacao_9 = new Movimentacao({
  descricaoCompra: 'Farmácia',
  valorCompra: 75,
});
movimentacao_9.save();

const movimentacao_10 = new Movimentacao({
  descricaoCompra: 'Academia e fisioterapia',
  valorCompra: 275,
});
movimentacao_10.save();

const base_c_1 = new BaseC({
  movimentacao: [movimentacao_1, movimentacao_2],
  user_id: base_a_1._id,

});

base_c_1.save();

const base_c_2 = new BaseC({
  movimentacao: [movimentacao_3, movimentacao_4],
  user_id: base_a_2._id,

});

base_c_2.save();

const base_c_3 = new BaseC({
  movimentacao: [movimentacao_5, movimentacao_6],
  user_id: base_a_3._id,

});

base_c_3.save();

const base_c_4 = new BaseC({
  movimentacao: [movimentacao_7, movimentacao_8],
  user_id: base_a_4._id,

});

base_c_4.save();

const base_c_5 = new BaseC({
  movimentacao: [movimentacao_9, movimentacao_10],
  user_id: base_a_5._id,

});

base_c_5.save();

// --------------------------------------------------------------------****

// seed para users

const user_1 = new User({
  fullName: 'admin',
  email: 'admin@admin.com',
  password: 'admin12345',
  role: 'admin',
});

user_1.save();

const user_2 = new User({
  fullName: 'Silvio Gaspareto',
  email: 'silviogaspareto@gmail.com',
  password: '654321',
  role: 'user',
});

user_2.save();

const user_3 = new User({
  fullName: 'Lojas Maracenter',
  email: 'lojacentra@maracenter.com',
  password: '123456',
  role: 'user',
});

user_3.save().then(() => { console.log('banco populado!'); }).then(() => {
  process.exit();
});

// // eslint-disable-next-line no-console
// console.log('banco populado!');
// process.exit();
