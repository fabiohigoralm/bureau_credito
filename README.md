### API bureau de credito

### Preparação do ambiente
Para a utilização correta da API ,deverá seguir os passos abaixo:

Deve se configurar o arquivo .env com as variáveis de ambiente necessárias para o funcionamento,o arquivo .env.example tem o exemplo das variáveis para configuração.

Instalar todas as dependências , npm install .

Executar o seed para popular o banco de dados , npm run seed .

Inicializar o servidor utilizando npm start ou npm run dev .

### Preparação para executar os teste
Para a execução dos testes de integração é necessário o funcionamento do servidor,sendo assim os testes poderão ser executados.

Para executar os testes sem o relatório de cobertura,npm test .

Para executar os testes com o relatório de cobertura, npm test:test:coverage .

Os testes não possuem a cobertura total de linhas ,mas estão devidamente configurados e sendo executados para demonstrar o conhecimento técnico sobre testes.
### Documentação

Existe um arquivo dentro da pasta src/api chamado swagger.json onde contém a documentação e as as instruções de uso da API.
A documentação da api está disponível no http://localhost:3001/api-docs/ de forma interativa,após a inicialização do servidor.

### Resumo
A API conta um sistema de login onde existem dois tipos de usuários ,administradores e usuários.
Antes da utilização de qualquer rota mostrada na documentação deve-se fazer o login onde retorna um token tendo suas credenciais de acesso.Esse token deve ser inserido no cabeçalho antes de fazer qualquer requisição.

Para resolver e desenvolver o desafio proposto foi utilizado banco de dados não relacional ,visando a melhor performance nas consultas.

Foram utilizadas 3 principais bases: a BASE A , BASE B , BASE C .Essas bases são compostas por schemas variados a depender das informações cadastradas em cada base.
A Base A é a única base que contém o cpf dos clientes,em consequência por ser um dado sensível,é possível fazer consultas apenas pelo cpf.Porém o cpf nunca é retornado para o usuário a quem fez a consulta e sim apenas os dados que estão vinculados.

Como o cpf só está cadastrado apenas na Base A ,quando o usuário faz uma busca  nas outras bases,primeiramente acontece uma consulta involuntária na base A ,onde retorna o id do cliente vinculado ao cpf de que foi buscado.Nas Bases B e C existe um campo  id_user que está vinculado a esse id da Base A,sendo assim as buscas na bases B e C são feitas a partir do id_user retornado da Base A.

Com nível de acesso de usuário é possível fazer apenas uma consulta por vez em cada Base.
Com nível de acesso de administrador é possível fazer uma consulta que está disponível apenas para administradores que retornará a consulta de todas as bases apenas de uma vez sem parâmetros de busca,ou seja,apenas o administrador terá acesso aos dados dos clientes sem conter o cpf para busca.

Todas as rotas de usuários também estão disponíveis para o administrador.

