
const app = {};
// const firebase = require('firebase');
// const auth = firebase.auth();

app.events = function(e) {
    
    // when a newsletter nav item is clicked, 
    $('.articleNav a').on('click', function(e) {
        e.preventDefault();

        // remove the color on the a tag on the previously clicked newsletter
        // add the color on the a tag of the current newsletter
        $('.currentNewsletter').removeClass('currentNewsletter');
        $(this).addClass('currentNewsletter');
        
        // grab the id from that item and store it in a variable
        const clicked = $(this).attr('id');
        $('.newsletter.show').removeClass('show');

        // grab the figure with the same id as the variable 
        // add the class of 'show' to the figure with that class
        $(`.newsletter.${clicked}`).addClass('show');
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 750) {
            $('.articleNav').addClass('fixedNav');
            // $('nav div').addClass('visible-title');
        }
        else {
            $('.articleNav').removeClass('fixedNav');
            // $('nav div').removeClass('visible-title');
        }
    });

    // READ MORE OF AN ARTICLE
    $('#continueReading').on('click', function(e) {
        e.preventDefault();
        $('.hidden').removeClass('hidden');
        $('#continueReading').addClass('hidden');
        $('#collapse').removeClass('hidden')
    });

    $('#collapse').on('click', function(e) {
        e.preventDefault();
        $('.firstHidden').addClass('hidden');
        $('#continueReading').removeClass('hidden');
        $('#collapse').addClass('hidden')

    });
}

app.checkUser = function() {

    // USERS WHO ARE NOT LOGGED IN CANNOT ACCESS ANY PAGES

}

// app.firebaseInit = function() {
    
//     // LOGIN EVENT
//     if (document.getElementById('login')) {
//         const btnLogin = document.getElementById('login');
//         const txtEmail = document.getElementById('email');
//         const txtPassword = document.getElementById('password');
//         btnLogin.addEventListener('click', e => {
//             console.log("submit clicked")
//             const email = txtEmail.value;
//             const password = txtPassword.value;
    
//             console.log(email, password);
    
//             // SIGN IN
//             const promise = auth.signInWithEmailAndPassword(email, password);
//             promise.catch(e => {
//                 $('.error.loginError').html(`*${e}`);
//             });
    
//             auth.onAuthStateChanged(user => {
//                 if (user) {
//                     window.location.replace('home.html');
//                     $('#firebaseUser').html(`<p>${user.email}</p>`);
//                 } else {
//                     console.log('not logged in');
//                 }
//             });
//         });
//     }


//     // CREATE ACCOUNT EVENT

//     if (document.getElementById('createAccount')) {
//         const btnCreateAccount = document.getElementById('createAccount');
//         const txtEmail = document.getElementById('email');
//         const txtPassword = document.getElementById('password');
//         btnCreateAccount.addEventListener('click', e => {
//             $('.error.createAccountError').empty();
    
//         // TODO: CHECK FOR REAL EMAIL

//             let email = txtEmail.value;
//             let password = txtPassword.value;
//             let errorLogged = '';

//             // CREATE ACCOUNT

//             firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
//                 var errorMessage = error.message;
//                 $('.error.createAccountError').html(`*${errorMessage}`);
//                 errorLogged = errorMessage;
//             })
//             .then(function(){
//                 if (errorLogged.length === 0) {
//                     window.location.replace('index.html')
//                 }
//             })
//         });
//     };


    // LOGOUT BUTTON

//     if (document.getElementById('logout')) {
//         const btnLogout = document.getElementById('logout');
//         btnLogout.addEventListener('click', e => {
//             auth.signOut();
//         });
//     };
// };

app.init = function() {
    // app.firebaseInit();
    app.checkUser();
    app.events();
};

$(function() {
    app.init()  
});