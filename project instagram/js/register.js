const regform= document.getElementById("register");

const baseurl= "https://students.codex.today/createAccount"
regform.addEventListener("submit",(event)=>{

    event.preventDefault();
    const formData={
        name:regform.name.value,
        email:regform.email.value,
        phone:regform.phone.value,
        password:regform.password.value,
       
    };

    fetch (baseurl,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
    })
  .then(res=> res.json())
  .then(data => {
    console.log(data)
         const keys=Object.keys(data);
        keys.forEach((e)=>localStorage.setItem(e,data[e]));

  }
    )
  .catch(err =>console.log(err))
})

window.onload=()=>{
    
    const token= localStorage.getItem("token");
    if(token){
        window.location.assign("/html/login.html");
    }
    }





