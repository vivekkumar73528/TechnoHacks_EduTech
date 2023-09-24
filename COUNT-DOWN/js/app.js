const endDate = "23 September 2023 10:44 PM"

document.getElementById("end-Date").innerText = endDate;
const inputs = document.querySelectorAll("input")

// const clock =  {} => {

//}

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    
    if(diff < 0) return;

    //convert indo days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff/ 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
} 

// intial call
clock()

/**
 * 1 day = 24 hrs
 * 1 hr = 60 min
 * 60 min = 3600 sec
 */

setInterval(
    () => {
        clock()
    },
    1000
)
