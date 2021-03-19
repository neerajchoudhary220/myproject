function downloadasTextFile(filename, text) {
    
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("saveBtn").addEventListener("click", function(){

// Generate download of phpcodertech.txt file with some content
    var text = document.getElementById("myTxt").value;
    var nameoffile =document.getElementById('NameOfFile').value;

    var filename = nameoffile+".txt";//myFile.txt";
    
    downloadasTextFile(filename, text);
    
    
    document.getElementById('FileName').style.display="none";
    document.getElementById('txtEditorBox').style.opacity="1";
    document.getElementById('myTxt').disabled=false;
    document.getElementById('dwn-btn').disabled=false;
    document.getElementById('mic').disabled=false;
    document.getElementById('playspeech').disabled=false;
    document.getElementById('wt').disabled=false;
    document.getElementById('rt').disabled=false;
    document.getElementById('replaceBtn').disabled=false;
    document.getElementById('allclr').disabled=false;
  // alert("hello");
}, false);