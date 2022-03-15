const writeButton = document.getElementById("writeButton")
writeButton.addEventListener("click",(event)=>{
    const speed = document.getElementById("speed")
    const input = document.getElementById("input")
    if(!input.value || input.value.length === 0){
        input.classList.add("is-invalid")
    }else{
        input.classList.remove("is-invalid")
        const outputText = []
        const output = document.getElementById("output")
        let count = 0
        block = false
        let interval = setInterval(()=>{
            if(count == input.value.length){
                writeButton.disabled = false
                clearInterval(interval) 
                return
            }
            writeButton.disabled = true 
            outputText.push(input.value[count])
            count += 1
            block = true
            output.innerText = outputText.join("")
        },Number(speed.value))
    }
})