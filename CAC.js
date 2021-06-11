//Select background color
function changeBgColor(){ 
  var selectBGColor = document.getElementById("catColor");
  var BGValue = selectBGColor.value; 
  var face = document.getElementById("catBox");
    
      if (BGValue == 'orange'){
      face.className = "orange";
      }

      else 
      if (BGValue == 'black'){
      face.className = 'black';
      }
      
      else 
      if (BGValue == 'purple'){
      face.className = 'purple';
      }

      else 
      if (BGValue == 'green'){
      face.className = 'green';
      }

      else 
      if (BGValue == 'gray'){
      face.className = 'gray';
      }
        
      else 
      if (BGValue == 'white'){
      face.className = 'white';
      }
  
       //<===rainbow===>   
      else {
      face.className = 'rainbow';
      }
  
  }


  //Select ear color
function changeEarColor(){ 
 var selectEarsDD = document.getElementById("catEars");
 var earValue = selectEarsDD.value; 
 var leftEar = document.getElementById("earLeft");
 var rightEar = document.getElementById("earRight");
    
      if (earValue == 'orange'){
      leftEar.innerHTML =
      '<div class="orangeEarLeft"> </div>';
      rightEar.innerHTML =  
      '<div class="orangeEarRight"> </div>';
      }

      else 
      if (earValue == 'black'){
        leftEar.innerHTML =
        '<div class="blackEarLeft"> </div>';
        rightEar.innerHTML =  
        '<div class="blackEarRight"> </div>';
      }
      
      else 
      if (earValue == 'purple'){
        leftEar.innerHTML =
        '<div class="purpleEarLeft"> </div>';
        rightEar.innerHTML =  
        '<div class="purpleEarRight"> </div>';
      }

      else 
      if (earValue == 'green'){
        leftEar.innerHTML =
        '<div class="greenEarLeft"> </div>';
        rightEar.innerHTML =  
        '<div class="greenEarRight"> </div>';
      }

      else 
      if (earValue == 'gray'){
        leftEar.innerHTML =
        '<div class="grayEarLeft"> </div>';
        rightEar.innerHTML =  
        '<div class="grayEarRight"> </div>';
      }
        
      else {      
        leftEar.innerHTML =
        '<div class="whiteEarLeft"> </div>';
        rightEar.innerHTML =  
        '<div class="whiteEarRight"> </div>';
      }
  
      
  
  }  

// Select Mouth

function addMouth(){ 
 var selectMouthDD = document.getElementById("catMouth");
 var mouthValue = selectMouthDD.value; 
 var mouth =  document.getElementById("mouth");
 
       if (mouthValue == 'smile'){
       mouth.innerHTML =  
       "<div class='mouth'></div>"; 
       }
      
       else 
       if (mouthValue == 'tongue'){
       mouth.innerHTML =  
       "<div class='mouth2 mouth2a'> </div>"; 
       }
    
       else 
       if (mouthValue == 'surprise'){
       mouth.innerHTML =  
       "<div class='mouth3'> </div>"; 
       }
    
       else {
       mouth.innerHTML =  
       "<div class='mouth4'> </div>";
      }
  }


// Select Eyes

function addCatEyes(){ 
 var selectEyesDD = document.getElementById("catEyes");
 var eyeValue = selectEyesDD.value; 
 var leftEye = document.getElementById("leftEye");
 var rightEye = document.getElementById("rightEye");
 
      if (eyeValue == 'round') {
      leftEye.innerHTML = 
      "<div class='circle moveright'><div class='pupil'></div></div>";    
      rightEye.innerHTML = 
      "<div class='circle moveleft'><div class='pupil'></div></div>";
      } 
      
      else
      if (eyeValue == 'heart') {
      leftEye.innerHTML = 
      "<div class='heart moveright'></div></div>";    
      rightEye.innerHTML = 
      "<div class='heart moveleft'></div></div>";
      } 
      
      else
      if (eyeValue == 'sunglasses') {
      leftEye.innerHTML = 
      "<div class='eyes3 moveright'></div></div>";    
      rightEye.innerHTML = 
      "<div class='eyes3 moveleft'></div></div>";
      } 
      
      else
      if (eyeValue == 'crazy') {
      leftEye.innerHTML = 
      "<div class='circle moveright'><div class='pupil moveright2'></div></div>";    
      rightEye.innerHTML = 
      "<div class='circle moveleft'><div class='pupil moveleft2'></div></div>";
      } 
      
      else 
      if (eyeValue == 'classic'){
      leftEye.innerHTML = 
      "<div class='eyes4'></div><div class='circle2'></div><div class='pupil2'></div></div>";    
      rightEye.innerHTML = 
      "<div class='eyes4'></div><div class='circle2'></div><div class='pupil2'></div></div>";
      }

      else {     
      leftEye.innerHTML = 
      "<div class='star moveright'> </div>";    
      rightEye.innerHTML = 
      "<div class='star moveleft'>  </div>";
      } 

  }


// Select Nose

function addNose(){ 
 var selectNoseDD = document.getElementById("catNose");
 var noseValue = selectNoseDD.value; 
 var nose = document.getElementById("nose");

        if (noseValue == 'triangle'){
        nose.innerHTML =  
        "<div class='nose'> </div>"; 
        } 

        else
        if (noseValue == 'rounded'){
        nose.innerHTML =  
        "<div class='nose2'> </div>"; 
        } 
        
        else
        if (noseValue == 'diamond'){
        nose.innerHTML =   
        "<div class='nose3'> </div>"; 
        } 

        else {
          nose.innerHTML =  
          "<div class='nose4'> </div>"; 
        } 
  }

// <---------Add accessories----------------->
function addAccessories(){ 
  var selectAccessory = document.getElementById("catAccessories");
  var accessoryValue = selectAccessory.value; 
  var accessoryBoxL = document.getElementById("accessBoxL");
  var accessoryBoxR = document.getElementById("accessBoxR");

         if (accessoryValue == 'bowtie'){
         accessoryBoxL.innerHTML =  
         "<div class='bowtieleft'></div>"; 
         accessoryBoxR.innerHTML =
         "<div class='bowtieright'></div>";
          } 
 
         else
         if (accessoryValue == 'collar'){
          accessoryBoxL.innerHTML =  
         "<div class='collar'> </div><div class='diamondCollar'> </div>"; 
         accessoryBoxR.innerHTML =
         "<div></div>";
         } 
         
         else {
          accessoryBoxL.innerHTML =   
         "<div class='spikeCollar'> </div><div class='accessoryBox1'><div class='spike1'> </div><div class='spike2'> </div><div class='spike3'></div><div class='spike4'> </div></div>"; 
         accessoryBoxR.innerHTML =
         "<div></div>";
         } 
 
   }
 


