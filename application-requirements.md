# Sistema de Gestão de Consulta Médica

A aplicação será construída com as regras de negócio em uma API Node.js com TypeScript e o front-end em React/Next.js.

## Requisitos Funcionais:

### 1. Usuários

- Deve ser possível cadastrar usuário operador do sistema e definir seu perfil de acesso;
- Deve ser possível o operador se autenticar;
- Deve ser possível cadastrar usuário paciente;
- Deve ser possível exibir os dados de um usuário, seja operador ou paciente;
- Deve ser possível listar todos os usuários, operadores e pacientes, em telas diferentes;
- Deve ser possível atualizar os dados de um usuário, operador ou paciente;
- Deve ser possível atualizar a senha de um usuário (operador);
- Deve ser possível excluir um usuário.

### 2. Consulta

- Deve ser possível agendar uma consulta;
- Deve ser possível visualizar uma consulta agendada;
- Deve ser possível visualizar todas as consultas agendadas;
- Deve ser possível visualizar as consultas de um determinado dia;
- Deve ser possível editar uma consulta agendada;
- Deve ser possível excluir uma consulta agendada;
- Deve ser possível visualizar o histórico de consultas já realizadas de um paciente;
- Deve ser possível visualizar o histórico de consultas já realizadas por dia;
- Deve ser possível visualizar o histórico de todas as consultas já realizadas;

### 3. Atendimento do Paciente

- Deve ter um painel de chamar pacientes;
- Durante o atendimento, deve abrir um formulário de atendimento do paciente;
- Deve ser possível gerar documentos PDF durante o atendimento (atestado, receita, etc.);
- Deve ser possível imprimir esses documentos já com os dados do paciente, médico e informações pertinentes ao documento gerado;
- Deve ser possível o médico e a recepção se comunicarem por um chat do próprio sistema;

### 4. Personalização de Documentos

- Deve ter um formulário para personalizar o cabeçalho dos documentos gerados por ele (logo e texto);

## Requisitos Não-Funcionais

- A senha dos usuários deve ser criptografada;
- O usuário precisa ser identificado com um JWT;
- Os dados da aplicação precisam ser persistidos em banco de dados Postgres, exceto as conversas do chat;
- Todas as listas de dados precisam estar paginadas com 15 itens por página;
- Durante o agendamento de uma consulta, deverão aparecer somente os horários e dias disponíveis para o operador escolher;
- Uma consulta deve ser agendada em intervalos no mínimo de 1 hora entre cada uma;