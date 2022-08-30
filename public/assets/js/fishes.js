console.log(">°))))彡")

const form = document.querySelector('form')
const URL = 'http://localhost:4000'

const getFish = event => {
    event.preventDefault()
    const input = document.querySelector(`input`)
    console.log(input.value)
    let fish = input.value

    axios.get(`${URL}/api/fish/${fish}`)
        .then(res => {
            let fish = res.data
            console.log(fish)
            let {icon_uri} = fish


            let image = document.createElement('img')
            image.src = icon_uri
            let fishHouse = document.querySelector(".fishHouse")
            fishHouse.innerHTML = ""
            fishHouse.appendChild(image)
        })
        .catch(err => console.log(err))
}

const searchBtn = document.querySelector(`.searchBtn`)
searchBtn.addEventListener(`click`, getFish)
form.addEventListener(`submit`, getFish)