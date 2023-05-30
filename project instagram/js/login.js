login.addEventListener("submit", 
    async(event)=>{
    try{
        event.preventDefault();
        const formData={
            email:login.email.value,
            password:login.password.value
        }
    
        const res= await fetch("https://students.codex.today/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        const data =await res.json();
       
    
        const keys=Object.keys(data);
        if(data.token) {

            window.location.assign("/html/insta.html")
        }
        // keys.forEach((e)=>localStorage.setItem(e,data[e]));
        console.log(data);
        } catch (error){
            console.log(error)
        }
    });
    
    
    
    window.onload=()=>{
    
    const token= localStorage.getItem("token");
    if(token){
        window.location.assign("/html/insta.html");
    }
    }