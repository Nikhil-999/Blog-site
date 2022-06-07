console.log(5)
var arr = [false , false , false];
var arr2 = [false , false , false];
var arr3 = [false , false , false];
var second_box = true;
var third_box = true;


function li1(){
    console.log("You click on li");
    let a = document.getElementById("li1");
    if(a.style.backgroundColor === "rgb(153, 248, 153)"){
        a.style.backgroundColor = "white";
        arr[0] = false;
    }
    else{
        a.style.backgroundColor = "rgb(153, 248, 153)";
        arr[0] = true;
    }
    console.log(arr[0]);
}

function li2(){
    console.log("You click on li");
    let a = document.getElementById("li2");
    if(a.style.backgroundColor === "rgb(153, 248, 153)"){
        a.style.backgroundColor = "white";
        arr[1] = false;
    }
    else{
        a.style.backgroundColor = "rgb(153, 248, 153)";
        arr[1] = true;
    }
    console.log(arr[1]);
}

function li3(){
    console.log("You click on li");
    let a = document.getElementById("li3");
    if(a.style.backgroundColor === "rgb(153, 248, 153)"){
        a.style.backgroundColor = "white";
        arr[2] = false;
    }
    else{
        a.style.backgroundColor = "rgb(153, 248, 153)";
        arr[2] = true;
    }
    console.log(arr[2]);
}


function li4(){
    console.log("You click on li");
    let a = document.getElementById("li4");
    if(a.style.backgroundColor === "rgb(153, 248, 153)"){
        a.style.backgroundColor = "white";
        arr2[0] = false;
    }
    else{
        a.style.backgroundColor = "rgb(153, 248, 153)";
        arr2[0] = true;
    }
    console.log(arr2[0]);
}

function li5(){
    console.log("You click on li");
    let a = document.getElementById("li5");
    if(a.style.backgroundColor === "rgb(153, 248, 153)"){
        a.style.backgroundColor = "white";
        arr2[1] = false;
    }
    else{
        a.style.backgroundColor = "rgb(153, 248, 153)";
        arr2[1] = true;
    }
    console.log(arr2[1]);
}


function li6(){
    console.log("You click on li");
    let a = document.getElementById("li6");
    if(a.style.backgroundColor === "rgb(153, 248, 153)"){
        a.style.backgroundColor = "white";
        arr2[2] = false;
    }
    else{
        a.style.backgroundColor = "rgb(153, 248, 153)";
        arr2[2] = true;
    }
    console.log(arr2[2]);
}

function li7(){
    console.log("You click on li");
    let a = document.getElementById("li7");
    if(a.style.backgroundColor === "rgb(153, 248, 153)"){
        a.style.backgroundColor = "white";
        arr3[0] = false;
    }
    else{
        a.style.backgroundColor = "rgb(153, 248, 153)";
        arr3[0] = true;
    }
    console.log(arr3[0]);
}

function li8(){
    console.log("You click on li");
    let a = document.getElementById("li8");
    if(a.style.backgroundColor === "rgb(153, 248, 153)"){
        a.style.backgroundColor = "white";
        arr3[1] = false;
    }
    else{
        a.style.backgroundColor = "rgb(153, 248, 153)";
        arr3[1] = true;
    }
    console.log(arr3[1]);
}

function li9(){
    console.log("You click on li");
    let a = document.getElementById("li9");
    if(a.style.backgroundColor === "rgb(153, 248, 153)"){
        a.style.backgroundColor = "white";
        arr3[2] = false;
    }
    else{
        a.style.backgroundColor = "rgb(153, 248, 153)";
        arr3[2] = true;
    }
    console.log(arr3[2]);
}

var c = document.getElementById("last_button");
c.onclick = function() {
    console.log("submit btn clicked")
    let count = 0 , count2 = 0 , count3 = 0;
    for(let i = 0 ; i<3 ; i++){
        if(arr[i] == true)
        count++;
        if(arr2[i] == true)
        count2++;
        if(arr3[i] == true)
        count3++;
    }
    let total = count + count2 + count3;
    let str;
    if((total <= 2 && count <= 2 && count3 === 0 && total >= 1 ) ){
        str = "YOU ARE BEGINEER.";
    }
    else if(total >= 3 && count3 === 0){
        str = "YOU ARE INTERMEDIATE.";
    }
    else if(total >= 6 || count3>=1){
        str = "YOU ARE EXPERIENCED.";
    }
    else if(total === 0){
        str = "YOU ARE ABSOLUTE BEGINEER.";
    }




    document.getElementById("inside_modal").innerHTML = 'You select ' + count + '<strong> easy</strong>'
    + ' , ' + count2 + '<strong> medium</strong>' + ' and ' + count3 + '<strong> hard</strong> exercises.<br><br>' + str;
}


// logic for box shadow
document.getElementById("third_box_btn").onclick = function(){
    let x = document.getElementById("third_box");
    if(third_box){
        x.style.boxShadow = "3px 3px 12px red";
        third_box = false;    
    }
    else{
        x.style.boxShadow = "none";
        third_box = true;
    }
}


// logic for box shadow
document.getElementById("second_box_btn").onclick = function(){
    let x = document.getElementById("second_box");
    if(second_box){
        x.style.boxShadow = "3px 3px 12px yellow";
        second_box = false;    
    }
    else{
        x.style.boxShadow = "none";
        second_box = true;
    }
}