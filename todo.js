var array = new Array()

// document.write(title)
var serial = 1
function myfunc(e) {
    e.preventDefault()
    var title = document.getElementById("title")
    var des = document.getElementById("descrp")

    var date = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // Chnage date to simple date and simple time
    var simpleDate = date.toLocaleDateString(undefined, options)
    var simplTime = date.toLocaleTimeString()
    //  print simple date and time to 12 hours format
    if (title.value === "" && des.value === "") {
        console.log("Both Input fields are empty")
    }
    else {
        // console.log(title.value, " ", des.value)
        document.getElementById("tbody").innerHTML += `
 <tr>
    <th scope="row">${serial++}</th>
    <td ondblclick="edited_title()" class="title_td">${title.value}</td>
    <td ondblclick="edited_desc()" class="descr_td">${des.value}</td>
    <td>${simpleDate} </td>
    <td>${simplTime} </td>
    <td class="text-right ">
    <img class="mr-3 remove" width="35px" src="cross-flat.png" alt="" onclick="deleted(event)">
    </td>
</tr>`
        title.value = ``
        des.value = ``
    }
}

function addData() {
    var title = document.getElementById("title")
    var des = document.getElementById("descrp")
    title.value = ``
    des.value = ``
}

// var table = document.getElementById("data")


function deleted(e) {
    console.log(e.target.parentNode.parentNode.innerHTML = ``)
    flag=true

}

function dltAll() {
    var title = document.querySelector("#tbody").innerHTML = "";
    serial = 1;
}


var para_title = document.createElement("input")
var para_desc = document.createElement("input")
var div = document.createElement('div')
var div1 = document.createElement('div')
var image = document.createElement('img')
var flag = true

//  Edit fucntion that applies on Title 
function edited_title() {
    if (flag)  {
    div.appendChild(para_title)
    div.appendChild(image)
    div.setAttribute("class","maindiv")
    // image setting attributes
    image.setAttribute("src", "images/edited.png")
    image.setAttribute("title", "Click To Save")
    image.setAttribute("class", "edit-image")
    image.setAttribute("onclick", "change_title()")
    // setting attributes of input tag in created div
    para_title.setAttribute('class', "para")
    para_title.setAttribute('size', "4")
    para_title.setAttribute('maxlength', "10")
    inner_title = event.target.parentNode.childNodes[3]
    // input.setAttribute("class", "second-td")
    console.log("asli wala input: ", inner_title)
    before = inner_title.textContent
    console.log("value of input before applying input tag: ", before)
    inner_title.textContent = ""
    console.log("input ka andar wala metruial remove krne k baad: ", inner_title.innerHTML)
    inner_title.appendChild(div)
    para_title.value = before
    flag=false
    }
}

// Change Function that applies on title
function change_title() {
    console.log("input.innerHTML Before ", inner_title.textContent)
    if (para_title.value !== '') {
        inner_title.innerHTML = para_title.value
        para_title.value = ''
    }
    else {
        inner_title.innerHTML = before
        console.log("else ", inner_title.innerHTML)
    }
    // console.log(input.innerHTM)
    console.log("input title ki value After click image change ", para_title.value)
    flag=true
}

// edit Function applies on Description
function edited_desc() {
    if (flag)  {
    div1.appendChild(para_desc)
    div1.appendChild(image)
    div1.setAttribute("class","maindiv")
    // image setting attributes
    image.setAttribute("src", "images/edited.png")
    image.setAttribute("class", "edit-image")
    image.setAttribute("onclick", "change_desc()")
    // setting attributes of input tag in created div
    para_desc.setAttribute('class', "para_desc")
    para_desc.setAttribute('size', "4")
    para_desc.setAttribute('maxlength', "10")
    inner_desc = event.target.parentNode.childNodes[5]
    // input.setAttribute("class", "second-td")
    console.log("Oringnal  ", inner_desc)
    before = inner_desc.textContent
    console.log("value of input before applying input tag: ", before)
    inner_desc.textContent = ""
    console.log("input ka andar wala metruial remove krne k baad: ", inner_desc.innerHTML)
    inner_desc.appendChild(div1)
    para_desc.value = before
    // console.log(para_desc.value)
    flag=false
    }
}

function change_desc() {
    console.log("input.innerHTML Before ", inner_desc.textContent)
    if (para_desc.value !== '') {
        inner_desc.innerHTML = para_desc.value
        para_desc.value = ''
    }
    else {
        inner_desc.innerHTML = before
        console.log("else ", inner_desc.innerHTML)
    }
    // console.log(input.innerHTM)
    console.log("input title ki value After click image change ", para_desc.value)
    flag=true
}

// function dltAll() {
// var title = document.getElementById("title")
// var des = document.getElementById("descrp")
// console.log(title.value, " ", des.value)
// document.getElementById("tbody").innerHTML += ``
// document.getElementById("tbody").innerHTML = "";
// document.getElementById("tbody").innerHTML += ` `
// var old_tbody= document.getElementById("main")
// old_tbody.childNodes[3].remove()
// console.log(`42156234`)
// console.log(old_tbody)
// var new_tbody = document.createElement('tbody');
// populate_with_new_rows(new_tbody);
// old_tbody.parentNode.replaceChild(new_tbody, old_tbody)

//     var title = document.querySelector("#tbody").innerHTML = ``
// }



