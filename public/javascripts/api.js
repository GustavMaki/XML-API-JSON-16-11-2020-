var myXHR = new XMLHttpRequest();

myXHR.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("result").innerHTML = myXHR.responseText;
    }
};

myXHR.open("GET", "/users", true); 

myXHR.send();