function alcoolXGasolina(){

    let alcool = "Àlcool";
    let gasolina = "Gasolina";
    let precoDoAlcool = document.formAlcoolOuGasolina.precoDoAlcool.value.replace(',','.');
    let precoDaGasolina = document.formAlcoolOuGasolina.precoDaGasolina.value.replace(',','.');
    let porcentagem = (precoDaGasolina / 100) * 70;

    //calcula qual combustível vale mais a pena
    if (precoDoAlcool && precoDaGasolina){
        if (precoDoAlcool <= porcentagem){

            document.formAlcoolOuGasolina.qualValeMaisAPena.value = alcool;

        }
        else{

            document.formAlcoolOuGasolina.qualValeMaisAPena.value = gasolina;

        }
    }
    else{
        alert ('Preencha todos os campos');
    }
    
    return false;
}