"use strict"
let i;
let firmLink;

firmLink = document.getElementsByClassName("catalog-firm__link");
for (i = 0; i < firmLink.length; i++) {
    firmLink[i].className = firmLink[i].className.replace(" active", "");
}
