const kmPorLitro = 'km/l';

function calculaConsumo(){
    //calcula o consumo de combustível
    const litros = document.formCalculaConsumo.litros.value.replace(',','.');
    const caminho = document.formCalculaConsumo.caminho.value.replace(',','.');
    const preco = document.formCalculaConsumo.preco.value.replace(',','.');
    const consumo = caminho / litros;
    const precoPorKilometro = preco / consumo;

    if (litros && caminho && preco){

        if (isNaN (consumo) || isNaN (precoPorKilometro)){

            alert ('Preencha os campos com números');

        }
        else{
            
            document.formCalculaConsumo.consumoUsuarioLitro.value = consumo.toFixed(2) + kmPorLitro;
            document.formCalculaConsumo.precoPorKmUsuario.value = 
            precoPorKilometro.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

        }
    }
    else{
        alert ('Preencha todos os campos');
    }

    return false; 
}