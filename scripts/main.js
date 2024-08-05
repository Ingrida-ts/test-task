function ShowNumber(clicked_object) {
   let ThisNumber=clicked_object.getAttribute('value');
   let input=document.getElementById('result');
   if (input.value==="0") {
    input.value=ThisNumber;
} else {
        input.value+=ThisNumber;  
    }
    }


    function ShowMuth(clicked_object){
        let ThisMuth=clicked_object.getAttribute('value');
        let input=document.getElementById('result');
        let Last=document.getElementById('result').value.slice(-1);
        
      if (Last==="+"||Last==="-"||Last==="÷"||Last==="×"){
           input.value=input.value.slice(0,-1)+ThisMuth;
    } else{
        input.value+=ThisMuth;
    }
    }


 function Clear() {
            let input=document.getElementById('result');
            input.value= "0";  
        }

        
function calculateResult() {
    let input=document.getElementById('result').value.replace(/×/g, '*');
     Result=input.replace(/÷/g, '/');

    try {
        document.getElementById('result').value = eval(Result);
    } 
    catch (error) {
        document.getElementById('result').value = 'Error';
    }
}