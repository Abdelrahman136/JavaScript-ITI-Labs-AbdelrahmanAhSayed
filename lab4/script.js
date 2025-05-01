// 1- create a web page that open existing small window and scroll it’s
// content to the end . Then from console try the following:
var myPopup = window.open('http://www.google.com', 'popupWindow', 'width=600,height=400');


// 1- a- check if the small window still opened, close it.
// if(!myPopup.closed){

//     console.log("still opening...")
//     setTimeout(()=> {myPopup.close(); console.log("closed");} , 3000);
//     myPopup.close()
// }
// setTimeout(()=> {
//     if(!myPopup.closed){
//         myPopup.close()
//     }
//     console.log("closed");
// }, 3000)

if(!myPopup.closed){
    myPopup.close()
}

// 1- b- Try to write your name on the small window document using
// document.write (what is the problem).
myPopup.document.write("ABdelrahman Ahmed Sayed"); // Rewite site
// ----------------------------------------------------------------------------------

// 2- a- Find all images in page by two ways (document default
// collection and document methods).
let imagesFirstWay = document.getElementsByTagName("img");
// let imagesSecondtWay = document.getImages();

// 2- b- Find all options for City drop down list.
let options = document.querySelectorAll("select option");

// 2- c- Find all rows(tds) for second table in page.
let rows = document.getElementsByTagName("tr");

// 2- d- Find all elements that contain class name fontBlue and BGrey
let elementsWithClass = document.querySelectorAll(".fontBlue BGrey");

// 4- 4- Display the date with time on the document title
// (document.title) which changed every second to show time with
// date.
// Note: use .toLocalString() method of the Date Object.

// ----------------------------------------------------------------------------
function displayDateTime(){
    var now = new Date();
    var dateTimeString = now.toLocaleString('en-us')
    console.log(dateTimeString)
    document.title = dateTimeString
}
// setInterval( displayDateTime, 1000);
// ------------------------------------------------------------
let form = document.getElementsByTagName("form")[0];
let obj = {};
form.onsubmit = function(event) {
    event.preventDefault();
    console.log("in form");
    let searchQuery = document.location.search;
    console.log(searchQuery);
    searchQuery = searchQuery.substring(1);
    let params = searchQuery.split("&");
    params.forEach(p => {
        let keyValue = p.split("=");
        let key = keyValue[0];
        let value = keyValue[1]
        obj[key] = value;
    })
    console.log(obj)
}

// function handleFormSubmit(event) {
//     event.preventDefault();

// }

// let obj = {};
// form.onsubmit((e)=>{
//     console.log("in form");
//     // e.preventDefault();
    
//     let searchQuery = document.location.search;
//     console.log(searchQuery);
//     searchQuery = searchQuery.substring(1);
//     let params = searchQuery.split("&");
//     params.forEach(p => {
//         let keyValue = p.split("=");
//         obj.keyValue[0] = keyValue[1];
//     })
//     console.log(obj)
// })