# Curso de NodeJS


### Aula 1 


 caracteristicas do NodeJS

 - event loop;
 - assincronicidade;
 - processos de I/O não bloqueante;
 - Alta performance (quando bem estruturado);

 

### Aula 2

oque é o express?

 - é um framework de web minimalista para crição de api com node;

 para installar o express no projeto node podemos usar o comando 
 `npm install express --save`

 assim o express será instalado dentro do package.json


 para iniciarlizarmos precisamos instanciar o express atribuindo o mesmo a uma constante

 const express = require('express');

 nessa const está instanciado o express

 agora podemos criar o app e adicionar a porta que o app vai estar ouvindo.

 const app = express(); // aqui estamos usando a const que foi criada  cima;

 const port = 3000;

 app.listen(port,() => console.log('teste'));

 
 para sabermos se nossa api está respondendo iremos usar no terminar o comando 
 `node nome_do_arquivo.js`




 agora iremos criar um novo diretorio para podermos criar as rotas para a criação de user nos "sistema",

 `mkdir routesUser`

 dentro dessa pasta routeUser, iremos criar um arquivo routerUser.js, 

dentro do arquivo iremos importar o fs,
e do fs iremos usar o metodo join da seguinte forma;

const fs = require('fs');

aqui iremos usar o join do fs usando o rest operator
const  {join} = require('path');

const filepath = join(`_dirname,'user.json'`);

d

const getUser = ()=> {
	const data = fs.existSync(filepath)
	? fs.readFileSync(filepath)
	: []

	try{
		return JSON.parse(data);
	}catch (error){
			return []
	}
}




const createUser = (users)=> fs.writeFileSync(filepath, null, '/t');





