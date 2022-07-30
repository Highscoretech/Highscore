let main = document.getElementById("main")
let marquee = document.getElementById("marquee")

// Menu bar
let displyEl = false;
let menu = (()=>{
    if(displyEl){
        main.style.display = "none";
        displyEl = false
    }
    else{
        main.style.display = "block";
        displyEl = true;   
    }  
})

setTimeout(()=>{
    marquee.innerHTML = ` <marquee behavior="" direction="">The world of finance has moved to the internet, We no longer belong to the 
    belong to the era where we go to work, Don't let ignorance rule you. You can make lots of money on your bed everyday with your 
    computer/phone and internet connection
</marquee>`
},10000)




