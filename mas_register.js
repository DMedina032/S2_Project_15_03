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
      document.getElementById("fnBox").onblur = calcCart;
      document.getElementById("inBox").onblur = calcCart;
      document.getElementById("groupBox").onblur = calcCart;
      document.getElementById("mailBox").onblur = calcCart;
      document.getElementById("phoneBox").onblur = calcCart;
      document.getElementById("banquetBox").onblur = calcCart;
      document.getElementById("sessionBox").onchange = calcCart;
      document.getElementById("mediaCB").onclick = calcCart;
});

function sessionText() {
      var sessionBox = document.getElementById("sessionBox");
      if (sessionBox.selectIndex === -1) {
            sessionBox.setCustomValidity("Select a Session Pakage");
      } else {
            sessionBox.setCustomValidity("");
      }
};

function calcCart() {
      session.sessionStorage.confName = document.getElementById("fnbox").value + "" + document.getElementById("lnBox").value;
      session.sessionStorage.confGroup = document.getElementById("groupBox").value;
      session.sessionStorage.confMail = document.getElementById("mailBox").value;
      session.sessionStorage.confPhone = document.getElementById("phoneBox").value;
      session.sessionStorage.confBanquet = document.getElementById("banquetBox");
      var confBanquetCost = banquetGuest * 55;
      var selectedIndex = document.getElementById("sessionBox").sessionBox;

}
if () {
      var confSession = document.forms.regForm.elements.sessionBox[selectedIndex].textContext;
      var confSessionCost = document.forms.regForm.elements.sessionBox.value;
} else {
      confession = "";
      confSessionCost = 0;
}
if (document.getElementById("mediaCD")) {
      confPack = "yes";
      confPackCost = 115;
} else {
      confPack = "no";
      confPackCost = 0;
};

sessionStorage.confTotal = parseFloat(sessionStorage.confBanquetCost) + parseFloat(sessionStorage.confSessionCost) + parseFloat(sessionStorage.confPackCost);

writeSessionValues();

function writeSessionValues() {
      document.getElementById("regName").textContent = sessionStorage.confName;
      document.getElementById("regGroup").textContent = sessionStorage.confGroup;
      document.getElementById("regEmail").textContent = sessionStorage.confMail;
      document.getElementById("regPhone").textContent = sessionStorage.confPhone;
      document.getElementById("regSession").textContent = sessionStorage.confSession;
      document.getElementById("regBanquet").textContent = sessionStorage.confBanquet;
      document.getElementById("regPack").textContent = sessionStorage.confPack;
}