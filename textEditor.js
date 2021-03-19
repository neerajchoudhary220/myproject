function Replace()
  {
      var myTxt = document.getElementById('myTxt').value;
      var WT = document.getElementById('wt').value;
      var RT = document.getElementById('rt').value;
      var t = new RegExp(WT,"ig");
     // alert("hello");
     var newTxt = myTxt.replace(t,RT);
     document.getElementById('myTxt').value = newTxt;
     document.getElementById('wt').value='';
     document.getElementById('rt').value='';

     
     
     //
  }
  
function wordCount()
  {
  var myTxt = document.getElementById('myTxt').value;
 
if(myTxt ==" ")
{
  document.getElementById('words').innerHTML="Words: 0";
}
 // count words
  var txtL = myTxt.length;

     var TL =txtL+1;
     console.log("text "+txtL);
     var ReplaceSpace = myTxt.replace(/ /ig,'');
     console.log(ReplaceSpace);
     var NewLength = ReplaceSpace.length;
    console.log(NewLength);
     var TotalWords = (TL-NewLength);
     console.log(TotalWords);
     document.getElementById('words').innerHTML="Words: "+TotalWords;
 


} 
  

//sppech 

  //backspace key press//
  var el = document.getElementById('myTxt'); 
  var myTxt =document.getElementById('myTxt').value;
  
  var last = document.getElementById('last').value;
  var first = document.getElementById('last').value;

el.addEventListener('keydown', function(event) { 
const key = event.key; 

if (key === "Backspace") { 
     
      
} 
}); 
  