
function getAddition() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let resutl = number1 + number2;
    console.log("Kết quả "+ resutl);
    document.getElementById("resutl").innerText=resutl;
}
function getSubtraction() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let resutl = number1 - number2;
    console.log("Kết quả "+ resutl);
    document.getElementById("resutl").innerText=resutl;
}
function getMutiplication() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let resutl = number1 * number2;
    console.log("Kết quả "+ resutl);
    document.getElementById("resutl").innerText=resutl;
}
function getDivision() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let resutl = number1 / number2;
    console.log("Kết quả "+ resutl);
    document.getElementById("resutl").innerText=resutl;
}