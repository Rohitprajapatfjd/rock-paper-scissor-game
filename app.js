const btn = document.querySelectorAll("button");
const message = document.querySelector(".message");
const playerSelect = document.getElementById("p-select");
const computerSelect = document.getElementById("c-select");
const playerScore = document.getElementById("player");
const computerScore = document.getElementById("computer");
const numOfchances = document.getElementById("number");
const winCount = [];
const lose = [];
const tie = [];
btn.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        message.innerHTML = "";
        const random = Math.floor(Math.random() * 3);
        const arr = ["paper", "rock", "scissors"][random];
        playerSelect.innerHTML = `${item.className}`;
        computerSelect.innerHTML = `${arr}`;

        if (item.className == arr) {
            message.innerHTML = "Tied"
            message.style.color = "gray";
            tie.push(1);
        } else if (item.className == "rock" && arr == "scissors") {
            message.innerHTML = "Win 🥳"
            message.style.color = "green";
            winCount.push(1)
        } else if (item.className == "scissors" && arr == "rock") {
            message.innerHTML = "lose 😨"
            message.style.color = "red";
            lose.push(1)
        } else if (item.className == "paper" && arr == "scissors") {
            message.innerHTML = "lose 😨"
            message.style.color = "red";
            lose.push(1)
        } else if (item.className == "scissors" && arr == "paper") {
            message.innerHTML = "Win 🥳"
            message.style.color = "green";
            winCount.push(1)
        } else if (item.className == "paper" && arr == "rock") {
            winCount.push(1)
            message.innerHTML = "Win 🥳"
            message.style.color = "green";
        } else if (item.className == "rock" && arr == "paper") {
            message.innerHTML = "lose 😨"
            message.style.color = "red";
            lose.push(1)
        }
        playerScore.innerHTML = winCount.length
        computerScore.innerHTML = lose.length
        let total = winCount.length + lose.length + tie.length;
        numOfchances.innerHTML = Math.floor(10 - parseInt(total));
        if (total == 10) {
             
            
            // document.querySelector(".swal2-container").style.background.size = "contain"
            if (winCount.length > lose.length) {
                Swal.fire({
                    title: "Congratulations on winning the game!",
                    width: 450,
                    padding: "3em",
                    color: "#716add",
                    background: "#fff url(./pexels-fwstudio-33348-129731.jpg)",
                    backdrop: `
    rgba(0,0,123,0.4)
    url("./girl-cute.gif")
    left top
    no-repeat
  `
                });
               
                    if (window.innerWidth < 480) {
                        document.querySelector(".swal2-popup").style.display = "none";
                    } else {
                        document.querySelector(".swal2-popup").style.display = "block";
                    }
                
               
                setTimeout(function(){
                    location.reload()
                },5000)
            } else {
                Swal.fire({
                    title: `I'm sorry, you have lost. Hopefully, you'll have better luck next time.`,
                    width: 450,
                    padding: "3em",
                    color: "#716add",
                    background: "#fff url(./pexels-fwstudio-33348-129731.jpg)",
                    backdrop: `
    rgba(0,0,123,0.4)
    url("./game-over-game.gif")
    left top
    no-repeat
    
  `
                });
               
                    if (window.innerWidth < 480) {
                        document.querySelector(".swal2-popup").style.display = "none";
                    } else {
                        document.querySelector(".swal2-popup").style.display = "block";
                    }
               
                
                setTimeout(function () {
                    location.reload()
                }, 5000)
            }
        }
    })
})