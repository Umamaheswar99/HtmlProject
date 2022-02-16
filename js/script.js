document.getElementById("button-book").onclick=function(){
    document.getElementById("indian-form").classList.remove("hide");
    document.getElementById("indian").classList.add("hide");
}
var form = document.getElementById('myform');


form.addEventListener('submit',(e)=>{
     e.preventDefault();

     inputElements()
});

function inputElements(){
    var selectedForm = document.getElementById("guests").value;

    var preference = document.getElementsByName("preference");
    var preferenceSelected ;
    for (a=0; a<preference.length; a++){
        if (preference[a].checked){
            preferenceSelected=preference[a].value;
        }
    }
    var dateForm = document.getElementById("Date").value;
    
    var nameForm = document.getElementById("Name").value;

    
    var phoneForm = document.getElementById("Phone").value;

    
    var timeForm  =document.getElementById("Time").value;

    if (nameForm==="" || phoneForm==="" || timeForm==="" || dateForm===""){
        alert("Fill all Blocks");
    } 
    else if(phoneForm.length>10 || phoneForm.length<10){
        document.getElementById("phonrError").innerHTML="*Required 10 digits";
        document.getElementById("phonrError").style.color="red";
    }
    else{
        document.getElementById("indian-form").classList.add("hide");
        document.getElementById("confirmation").classList.remove("hide");
        document.getElementById("confirmation").classList.add("confirm");
    }
}
