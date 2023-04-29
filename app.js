// create a result variable
let result = document.getElementById("answer").value;

// function to add answer       

function addAnswer (numb) {
    result += numb;

    // update the answer
    document.getElementById("answer").value = result;
}
// function to calculate
function calculate() {
    result = eval(result);
    document.getElementById("answer").value = numbWithCommas(result);
}
// function to delete
function deleteButton() {
    result = result.slice(0, result.length - 1);
    document.getElementById("answer").value = result;
}
// function to clear
function clearAll() {
    result = "";
    document.getElementById("answer").value = "";
}

// function to add comma to result
function numbWithCommas(x) {
    // add a thousand separator to result
    return x.toLocaleString("en-US", {useGrouping:true, groupingSeperator: "," || "."});

}