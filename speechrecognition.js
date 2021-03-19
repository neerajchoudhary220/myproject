//sppech 
function runSpeechRecognition() {
    // get output div reference
    //var output = document.getElementById("output");
    // get action element reference
    var action = document.getElementById("action");
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        action.style.color='green';
        action.innerHTML = "<small>listening...</small>";
    };
    
    recognition.onspeechend = function() {
        action.style.color="#ff5722";
        action.innerHTML = "<small>Speak</small>";
        recognition.stop();
    }
  
    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;

       // output.innerHTML = transcript; 
       
        //var myVoice = output.innerHTML;
        /*if(myVoice == "hello")
        {
        alert("This is hello");
        }*/
        document.getElementById('myTxt').value+=transcript+" ";

        //words count//
        var myTxt = document.getElementById('myTxt').value;


// count words
var txtL = myTxt.length;
   var TL =txtL+1;
   console.log(txtL);
   var ReplaceSpace = myTxt.replace(/ /ig,'');
   console.log(ReplaceSpace);
   var NewLength = ReplaceSpace.length;
  console.log(NewLength);
   var TotalWords = (TL-NewLength)-1;
   console.log(TotalWords);
   document.getElementById('words').innerHTML="Words: "+TotalWords;
    };
  
     // start recognition
     recognition.start();
}