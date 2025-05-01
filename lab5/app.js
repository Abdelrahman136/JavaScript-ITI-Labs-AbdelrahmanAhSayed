let count = 1;
let slideShow = document.getElementById("slider");
let nextBtn = document.getElementById("next-btn").addEventListener('click', next);
let previousBtn = document.getElementById("previous-btn").addEventListener('click', previous);
let slideShowBtn = document.getElementById("slideshow-btn").addEventListener('click', sliderShow);
let stopBtn = document.getElementById("stop-btn").addEventListener('click', stop);
let students = []
// ---------------------------------------------------------
slideShow.style.backgroundImage = 'url("imgs/image1.jpg")'
// slideShow.style.backgroundRepeat = 'norepeat'
function next() {
    if(count++ >= 5) count = 1;
    slideShow.style.backgroundImage = `url("imgs/image${count}.jpg")`
}
function previous() {
    if(count-- <= 1) count = 5;
    slideShow.style.backgroundImage = `url("imgs/image${count}.jpg")`
}
let sliderInterval;
let flag = true;
function sliderShow() {
    //next();
    sliderInterval = setInterval(next, 3000);
    console.log("Slider started with interval ID: ", sliderInterval);
}
function stop() {
    clearInterval(sliderInterval)
    console.log("Slider stopped with interval ID: ", sliderInterval);
  sliderInterval = undefined;
}
//----------------------------------------------------------------------------
const departmentsRadioBtns = document.querySelectorAll('input[name="dp"]');
const std_name = document.getElementById("std_name")
const std_grade = document.getElementById("std_grade")
const add_btn = document.getElementById("Add").addEventListener('click', getDepartmentOption)
const tbody = document.getElementById("stduents")
function getDepartmentOption() {
    let selectedValue;
    for (const departOption of departmentsRadioBtns) {
        if (departOption.checked) {
            selectedValue = departOption.value;
            break;
        }
    }
    let stdName = std_name.value;
    let stdGrade = std_grade.value;
    // console.log(stdName, stdGrade, selectedValue);
    // console.log(departmentsRadioBtns)
    addToTable(stdName, stdGrade, selectedValue);
    // return selectedValue;
}

function addToTable(stdName, stdGrade, dept){
    let studentObj = {
        name: null,
        grade: 0,
        department: null,
        accepted: true
    }
    console.log(stdName, stdName.length, stdName != "")
    if(stdName.length > 0 ) {
        if(!students.includes(stdName)) {
            console.log("Hi")
            stdName = stdName.charAt(0).toUpperCase() + stdName.substring(1);
            studentObj.name=stdName;
        }
    }
    else {
        console.log("name")
        studentObj.accepted = false;
    }
    if (stdGrade >=0 && stdGrade <= 100) {
        studentObj.grade = stdGrade
    }
    else{
        console.log("grade")
        studentObj.accepted = false;
    }
    studentObj.department = dept
    students.push(studentObj)
    
    console.log(studentObj)
    console.log(students)

    if(studentObj.accepted) {students.push(); renderTable()}
}

function renderTable() {
    console.log(students[0], "render")
    let row = document.createElement("tr")
    let cell_1 = document.createElement("td");
    cell_1.innerText = students[students.length-1].name;
    row.appendChild(cell_1)
    let cell_2 = document.createElement("td");
    cell_2.innerText = students[students.length-1].grade;
    row.appendChild(cell_2)
    let cell_3 = document.createElement("td");
    cell_3.innerText = students[students.length-1].department;
    if(students[students.length-1].department == "SD") {cell_1.classList.add("SD"); cell_2.classList.add("SD"), cell_3.classList.add("SD")}
    else if(students[students.length-1].department == "OS") {cell_1.classList.add("OS"); cell_2.classList.add("OS"), cell_3.classList.add("OS")}
    else if(students[students.length-1].department == "EL") {cell_1.classList.add("EL"); cell_2.classList.add("EL"), cell_3.classList.add("EL")}
    row.appendChild(cell_3)
    tbody.appendChild(row)   
}