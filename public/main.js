// ---
// const form = document.querySelector('form')
// const URL = 'http://localhost:4000'
// ^^^

// const getVillager = event => {
//     event.preventDefault()
//     const input = document.querySelector(`input`)
//     console.log(input.value)
//     let villager = input.value

//     axios.get(`${URL}/api/${villager}`)
//         .then(res => {
//             let villager = res.data
//             console.log(villager)
//             let {image_uri} = villager


//             let image = document.createElement('img')
//             image.src = image_uri
//             document.querySelector("#villagerHouse").appendChild(image)
//         })
//         .catch(err => console.log(err))
// }


// const getBug = event => {
//     event.preventDefault()
//     const input = document.querySelector(`input`)
//     console.log(input.value)
//     let bug = input.value

//     axios.get(`${URL}/api/${bug}`)
//     .then(res => {
//         let bug = res.data
//         console.log(bug)
//         let {icon_uri} = bug

//         let image = document.createElement('img')
//         image.src = icon_uri
//         document.querySelector("#bugHouse").appendChild(image)
//     })
//     .catch(err => console.log(err))
// }

// const getFish = event => {
//     event.preventDefault()
//     const input = document.querySelector(`input`)
//     console.log(input.value)
//     let fish = input.value

//     axios.get(`${URL}/api/${fish}`)
//         .then(res => {
//             let fish = res.data
//             console.log(fish)
//             let {icon_uri} = fish


//             let image = document.createElement('img')
//             image.src = icon_uri
//             document.querySelector("#fishHouse").appendChild(image)
//         })
//         .catch(err => console.log(err))
// }

// const getSea = event => {
//     event.preventDefault()
//     const input = document.querySelector(`input`)
//     console.log(input.value)
//     let sea = input.value

//     axios.get(`${URL}/api/${sea}`)
//         .then(res => {
//             let fish = res.data
//             console.log(fish)
//             let {icon_uri} = fish


//             let image = document.createElement('img')
//             image.src = icon_uri
//             document.querySelector("#seaHouse").appendChild(image)
//         })
//         .catch(err => console.log(err))
// }

// const getArts = event => {
//     event.preventDefault()
//     const input = document.querySelector(`input`)
//     console.log(input.value)
//     let art = input.value

//     axios.get(`${URL}/api/${art}`)
//         .then(res => {
//             let fish = res.data
//             console.log(fish)
//             let {icon_uri} = fish


//             let image = document.createElement('img')
//             image.src = icon_uri
//             document.querySelector("#artHouse").appendChild(image)
//         })
//         .catch(err => console.log(err))
// }

// const getFossil = event => {
//     event.preventDefault()
//     const input = document.querySelector(`input`)
//     console.log(input.value)
//     let fossil = input.value

//     axios.get(`${URL}/api/${fossil}`)
//         .then(res => {
//             let fossil = res.data
//             console.log(fossil)
//             let {icon_uri} = fossil


//             let image = document.createElement('img')
//             image.src = icon_uri
//             document.querySelector(".fossilsHouse").appendChild(image)
//         })
//         .catch(err => console.log(err))
// }

// searchBtn.addEventListener('click', getVillager)
// form.addEventListener('submit', getVillager)

// searchBtn.addEventListener(`click`, getBug)
// form.addEventListener(`submit`, getBug)

// searchBtn.addEventListener(`click`, getFish)
// form.addEventListener(`submit`, getFish)

// searchBtn.addEventListener(`click`, getSea)
// form.addEventListener(`submit`, getSea)

// searchBtn.addEventListener(`click`, getArts)
// form.addEventListener(`submit`, getArts)

// searchBtn.addEventListener(`click`, getFossil)
// form.addEventListener(`submit`, getFossil)
