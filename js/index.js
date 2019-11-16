
let team = [];
let numOfTeam = 0;
let getNumberToggle = true;
const NUM_REG_EXP = /^[0-9]{1,2}$/;
const NAME_REG_EXP = /^[A-Za-z]+$/;

function getNumberOfTeam(){
    const numInput = findElement('#input-num');
    numOfTeam = +numInput.value;
    if(isNumFrom1to99()){
        visibilityContainersToggle();
        getNumberToggle = false;
    } else {
        alertWindowOn('Please enter num of team in [1 - 99] range');
    }
}

function getName(){
    const nameInput = findElement('#input-name');
    const name = nameInput.value;
    if(isName(name)){
        numOfTeam === team.length ? alertWindowOn('Team is full!') : team.push(name);
        nameInput.value = '';
    } else {
        alertWindowOn('In name must be more 3 LETTERS!');
    }
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

async function alertWindowOn(alertStr){
    alertWindowToggle()
    const alertParagraph = findElement('.alert-paragraph');
    alertParagraph.innerHTML = alertStr;
}

function alertWindowToggle(){
    const alertContainer = findElement('.alert-container');
    visibilityElementToggle(alertContainer);
}

function isNumFrom1to99(){
    return (numOfTeam < 1) ? false : NUM_REG_EXP.test(numOfTeam) ? true : false;
}

function isName(name){
    return (name.length < 3) ? false : NAME_REG_EXP.test(name) ? true : false;
}