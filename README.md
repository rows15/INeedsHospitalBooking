Desafio>

Back: 
	Java ou Javascript
Front:
	React

3 roles 

- Admnistrativo
- Médico
- Paciente

DB:
	-Usuários
		-Admin
			-id , email , telefone , nome , senha

		-Médico
			-id , email , telefone , nome , senha , CRM , especialidade

		-Paciente (Responsável)
			-id , email , telefone , nome , senha , RG 

		-Paciente (Irresponsável) [Nullable = *]
			-id , email* , telefone* , nome , senha* , RG* , Responsável*


		-*Agenda
			-id , id_medico , id_paciente , dataEHoraInicio , dataEHoraFim



-Paciente :
	-Agenda e cancelar
	-Chat (websocker)
	
-Médico :
	-Cancelar

-Admin :
	-Cadastro de pacientes e médicos (bulk ou individual) (E CRUD)
	-Aceita os pedidos de chat de pacientes
	-Remarcar ou Cancelar