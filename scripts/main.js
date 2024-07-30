

 function Clear() {
            let input=document.getElementById('result');
            input.value= " ";
            
        }

function calculateResult() {
    let input=document.getElementById('result')
    try {
        input.value = eval(input.value);
    } 
    catch (error) {
        input.value = 'Error';
    }
}

