console.log("(☞°ヮ°)☞ ey it works ☜(°ヮ°☜)")

const form = document.querySelector('form')
const URL = 'http://localhost:4000'

const getFossil = event => {
    event.preventDefault()
    const input = document.querySelector(`input`)
    console.log(input.value)
    let fossil = input.value

    axios.get(`${URL}/api/fossil/${fossil}`)
        .then(res => {
            let fossil = res.data
            console.log(fossil)
            let {image_uri} = fossil


            let image = document.createElement('img')
            image.src = image_uri
            let fossilsHouse = document.querySelector(".fossilsHouse")
            fossilsHouse.innerHTML = ""
            fossilsHouse.appendChild(image)
        })
        .catch(err => console.log(err))
}

const searchBtn = document.querySelector(`.searchBtn`)
searchBtn.addEventListener(`click`, getFossil)
form.addEventListener(`submit`, getFossil)