document.querySelector("button").addEventListener("click", e => {
    e.preventDefault();

var myXHR = new XMLHttpRequest();

var MyNotes ={
    "title" : "x",
    "content" : "y"
};

myXHR.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        MyNotes = JSON.parse(this.responseText);
        Printdata();
    }
};

myXHR.open("GET", "/users", true);

myXHR.send();

function Printdata(){
    var pagedata ="";
    var i;
    for (i=0; i<MyNotes.length; i++){
        pagedata+= "<li> Title: " + MyNotes[i].title + "  |  Note: " + MyNotes[i].content + "</li>"
    }

    document.getElementById("result").innerHTML = pagedata;
}

});