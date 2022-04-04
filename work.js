let del = document.getElementById("delete")
    del.addEventListener("click", function () {
        let data = document.getElementById("dataShow")
        data.textContent = ""
        info = []
    })

    let info = []
    let bt = document.getElementById("showPrevious")
    let h = document.getElementById("dataShow")



    let c = document.getElementById("saveAll")
    c.addEventListener("click", function () {
        let x = document.getElementById("name")
        let y = document.getElementById("age")
        let z = document.getElementById("gender")
        info.push(x.value)
        info.push(y.value)
        info.push(z.value)
        x.value = ""
        y.value = ""
        z.value = ""
        localStorage.setItem("information", JSON.stringify(info))
    })

    bt.addEventListener("click", function () {
        h.innerHTML =
            h.innerHTML = "The previous entries are : "
        let inform = JSON.parse(localStorage.getItem("information"))
        for (let i = 0; i < info.length; i++) {
            if (i % 3 === 0) {
                h.innerHTML += "<hr id='line'>" + "<br>" + inform[i]
            }
            else {
                h.innerHTML += "<br>" + inform[i]
            }
        }
    })