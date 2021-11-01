'use strict'

const $ = document.querySelector.bind(document);

function showImage(){
    var breed = this.innerText;
    var priorSelected = $('.selected');
    if(priorSelected){
        priorSelected.className = '';
    }
    this.classList.add('selected');

    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(r => r.json())
    .then( data => {
        $('#dog').src = data.message;
    })
}

function MakeButton(dog){
    var btn = document.createElement('button');
    btn.innerText = dog;
    $('#buttons').appendChild(btn);
    btn.onclick = showImage;
}

window.onload = function() {
this.fetch('https://dog.ceo/api/breeds/list/all')
.then(r => r.json())
.then((data) => {
    Object.keys(data.message)
    .forEach(MakeButton) 
});

onLogin(user => {
    if(user){
        //user just logged in
        $('#addCommentDiv').style.display = 'block';
        $('#loginDiv').style.display = 'none';
        $('#signupDiv').style.display = 'none';
    }else{
        //user just logged out
        $('#addCommentDiv').style.display = 'none';
        $('#loginDiv').style.display = 'block';
    }
});

if(isLoggedIn()){
    $('#addCommentDiv').style.display = 'block';
}else{
    $('#loginDiv').style.display = 'block';
}

$('#loginLink').onclick = function(){
    $('#loginDiv').style.display = 'block';
    $('signupDiv').style.display = 'none';
}

$('#signupLink').onclick = function(){
    $('#loginDiv')
}

$('#logout').onclick = function(){
    logout();
}

$('#loginBtn').onClick = function(){
    login( $('#email').value, $('#password').value)
    .catch( err => $('.error').innerText = err.message);
}

$('#registerBtn').onClick = function(){
    signup( $('#emailReg').value, $('#passwordReg').value)
    .catch( err => $('.error').innerText = err.message);
}

$('#addCommentBtn').onclick = function(){
    addComment( $('#newComment').value )
    .then( () => {
        createComment({comment: $('#newComment').value});
        $('#newComment').value = '';
    })
    .catch( err => $('.error').innerText = err.message )
}

}

