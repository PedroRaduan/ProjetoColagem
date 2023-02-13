var numero = 1;
function comecar(){
    //API que converte o texto em fala
    var synth = window.speechSynthesis;
    //Pegando o valor do que a pessoa falou
    var palavras = 'Tirando sua selfie em 3 segundos';
    //Criando uma nova API exclusivamente para a gente
    var nova = new SpeechSynthesisUtterance(palavras);
    //Dizendo que vai executar essa função
    //Colocando a camera dentro da div, acionando
    Webcam.attach(camera);
    synth.speak(nova);
    //Função que aciona após um tempo
    setTimeout(function(){
        takeSelfie();
        synth.speak(nova);
    }, 3000);

}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });


 function takeSelfie(){
    var synth = window.speechSynthesis;
    //Pegando o valor do que a pessoa falou
    var palavras = 'Tirando sua selfie em 3 segundos';
    //Criando uma nova API exclusivamente para a gente
    var nova = new SpeechSynthesisUtterance(palavras);
    Webcam.snap(function(data_uri){
        document.getElementById('resultado1').innerHTML = '<img id="selfie1" src="' + data_uri+'"/>';
    });
    setTimeout(function(){
        Webcam.snap(function(data_uri){
            document.getElementById('resultado2').innerHTML = '<img id="selfie2" src="' + data_uri+'"/>';
        });
        synth.speak(nova);
    }, 6000);

    setTimeout(function(){
        Webcam.snap(function(data_uri){
            document.getElementById('resultado3').innerHTML = '<img id="selfie3" src="' + data_uri+'"/>';
        });
        document.getElementById('salvar1').style.display = 'inline';
        document.getElementById('salvar2').style.display = 'inline';
        document.getElementById('salvar3').style.display = 'inline';
    }, 9000);
 }


 function salvar1()
{
    //Ancora
    link = document.getElementById('ancora1');
    //Endereço da foto tirada
    image = document.getElementById('selfie1').src ;
    //Atualizando o enderço na ancora
    link.href = image;
    //Acionando a ancora sem ser clicada automaticamente
    link.click();

}


function salvar2()
{
    //Ancora
    link = document.getElementById('ancora2');
    //Endereço da foto tirada
    image = document.getElementById('selfie2').src ;
    //Atualizando o enderço na ancora
    link.href = image;
    //Acionando a ancora sem ser clicada automaticamente
    link.click();

}


function salvar3()
{
    //Ancora
    link = document.getElementById('ancora3');
    //Endereço da foto tirada
    image = document.getElementById('selfie3').src ;
    //Atualizando o enderço na ancora
    link.href = image;
    //Acionando a ancora sem ser clicada automaticamente
    link.click();

}