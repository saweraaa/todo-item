
var button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function(){
    var inputField = document.getElementsByTagName('input')[0].value;
    var newList = document.createElement('li');
    newList.innerHTML = inputField;
    var parentNode = document.getElementsByTagName('ul')[0];
    parentNode.appendChild(newList);
})