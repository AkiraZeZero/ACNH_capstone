console.log("(☞°ヮ°)☞ ey it works ☜(°ヮ°☜)")

const form = document.querySelector('form')
const URL = 'http://localhost:4000'

const getBug = event => {
    event.preventDefault()
    const input = document.querySelector(`input`)
    console.log(input.value)
    let bug = input.value

    axios.get(`${URL}/api/bug/${bug}`)
    .then(res => {
        let bug = res.data
        console.log(bug)
        let {icon_uri} = bug

        let image = document.createElement('img')
        image.src = icon_uri
        let bugHouse = document.querySelector(".bugHouse")
        bugHouse.innerHTML = ""
        bugHouse.appendChild(image)
    })
    .catch(err => console.log(err))
}

const searchBtn = document.querySelector(`.searchBtn`)
searchBtn.addEventListener(`click`, getBug)
form.addEventListener(`submit`, getBug)
