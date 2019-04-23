"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  Dajah Medina
   Date:    4.19.19
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/
window.addEventListener('load', function () {
      calcCart();
      regSubmit.onclick = sessionTest;
      document.getElementById("fnBox").oninput = calcCart;
      document.getElementById("inBox").oninput = calcCart;
      document.getElementById("groupBox").oninput = calcCart;
      document.getElementById("mailBox").oninput = calcCart;
      document.getElementById("phoneBox").oninput = calcCart;
      document.getElementById("banquetBox").oninput = calcCart;
      document.getElementById("sessionBox").onchange = calcCart;
      document.getElementById("mediaCB").onclick = calcCart;
});

function sessionText() {
      var sessionBox = document.getElementById("sessionBox");
      if (sessionBox.selectIndex === -1) {
            sessionBox.setCustomValidity("Select a Session Pakage");
            sessionBox.setCustomValidity("");
      }
};

function calcCart() {
      var confName = document.getElementById("fnbox").value + "" + document.getElementById("lnBox").value;
      var confGroup = document.getElementById("groupBox").value;
      var confMail = document.getElementById("mailBox").value;
      var confPhone = document.getElementById("phoneBox").value;
      var confBanquet = document.getElementById("banquetBox");
      var confBanquetCost = banquetGuest * 55;


}
if () {
      var confSession = document.forms.regForm.elements.sessionBox[selectedIndex].textContext;
      var confSessionCost = document.forms.regForm.elements.sessionBox.value;
} else {
      confession = "";
      confSessionCost = 0;
}