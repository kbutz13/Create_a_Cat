

var background =['orange', 'black', 'purple', 'green', 'gray', 'white', 'rainbow'];
var ears =['orange', 'black', 'purple', 'green', 'gray', 'white'];
var mouth =['smile','tongue', 'surprise', 'widegrin'];
var eyes =['round', 'heart', 'sunglasses', 'crazy', 'classic', 'star']
var nose =['triangle', 'rounded','diamond','cone']
var accessory =['bowtie', 'collar', 'spike_collar']


function makeRandomCat() {
 var bgRandomValue = background[Math.floor(Math.random() * background.length)];
 document.getElementById("catColor").value = bgRandomValue;
 changeBgColor();
 console.log(bgRandomValue);

 var earsRandomValue = ears[Math.floor(Math.random() * ears.length)];
 document.getElementById("catEars").value = earsRandomValue;
 changeEarColor();
 console.log(earsRandomValue);

 var mouthRandomValue = mouth[Math.floor(Math.random() * mouth.length)];
 document.getElementById("catMouth").value = mouthRandomValue;
 addMouth();
 console.log(mouthRandomValue);
 
 var eyesRandomValue = eyes[Math.floor(Math.random() * eyes.length)];
 document.getElementById("catEyes").value = eyesRandomValue;
 addCatEyes();
 console.log(eyesRandomValue);
 
 var noseRandomValue = nose[Math.floor(Math.random() * nose.length)];
 document.getElementById("catNose").value = noseRandomValue;
 addNose();
 console.log(noseRandomValue);
 
 var accessoryRandomValue = accessory[Math.floor(Math.random() * accessory.length)];
 document.getElementById("catAccessories").value = accessoryRandomValue;
 addAccessories();
 console.log(accessoryRandomValue);
 
}

