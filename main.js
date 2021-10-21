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

}

