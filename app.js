const phoneDecrement=document.getElementById("phone-decrement"),phoneIncrement=document.getElementById("phone-increment"),caseDecrement=document.getElementById("case-decrement"),caseIncrement=document.getElementById("case-increment"),totalCost=document.getElementById("totalCost"),tax=document.getElementById("tax"),grandTotal=document.getElementById("grandTotal");let price,phonePrice=1219,casePrice=59;const handelCountChange=(e,n)=>{const t=document.getElementById(e+"-input"),c=document.getElementById(e+"-price");let a=parseInt(t.value),o=1;o=!0===n?a+1:!1===n&&a>0?a-1:0,t.value=o,"phone"===e&&(phonePrice=price=1219*o),"case"===e&&(casePrice=price=59*o),c.innerText=price,calcTotal()},calcTotal=()=>{let e=phonePrice+casePrice;totalCost.innerText=e;let n=Math.round(.01*e);tax.innerText=n;let t=e+n;grandTotal.innerText=t};phoneIncrement.addEventListener("click",()=>{handelCountChange("phone",!0)}),phoneDecrement.addEventListener("click",()=>{handelCountChange("phone",!1)}),caseIncrement.addEventListener("click",()=>{handelCountChange("case",!0)}),caseDecrement.addEventListener("click",()=>{handelCountChange("case",!1)});