function verifica(){
	senha = document.getElementById("Senha_Candidato").value;
	forca = 0;
	mostra = document.getElementById("mostra");
	if((senha.length >= 4) && (senha.length <= 10)){
		forca += 10;
	}else if(senha.length>10){
		forca += 25;
	}
	if(senha.match(/[a-z]+/)){
		forca += 10;
	}
	if(senha.match(/[A-Z]+/)){
		forca += 20;
	}
	if(senha.match(/d+/)){
		forca += 20;
	}
	if(senha.match(/W+/)){
		forca += 25;
	}
	return mostra_res();
}
function mostra_res(){
	if(forca < 30){
		mostra.innerHTML = '<tr><td bgcolor="red" width="'+forca+'"></td><td> Fraca </td></tr>';
	}else if((forca >= 30) && (forca < 45)){
		mostra.innerHTML = '<tr><td bgcolor="yellow" width="'+forca+'"></td><td> Mediana </td></tr>';;
	}else if((forca >= 45) && (forca < 60)){
		mostra.innerHTML = '<tr><td bgcolor="green" width="'+forca+'"></td><td> Forte </td></tr>';
	}else{
		mostra.innerHTML = '<tr><td bgcolor="blue" width="'+forca+'"></td><td> Excelente </td></tr>';
	}
}