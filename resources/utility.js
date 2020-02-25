var nuNum1 = 0;
var nuNum2 = 0;
var stSelected = "suma";

function OpMat(){
    var nuResult;
    if(stSelected == "suma"){
        nuResult=nuNum1+nuNum2;
    }
    else if(stSelected == "resta"){
        nuResult=nuNum1-nuNum2;
    }
    else if(stSelected == "multiplicacion"){
        nuResult=nuNum1*nuNum2;
    }
    else if(stSelected == "division"){
        nuResult=nuNum1/nuNum2;
    }
    return nuResult;
}

function handleInput(stInput){
    if(stInput=="inputNum1"){
        nuNum1=parseFloat(document.getElementById(stInput).value);
    }
    else{
        nuNum2=parseFloat(document.getElementById(stInput).value);
    }
    document.getElementById("txtResult").innerHTML=(OpMat()).toFixed(2);
}



function selectOp(){
    var e = document.getElementById("stSelected");
    stSelected = e.options[e.selectedIndex].value;
    document.getElementById("txtResult").innerHTML=(OpMat()).toFixed(2);
}