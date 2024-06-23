# Sistema de Gestão de Consulta Médica

A aplicação será construída com as regras de negócio em uma API Node.js com TypeScript e o front-end em React/Next.js.

## Requisitos Funcionais:

### 1. Usuários

1.1 Deve ser possível cadastrar usuário operador do sistema e definir seu perfil de acesso;
1.2 Deve ser possível o operador se autenticar;
1.3 Deve ser possível cadastrar usuário paciente;
1.4 Deve ser possível exibir os dados de um usuário, seja operador ou paciente;
1.5 Deve ser possível listar todos os usuários, operadores e pacientes, em telas diferentes;
1.6 Deve ser possível atualizar os dados de um usuário, operador ou paciente;
1.7 Deve ser possível atualizar a senha de um usuário (operador);
1.8 Deve ser possível excluir um usuário.

### 2. Consulta

- 2.1 Deve ser possível agendar uma consulta;
- 2.2 Deve ser possível visualizar uma consulta agendada;
- 2.3 Deve ser possível visualizar todas as consultas agendadas;
- 2.4 Deve ser possível visualizar as consultas de um determinado dia;
- 2.5 Deve ser possível editar uma consulta agendada;
- 2.6 Deve ser possível excluir uma consulta agendada;
- 2.7 Deve ser possível visualizar o histórico de consultas já realizadas de um paciente;
- 2.8 Deve ser possível visualizar o histórico de consultas já realizadas por dia;
- 2.9 Deve ser possível visualizar o histórico de todas as consultas já realizadas;

### 3. Atendimento do Paciente

3.1 Deve ter um painel de chamar pacientes;
3.2 Durante o atendimento, deve abrir um formulário de atendimento do paciente;
3.3 Deve ser possível gerar documentos PDF durante o atendimento (atestado, receita, etc.);
3.4 Deve ser possível imprimir esses documentos já com os dados do paciente, médico e informações pertinentes ao documento gerado;
3.5 Deve ser possível o médico e a recepção se comunicarem por um chat do próprio sistema;

### 4. Personalização de Documentos

4.1 Deve ter um formulário para personalizar o cabeçalho dos documentos gerados por ele (logo e texto);

## Requisitos Não-Funcionais

1. A senha dos usuários deve ser criptografada;
2. O usuário precisa ser identificado com um JWT;
3. Os dados da aplicação precisam ser persistidos em banco de dados Postgres, exceto as conversas do chat;
4. Todas as listas de dados precisam estar paginadas com 15 itens por página;
5. Durante o agendamento de uma consulta, deverão aparecer somente os horários e dias disponíveis para o operador escolher;
6. Uma consulta deve ser agendada em intervalos no mínimo de 1 hora entre cada uma;