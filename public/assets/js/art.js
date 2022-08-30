console.log("( ￣ー￣)φ__")

const form = document.querySelector('form')
const URL = 'http://localhost:4000'

const getArts = event => {
    event.preventDefault()
    const input = document.querySelector(`input`)
    console.log(input.value)
    let art = input.value

    axios.get(`${URL}/api/art/${art}`)
        .then(res => {
            let fish = res.data
            console.log(fish)
            let {image_uri} = fish


            let image = document.createElement('img')
            image.src = image_uri
            let artHouse = document.querySelector(".artHouse")
            artHouse.innerHTML = ""
            artHouse.appendChild(image)
        })
        .catch(err => console.log(err))
}

const searchBtn = document.querySelector(`.searchBtn`)
searchBtn.addEventListener(`click`, getArts)
form.addEventListener(`submit`, getArts)