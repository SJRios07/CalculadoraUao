var nuNum1;
var nuNum2;
var nuOp;

function OpMatematica(){
    var nuResultado;
    if(nuTipoOp == 1){
        nuResultado=nuNum1+nuNum2;
    }
    else if(nuTipoOp == 2){
        nuResultado=nuNum1-nuNum2;
    }
    else if(nuTipoOp == 3){
        nuResultado=nuNum1*nuNum2;
    }
    else if(nuTipoOp == 4){
        nuResultado=nuNum1/nuNum2;
    }
    return nuResultado;
}