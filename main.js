function iniciar_audio(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1uy8f4jy0/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
    console.log(results);
    randomnumber_r=Math.floor(Math.random() * 255)+1;
    randomnumber_g=Math.floor(Math.random() * 255)+1;
    randomnumber_b=Math.floor(Math.random() * 255)+1;
    document.getElementById("etiqueta_resultado").innerHTML ='escucho: '+ results[0].label;
    document.getElementById("precision").innerHTML='precision: '+ (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("etiqueta_resultado").style.color="rgb("+ randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";
    document.getElementById("precision").style.color="rgb("+ randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";
    img1 = document.getElementById('alien1')
    img2 = document.getElementById('alien2')
    img3 = document.getElementById('alien3')
    img4 = document.getElementById('alien4')
    if(results[0].label=="aplausos"){
        img1.src='aliens-01.gif';
        img2.src='aliens-02.png';
        img3.src='aliens-03.png';
        img4.src='aliens-04.png';
    }
    else if(results[0].label=="chasquidos"){
        img1.src='aliens-01.png';
        img2.src='aliens-02.gif';
        img3.src='aliens-03.png';
        img4.src='aliens-04.png';
    }
    else if(results[0].label=="taza+cuchara"){
        img1.src='aliens-01.png';
        img2.src='aliens-02.png';
        img3.src='aliens-03.gif';
        img4.src='aliens-04.png';
    }
    else{
        img1.src='aliens-01.png';
        img2.src='aliens-02.png';
        img3.src='aliens-03.png';
        img4.src='aliens-04.gif';
    }
    }
}