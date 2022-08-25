const form = document.querySelector('form')
const URL = 'http://localhost:4000'


const getVillager = event => {
    event.preventDefault()
    const input = document.querySelector(`input`)
    console.log(input.value)
    let villager = input.value

    axios.get(`${URL}/api/${villager}`)
        .then(response => {
            let villager = response.data
            console.log(villager)
            let {image_uri} = villager


            let image = document.createElement('img')
            image.src = image_uri
            document.querySelector("#villagerHouse").appendChild(image)
        })
        .catch(err => console.log(err))
}
const fortuneBtn = document.getElementById("fortuneButton");
const getFortunes = () => {
  axios.get(`${baseURL}fortune/`).then((res) => {
    const data = res.data;
    alert(data);
  });
};
fortuneBtn.addEventListener("click", getFortunes);
// const getBug = event => {
//     event.preventDefault()
//     const input = document.querySelector(`input`)
//     console.log(input.value)
//     let bug = input.value

//     axios.get(`${URL}/api/${bug}`)
//     .then(response => {
//         let bug = response.data
//         console.log(bug)
//         let {image_uri} = bug

//         let image = document.createElement('img')
//         image.src = image_uri
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
//         .then(response => {
//             let fish = response.data
//             console.log(fish)
//             let {image_uri} = fish


//             let image = document.createElement('img')
//             image.src = image_uri
//             document.querySelector("#fishHouse").appendChild(image)
//         })
//         .catch(err => console.log(err))
// }


// form.addEventListener('click', searchBtn)
form.addEventListener('submit', getVillager)
// form.addEventListener('submit', getBug)
// form.addEventListener('submit', getFish)