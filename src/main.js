 function fast(element) {
     let hide = document.getElementById('hidden1');
     let extend = document.getElementById('extend');
     extend.className = extend.className.replace(" active", "");
     hide.style.display = "none";
     element.className += " active";

 }

 function extend(element) {
    let extend = document.getElementById('hidden1');
    let fast = document.getElementById('fast');
    fast.className = fast.className.replace(" active", "");
    extend.style.display = "block";
    element.className += " active";
 }

 function showInsurance() {
    let insurance_form = document.getElementById('insurance_form');
    let insurance = document.getElementById('insurance_pflicht');
    let insurancep = document.getElementById('insurance_private');
    let insurancep2 = document.getElementById('insurance_private2');

     if(insurance_form.selectedIndex === 1){
        insurance.style.display = "none";
        insurancep.style.display = "flex";
        insurancep2.style.display = "flex";
     }
     if(insurance_form.selectedIndex === 2 | insurance_form.selectedIndex === 0){
        insurance.style.display = "";
        insurancep.style.display = "none";
        insurancep2.style.display = "none";
     }

 }

 function showPInsurance(){
     alert("test");
     let insurance = document.getElementById('insurance_pflicht');
     insurance.style.display = "none";
 }
