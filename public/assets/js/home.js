console.log(`°˖✧◝(⁰▿⁰)◜✧˖`)

const form = document.querySelector('form')
const URL = 'http://localhost:4000'

const getVillager = event => {
    event.preventDefault()
    const input = document.querySelector(`input`)
    console.log(input.value)
    let villager = input.value

    axios.get(`${URL}/api/villager/${villager}`)
        .then(res => {
            let villager = res.data
            console.log(villager)
            let {image_uri} = villager
            

            let image = document.createElement('img')
            image.src = image_uri
            let villagerHouse = document.querySelector(".villagerHouse")
            villagerHouse.innerHTML = ""
            villagerHouse.appendChild(image)
        })
        .catch(err => console.log(err))
    }
const searchBtn = document.querySelector(`.searchBtn`)
searchBtn.addEventListener('click', getVillager)
form.addEventListener('submit', getVillager)
