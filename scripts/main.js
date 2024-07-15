

function C() {
    document.getElementById('result').value = " ";
}


function result() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } 
    catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

