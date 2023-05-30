

const forward = document.getElementById("forward");
const backward= document.getElementById("backward");



let left = 1;
let right  = 5;

function show(){
    for(i=left; i<=right; i++){
        document.getElementById("c"+i).style.display="inline-block";
        console.log(i)
    }
  
}

show()

backward.addEventListener("click",()=>{

    if(left<=6&&right<=9)
    { 
        document.getElementById("c"+left).style.display="none";
        
        left +=1;
        right+=1;

        for(i=left; i<=right;i++){
        document.getElementById("c"+i).style.display="inline-block";
           
        }

    }
})



    forward.addEventListener("click",()=>{

        if(left>=2 &&right>=5)
        { 
            document.getElementById("c"+right).style.display="none";
            
            left -=1;
            right-=1;
    
            for(i=left; i<=right;i++){
            document.getElementById("c"+i).style.display="inline-block";
               
            }
    
        }

 

})


