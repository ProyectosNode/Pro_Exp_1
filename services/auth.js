const firebase = require("firebase");
const varConfig = require('../config/ConfigFirebase.json')
require("firebase/auth");

// Initialize Firebase
firebase.initializeApp(varConfig);


function authenticateEmailPassword (email, password ) {
   firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
            }
        )
}

module.exports = {
    authenticateEmailPassword: authenticateEmailPassword
}
