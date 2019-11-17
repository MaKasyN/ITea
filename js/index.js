
let names = [];
let numOfTeam = 0;
let getNumberToggle = true;
const NUM_REG_EXP = /^[0-9]{1,2}$/;
const NAME_REG_EXP = /^[A-Za-z]+$/;
let team = [];
const OFFICES  = {
    junior: {
        name: 'junior',
        minSalary: 500,
        maxSalary: 1000
    },
    middle: {
        name: 'middle',
        minSalary: 1500,
        maxSalary: 2000
    },
    senior: {
        name: 'senior',
        minSalary: 2500,
        maxSalary: 3000
    },
    other: {
        name: 'oter',
        minSalary: 4000,
        maxSalary: 4500
    }
}



function getNumberOfTeam(){
    const numInput = findElement('#input-num');
    numOfTeam = +numInput.value;
    if(isNumFrom1to99()){
        visibilityContainersToggle();
        getNumberToggle = false;
    } else {
        alertWindowOn('Please enter num of team in [1 - 99] range');
        numInput.value = '';
    }
}

function getName(){
    const nameInput = findElement('#input-name');
    const name = nameInput.value;
    if(isName(name)){
        if(numOfTeam === names.length){
            alertWindowOn ('Team is full!')
        }else{
            deleteRenderArray();
            names.push(name);
            renderNamesArray();
            if(numOfTeam === names.length){
                createTeam();
                showOptionsButtons()
            }
        }
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

function createTeam(){
    team = names.map(function (item, index){
                        return {name: item, info: getOffices(index)};
                    });
                    console.log(team);
}

function getOffices(position){
    position += 1;
    if((position % 5) === 0){
        return {position: OFFICES.senior.name, salary: getSalaryForPosition(OFFICES.senior.minSalary, OFFICES.senior.maxSalary)};
    }else if((position % 4) === 0){
        return {position: OFFICES.middle.name, salary: getSalaryForPosition(OFFICES.middle.minSalary, OFFICES.middle.maxSalary)};
    }else{
        return {position: OFFICES.junior.name, salary: getSalaryForPosition(OFFICES.junior.minSalary, OFFICES.junior.maxSalary)};
    }
}

function  getSalaryForPosition(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  function renderPersonElOFArray(name, position, salary){
    const personCardTemplate = '<div class="person-element-container" onclick="showperson('+ '\'' + name + '\'' + ', ' + '\'' + position + '\'' + ', ' + '\'' + salary + '\'' + ')"><div class="array-element-avatar"></div><div class="array-element-content-container"><p class="content-container-paragraph"><span class="left-column">name:</span><span class="right-column">' + name + '</span></p><p class="content-container-paragraph"><span class="left-column">position:</span><span class="right-column">' + position + '</span></p><p class="content-container-paragraph"><span class="left-column">salary:</span><span class="right-column">' + salary + '</span></p></div></div>';
    renderElOfArray(personCardTemplate);
  }

  function renderNameElOfArray(name){
    const arrayElementTemplate = '<div class="array-element-content-container"><p class="content-container-paragraph"><span class="left-column">name:</span><span class="right-column">' + name + '</span></p></div>';
    renderElOfArray(arrayElementTemplate);
  }

  function renderElOfArray(template){
    const div = document.createElement('div');
    div.className = "arrayElement";
    div.innerHTML = template;
    const renderContainer = findElement('.array-container');
    renderContainer.append(div);
  }

  function renderNamesArray(){
    names.forEach(name => renderNameElOfArray(name));
  }

  function deleteRenderArray(){
    let element = findElement(".array-container");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
  }

  function showOptionsButtons(){
      console.log('gggg');
    const optionsButtonsContainer = findElement('.options-button-container');
    const nameContainer = findElement('.send-button-container');
    visibilityElementToggle(optionsButtonsContainer);
    visibilityElementToggle(nameContainer);
  }

  function showTeam(){
    deleteRenderArray();
    team.forEach(person => renderPersonElOFArray(person.name, person.info.position, person.info.salary));
  }

  function showperson(name, position, salary){
      console.log('hey');
    const personInformation = 'Hello I am: ' + name + ', I\'m ' + position + ' and I earn: ' + salary + '.';
    alertWindowOn(personInformation);
  }
