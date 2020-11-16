var myXHR = new XMLHttpRequest();

var MyNotes ={
    "title" : "x",
    "content" : "y"
};

myXHR.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        MyNotes = JSON.parse(this.responseText);
    }
};

myXHR.open("GET", "/users", true);

myXHR.send();