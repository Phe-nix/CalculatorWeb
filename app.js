function clearNumber() {
    document.getElementById("result").value = "";
}

function display(value) {
    var output = ''
    output += document.getElementById("result").value
    limit = output.length
    if ((value == '.' || value == '/' || value == '-' || value == '+' || value == '*') && limit == 0) {
        var limit = 0
        document.getElementById("result").value = "";
    }
    else
    {
        document.getElementById("result").value += value;
    }
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}