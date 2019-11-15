
let team = [];
let numOfTeam = 0;
let getNumberToggle = true;

function getNumberOfTeam(){
    const numInput = findElement('#input-num');
    if(checkValue(numInput)){
        numOfTeam = +numInput.value;
        visibilityContainersToggle();
        getNumberToggle = false;
    }else{
        alertWindowOn('Please enter number of team.')
    }
}

function getName(){
    
    const nameInput = findElement('#input-name');
    if(checkValue(nameInput)){
        const name = nameInput.value;
        numOfTeam === team.length ? team.push(name) : alertWindowOn('Team is full!');
        nameInput.value = '';
    }else{
        alertWindowOn('Please enter name of person.')
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