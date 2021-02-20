// Select Mouth

function addMouth(){ 
var selectMouthDD = document.getElementById("catMouth");
 var mouthValue = selectMouthDD.value; 
 
    if (mouthValue == 'smile'){
    document.getElementById("mouth").innerHTML =  
    "<div class='mouth'></div>"; }
    else 
    if (mouthValue == 'tongue'){
        document.getElementById("mouth").innerHTML =  
        "<div class='mouth2 mouth2a'> </div>"; }
    
    else 
    if (mouthValue == 'surprise'){
        document.getElementById("mouth").innerHTML =  
        "<div class='mouth3'> </div>"; }
    
    else {
        document.getElementById("mouth").innerHTML =  
        "<div class='mouth4'> </div>";

    }

}


// Select Eyes

function addCatEyes(){ 
var selectEyesDD = document.getElementById("catEyes");
 var eyeValue = selectEyesDD.value; 
 
 if (eyeValue == 'round') {
   document.getElementById("leftEye").innerHTML = 
   "<div class='circle moveright'><div class='pupil'></div></div>";    
   document.getElementById("rightEye").innerHTML = 
   "<div class='circle moveleft'><div class='pupil'></div></div>";
 } else
 if (eyeValue == 'heart') {
    document.getElementById("leftEye").innerHTML = 
    "<div class='heart moveright'></div></div>";    
    document.getElementById("rightEye").innerHTML = 
    "<div class='heart moveleft'></div></div>";
 } else
 if (eyeValue == 'sunglasses') {
    document.getElementById("leftEye").innerHTML = 
    "<div class='eyes3 moveright'></div></div>";    
    document.getElementById("rightEye").innerHTML = 
    "<div class='eyes3 moveleft'></div></div>";
  }else
  if (eyeValue == 'crazy') {
    document.getElementById("leftEye").innerHTML = 
    "<div class='circle moveright'><div class='pupil moveright2'></div></div>";    
    document.getElementById("rightEye").innerHTML = 
    "<div class='circle moveleft'><div class='pupil moveleft2'></div></div>";
  } else
  {document.getElementById("leftEye").innerHTML = 
    "<div class='eyes4'></div><div class='circle2'></div><div class='pupil2'></div></div>";    
    document.getElementById("rightEye").innerHTML = 
    "<div class='eyes4'></div><div class='circle2'></div><div class='pupil2'></div></div>";
  }

}



// Select Nose

function addNose(){ 
 var selectNoseDD = document.getElementById("catNose");
 var noseValue = selectNoseDD.value; 

 if (noseValue == 'triangle'){
    document.getElementById("nose").innerHTML =  
    "<div class='nose'> </div>"; } 
    else
if (noseValue == 'rounded'){
    document.getElementById("nose").innerHTML =  
    "<div class='nose2'> </div>"; } 
    else
    if (noseValue == 'diamond'){
        document.getElementById("nose").innerHTML =  
        "<div class='nose3'> </div>"; } 
        else
         {document.getElementById("nose").innerHTML =  
            "<div class='nose4'> </div>"; } 
       
}



