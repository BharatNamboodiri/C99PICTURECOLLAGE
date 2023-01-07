var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();
var imgid = "selfie1";

function start()
{
    recognition.start();
    speak();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});
Webcam.attach(camera);
function take_snapshot()
{
    console.log(imgid);

    Webcam.snap(function(data_uri){
        if(imgid=="selfie1")
        {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(imgid=="selfie2")
        {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(imgid=="selfie3")
        {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    });




}



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis)

    setTimeout(function()
{
    imgid = "selfie1"
    take_snapshot();
    speak_data = "The next selfie will be taken in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis)
}, 5000);
setTimeout(function()
{
    imgid = "selfie2"
    take_snapshot();
    speak_data = "The next selfie will be taken in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis)
    
}, 10000);
setTimeout(function()
{
    imgid = "selfie3"
    take_snapshot();
}, 15000);
}




