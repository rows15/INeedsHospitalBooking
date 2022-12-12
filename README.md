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


 How to Run>
	-clone repository
	-open back project folder on the terminal
	-run ('npm install')
	-config .env file with your database connection
	-run ('npm run migration:generate')
	-run ('npm run migration:run') // Sets up the Db
	-run ('npm run dev') // Starts the backEnd server
	-open front project folder on the terminal
	-run ('npm install')
	-config /src/services/api.js with your backend host ip and port
	-run ('npm start')
	

