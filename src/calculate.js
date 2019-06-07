function calculateTotal(){

    let brutto1 = 0.00;
    var lohnsteuer = 0.00;
    var lohnstclass = document.getElementById('taxclass').value;

    function calclohnsteuer(brutto, lohnstclass) {


        if (brutto * 12 >= 9636 && lohnstclass < 5){
            lohnsteuer = 132.00
        }
    }

    let result = document.getElementById('result');
    let abzug = document.getElementById('abzug');
    let brutto = document.getElementById('salary');
    brutto1 = brutto.value;

    calclohnsteuer(brutto1, lohnstclass);
    console.log(lohnsteuer);

    let kassensatz = document.getElementById('kasse').value;
    console.log(kassensatz);

    result.innerHTML = formatcurrency(brutto1);
    abzug.innerHTML = "-" + formatcurrency(lohnsteuer);


    function formatcurrency(inputnumber){
        inputnumber = parseFloat(inputnumber).toFixed(2).toString().replace(/[.]/,",") + " €";
        return inputnumber;
    }
}
