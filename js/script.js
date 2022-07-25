// GET ===== XHML 1-uslub  

window.addEventListener("load", () => {

    function req () {
        // const request = new XMLHttpRequest();
        // request.open("GET", "http://localhost:3000/people"); // biz get orqali surov qildik
        // request.setRequestHeader("Content-Type", "application/json");
        // request.send()
        // // readystatechange
        // request.addEventListener("load", () => {
        //     if(/* request.readyState == 4 &&  */request.status == 200) {
        //         let data = JSON.parse(request.response) // JSON formatni jsga ugirib beradi
    
        //         // console.log(data);
    
                // back(data)
                getUser("http://localhost:3000/peple")
                    // .then(data => data.json())
                    .then(data => back(data))
                
        //     }
        //     else {
        //         console.error("Qayerdadir xatolik bor")
        //     }
        // })



        this.remove()
    }

    let click = document.querySelector(".click")
    click.addEventListener("click", req, {once: true})




    function back (data) {
        data.forEach(item => {
            // console.log(item);
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img class="card_img" src=${item.photo} alt="">
                <div class="name">${item.name} ${item.surname}</div>
                <div class="jinsi">${item.jinsi}</div>
                <div class="age">${item.age}</div>
            `
            document.querySelector(".app").appendChild(card)      
        })
    }

    async function getUser (url) {
        const response = await fetch(url)
        if(!response.ok) {
            console.error(`Bizda xatolik status kodi ${response.status}`);
        }
        return await response.json()
    }

})