


const numberbutton = document.querySelectorAll(".numberbutton")
const previousnumber = document.querySelector(".previousnumber")
const currentnumber = document.querySelector(".currentnumber")
const operatorbutton= document.querySelectorAll(".operatorbutton")
const equalsButton = document.getElementById("equal")
const resetButton = document.getElementById("reset")


numberbutton.forEach(button => {
     button.addEventListener('click',() =>{
        buttonValue = button.innerHTML
        currentnumber.textContent += buttonValue
      })

      
})

operatorbutton.forEach(button => {
    button.addEventListener('click',function() {
       operatorbuttonvalue = button.textContent
        previousnumber.textContent += currentnumber.textContent + " " + operatorbuttonvalue + " "

        currentnumber.textContent =  buttonValue.innerHTML
        
       
    })
})

equalsButton.addEventListener('click',function(){
    if(currentnumber.textContent === "" && previousnumber.textContent ===""){
        currentnumber.textContent =""
        previousnumber.textContent = ""
        
    }
    

   const prev = parseInt(previousnumber.innerHTML)
   const current = parseInt(currentnumber.innerHTML)
   if(operatorbuttonvalue === "x"){
    total = prev * current
    
   }else if(operatorbuttonvalue === "+"){
    total = prev + current
    
   }else if(operatorbuttonvalue === "-"){
    total = prev - current
    
   }else if(operatorbuttonvalue === "/"){
    total = prev / current
    
   }
   
   currentnumber.textContent = total
   currentnumber.innerHTML = ""
   previousnumber.textContent = total

})

resetButton.addEventListener('click',function(){
   previousnumber.textContent = ""
   currentnumber.textContent  = ""
})

// operatorbutton.forEach(button => {
//     button.addEventListener('click',() =>{
//         previousnumber.textContent += button.innerHTML
       
//     })
// })






 

