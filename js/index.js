
let team = [];
let numOfTeam = 0;
let getNumberToggle = true;

function getNumberOfTeam(){
    const numInput = findElement('#input-num');
    const nameInput = findElement('#input-name');
    numOfTeam = +numInput.value;
    visibilityContainersToggle();
    getNumberToggle = false;
}

function getName(){
    const nameInput = findElement('#input-name');
    const name = nameInput.value;
    team.push(name);
    nameInput.value = '';
}

function findElement(selector){
    return document.querySelector(selector);
}

function visibilityElementToggle(element){
    element.classList.toggle('display-none');
}

function visibilityContainersToggle(){
    const numContainer = findElement('#num-container');
    const nameContainer = findElement('#name-container');
    visibilityElementToggle(numContainer);
    visibilityElementToggle(nameContainer);
}

function checkValue(element){
    return element.value === '' ? false : true;
}

function getNameToggle(){
    getNumberToggle ? getNumberOfTeam() : getName();
}