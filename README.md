# Use case
**como** usuário do TED analytics
**quero** marcar o tempo que eu gasto estudando um assunto
**para** ter o histórico das minhas atividades

# Critérios de aceite

## Página inicial
 - Título com **nome** do app
 - Mostra **lista** de assuntos
	 - Cada assunto com um botão de **editar** assunto 
 - Lugar para ver **histórico**

## Assunto
 - Usuário pode **criar** uma assunto
	 - Campo para escolher cor
	 - Campo para digitar nome 
 - Usuário pode **editar** um assunto
	 - Campo para escolher cor
	 - Campo para digitar nome 
	 - Botão de deletar
 - Usuário pode **deletar** uma assunto
	 - **Pergunta** se quer mesmo deletar
		 - Caso **sim**
			 - Deleta assunto
			 - Deleta todas sessões com aquele assunto

### Dentro do assunto
- **Título** do assunto
- Um **botão de voltar** para a lista de assuntos
- Botão de **iniciar**
- Cronômetro sempre **zerado**

#### Ações
- Usuário pode **iniciar** o cronômetro
	- Quando iniciar **o tempo decorrido aparece na tela** em real time.
	- Botão iniciar vira o botão de **pause**
	- Botão de **encerrar aparece** na tela
	- Usuário **não pode sair** dessa tela
- Usuário pode **pausar** o cronômetro
	- Botão de **pause vira botão de iniciar**
	- Usuário **não pode sair** dessa tela
- Usuário pode **encerrar** o cronômetro
	- **Pergunta** se o usuário deseja mesmo sair da página
		- Em caso de **negar** o encerramento nada é feito
		- Caso **aceitar** o encerramento
			- O cronômetro é zerado
			- Botão de **iniciar é habilitado** novamente
			- Botão de encerrar desaparece
			- Sessão de estudo é **salva**

### Histórico
 - **Lista** de assuntos
 - **Total** de tempo gasto
 - Lista das sessão mostrando **data e tempo gasto**

# Modelo
### Assunto
- Id do assunto
- Nome do assunto
- Cor do assunto

### Sessão de estudo
 - Id da sessão
 - Data da sessão
	 - Marcada no fim da sessão 
 - Tempo gasto na seção
 - Assunto
