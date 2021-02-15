function calc(){
    var a =parseInt(document.querySelector("#val1").value);
    var b =parseInt(document.querySelector("#val2").value);
    var op = document.querySelector("#operator").value;
    var calculate;
    if(op == "add"){
        calculate = a+b;
    } else if(op == "sub"){
        calculate = a-b;
    }
    else if(op == "div"){
        calculate = a/b;
    }
    else{
        calculate = a*b;
    }

    document.querySelector("#res").innerHTML = calculate;
}
