prediction_1= "";
prediction_2= "";

Webcam.set({
 width:350,
 height:350, 
 image_format:"png",
 png_quality:90,
});

camera=document.getElementById("camera");
Webcam.attach("#camera");


function takesnapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='captureimage'>";

});


}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BBpEK8_Eb/model.json',modelLoaded);


function modelLoaded(){
console.log("modelLoaded");
}

function speak(){
 var synth=window.speechSynthesis;
 speakdata1="The first prediction is"+prediction_1;
 speakdata2="The second prediction is"+prediction_2;
 var utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
 synth.speak(utterThis);
}