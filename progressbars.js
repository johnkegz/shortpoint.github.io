function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function finish() {
    var elem = document.getElementsByClassName("progress-bar");   
    var width = 50;
    var id = setInterval(frame, 10);
    
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        for(let i=0; i<elem.length; i++){
            elem[i].style.width = width + '%'; 
            elem[i].innerHTML = '<div class="progress-bar-percentage">'+width * 1  + '%'+'</div>';
        }
      }
    }
  }