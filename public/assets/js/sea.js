console.log(">°))))彡")

const form = document.querySelector('form')
const URL = 'http://localhost:4000'

const getSea = event => {
    event.preventDefault()
    const input = document.querySelector(`input`)
    console.log(input.value)
    let sea = input.value

    axios.get(`${URL}/api/sea/${sea}`)
        .then(res => {
            let fish = res.data
            console.log(fish)
            let {icon_uri} = fish


            let image = document.createElement('img')
            image.src = icon_uri
            let seaHouse = document.querySelector(".seaHouse")
            seaHouse.innerHTML = ""
            seaHouse.appendChild(image)
        })
        .catch(err => console.log(err))
}

const searchBtn = document.querySelector(`.searchBtn`)
searchBtn.addEventListener(`click`, getSea)
form.addEventListener(`submit`, getSea)