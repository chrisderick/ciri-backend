     //---------------------------------------------------//
    //----------Feito Por: Robson Ribeiro----------------//
   //----------Data: 28/03/2019-------------------------//
  //----------Linguagem: JQuery------------------------//
 //----------Titulo: Validor de CPF e CNPJ -----------//
//---------------------------------------------------//

//Mascaras do CPF e CNPJ
$(document).ready(function(){
    $("#CPF_Candidato").mask("999.999.999-99");
});

$(document).ready(function(){
    $("#CNPJ_Empresa").mask("99.999.999/9999-99");
});
//Fim das mascaras

//Validador de CPF
$(function()
{
    //Executa a requisição quando o campo CPF perder o foco
    $('#CPF_Candidato').blur(function()
    {
        var cpf = $('#CPF_Candidato').val().replace(/[^0-9]/g, '').toString();

        //Invalida os numeros validos.
        if ( cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999" )
        {
            alert('CPF inválido: ' + cpf + '\n' + 'Insira um CPF Valido');

            $('#CPF_Candidato').val('');
        }

        if( cpf.length == 11 )
        {
            var v = [];

            //Calcula o primeiro dígito de verificação.
            v[0] = 1 * cpf[0] + 2 * cpf[1] + 3 * cpf[2];
            v[0] += 4 * cpf[3] + 5 * cpf[4] + 6 * cpf[5];
            v[0] += 7 * cpf[6] + 8 * cpf[7] + 9 * cpf[8];
            v[0] = v[0] % 11;
            v[0] = v[0] % 10;

            //Calcula o segundo dígito de verificação.
            v[1] = 1 * cpf[1] + 2 * cpf[2] + 3 * cpf[3];
            v[1] += 4 * cpf[4] + 5 * cpf[5] + 6 * cpf[6];
            v[1] += 7 * cpf[7] + 8 * cpf[8] + 9 * v[0];
            v[1] = v[1] % 11;
            v[1] = v[1] % 10;

            //Retorna Verdadeiro se os dígitos de verificação são os esperados.
            if ( (v[0] != cpf[9]) || (v[1] != cpf[10]) )
            {
                alert('CPF inválido: ' + cpf + '\n'+'Insira um CPF Valido');

                $('#CPF_Candidato').val('');
            }

        }
        else
        {
            alert('CPF inválido: ' + cpf + '\n'+ 'Insira um CPF Valido');

            $('#CPF_Candidato').val('');
        }
    });
});
//Fim Validador CPF

//Validador CNPJ
$(function()
{
    //Executa a requisição quando o campo CNPJ perder o foco
    $('#CNPJ_Empresa').blur(function()
    {
        var cnpj = $('#CNPJ_Empresa').val().replace(/[^0-9]/g, '').toString();  
 
        //Verifica se exite 14 Digitos
        if( cnpj.length == 14 )
        {
            var v = [];
        
            //Calcula o primeiro dígito de verificação.
            v[1] = 5 * cnpj[0] + 4 * cnpj[1]  + 3 * cnpj[2]  + 2 * cnpj[3]
            v[1] += 9 * cnpj[4] + 8 * cnpj[5]  + 7 * cnpj[6]  + 6 * cnpj[7]
            v[1] += 5 * cnpj[8] + 4 * cnpj[9] + 3 * cnpj[10] + 2 * cnpj[11]
            
            //Verifica a conta do DV caso seja menor que 2 será zero
            if (v[1] % 11 <= 2){
                v[1] = 0;
            }else{
                v[1] = 11 - v[1] % 11
            }		
                
            //Calcula o segundo dígito de verificação.
            v[2] = 6 * cnpj[0] + 5 * cnpj[1]  + 4 * cnpj[2]  + 3 * cnpj[3]
            v[2] += 2 * cnpj[4] + 9 * cnpj[5]  + 8 * cnpj[6]  + 7 * cnpj[7]
            v[2] += 6 * cnpj[8] + 5 * cnpj[9] + 4 * cnpj[10] + 3 * cnpj[11]
            v[2] += 2 * cnpj[12]
            
            //Verifica a conta do DV caso seja menor que 2 será zero
            if (v[2] % 11 <= 2){
                v[2] = 0;
            }else{
                v[2] = 11 - v[2] % 11
            }
    
            //Retorna Verdadeiro se os dígitos de verificação são os esperados.
            if ( (v[1] != cnpj[13]) || (v[2] != cnpj[14]) )
            {
                alert('CNPJ inválido: ' + cnpj + '\n' + 'Insira um CNPJ Valido');

                $('#CNPJ_Empresa').val('');
            }
        } 
        else
        {
            alert('CNPJ inválido: ' + cnpj + '\n' + 'Insira um CNPJ Valido');

            $('#CNPJ_Empresa').val('');
        }
    
    });
});
//Fim Validador CNPJ