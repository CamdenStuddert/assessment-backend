const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById(`fortuneTeller`)
const fortuneInput = document.getElementById(`fortuneInput`)
const addFortuneBtn  = document.getElementById(`addFortune`)
const fortuneId = document.getElementById(`fortuneId`)
const deleteFortuneBtn = document.getElementById(`deleteFortune`)
const changeFortuneInput = document.getElementById(`changeFortune`)
const changeFortuneBtn = document.getElementById(`changeFortuneBtn`)
const fortuneText = document.getElementById(`fortuneText`)
const getFortunesBtn = document.getElementById(`getFortunes`)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get(`http://localhost:4000/api/fortunes`)
    .then(res => {
        console.log(`Is This Working?`)
        const data = res.data;
        alert(data);
    })
}

fortuneBtn.addEventListener(`click`, getFortune)

const addNewFortune = (e) => {
    e.preventDefault()

const body = {
    newFortune: fortuneInput.value,
}
    axios.post(`/api/fortunes`, body)
    .then(res => {
        console.log(res.data)
        alert(`Your new fortune, ${fortuneInput.value}, has been added!`)
    })
}

addFortuneBtn.addEventListener(`click`, addNewFortune)

const deleteFortuneById = (e) => {
    e.preventDefault()

    const idInput = +fortuneId.value

    axios.delete(`/api/fortunes/${idInput}`)
    .then(res => {
        alert(`You deleted the fortune with the index of: ${idInput}`)
    })
}

deleteFortuneBtn.addEventListener(`click`, deleteFortuneById)

const changeFortuneById = (e) => {
    e.preventDefault()
    const idInput = +changeFortuneInput.value
    const body = {
        newFortune: fortuneText.value
    }

    axios.put(`/api/fortunes/${idInput}`, body)
    .then(res => {
        alert(`You have changed the fortune with the id of ${idInput}`)
    })
}

changeFortuneBtn.addEventListener(`click`, changeFortuneById)

// const fortuneCallback = ({data: fortune}) 
// const getAllFortunes = e => axios.get(`/api/fortune`).then(fortuneCallback)

// getFortunesBtn.addEventListener(`click`, getAllFortunes)