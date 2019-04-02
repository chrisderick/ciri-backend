//Função de controle de conteudo Candidato
$('#botao-candidato').click(function(){
    $('#collapse-empresa').collapse('hide');
});

//Função de controle de conteudo Empresa
$('#botao-empresa').click(function(){
    $('#collapse-candidato').collapse('hide');
});

//Função de controle de conteudo Candidato Registro
$('#botao-registro-candidato').click(function(){
    $('#collapse-registro-empresa').collapse('hide');
});

//Função de controle de conteudo Empresa Registro
$('#botao-registro-empresa').click(function(){
    $('#collapse-registro-candidato').collapse('hide');
});