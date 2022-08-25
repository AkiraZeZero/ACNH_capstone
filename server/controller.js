const axios = require('axios')
const { response } = require('express')
const path = require('path')

const fortunes = [
    "Your mentality is alert, practical, and analytical.",
    "Your mind is creative, original and alert.",
    "Your success will astonish everyone.",
    "Your talents will be recognized and suitably rewarded.",
    "Your life will get more and more exciting.",
]

// getting from acnhapi

const randomIndex = (length) => Math.floor(Math.random() * length);

// ^^^ for my fortunes

module.exports = {
    getHTML: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"))       
    },
    getVillager: (req, res) => {
        let {villager} = req.params

        axios.get(`http://acnhapi.com/v1/villagers/${villager}`)
        .then(response => {
            res.status(200).send(response.data)
        })
        .catch(error => console.log(error))
    },
    // getBugs: (req, res) => {
    //     let {bug} = req.params

    //     axios.get(`http://acnhapi.com/v1/bugs/${bug}`).then(res => {
    //         res.status(200).send(response.data)
    //     })
    //     .catch(error => console.log(error))
    //     res.sendFile(path.join(__dirname, "../public/bugs.html"))
    // },
    // getFishes: (req, res) => {
    //     res.sendFile(path.join(__dirname, "../public/fishes.html"))
    // },
    // getSeaCreatures: (req, res) => {
    //     res.sendFile(path.join(__dirname, "../public/sea.html"))
    // },
    // getArt: (req, res) => {
    //     res.sendFile(path.join(__dirname, "../public/art.html"))
    // },
    // getFossils: (req, res) => {
    //     res.sendFile(path.join(__dirname, "../public/fossils.html"))
    // },
    getTurnipCalculator: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/turnip.html"))
    },
    // getKK: (req, res) => {
    //     res.sendFile(path.join(__dirname, "../public/kk.html"))
    // },
    getFortune: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/fortunes.html"))         
    },
    
    getFortunes: (req, res) => {
        let randomFortunes = fortunes[randomIndex(fortunes.length)];
        res.sendFile(path.join(__dirname, "../public/fortunes.html"))
        res.status(200).send(randomFortunes);
    }


    // getBug: (req, res) => {
    //     let {bug} = req.params

    //     axios.get(`http://acnhapi.com/v1/bugs/${bug}`).then(res => {
    //         res.status(200).send(response.data)
    //     })
    //     .catch(error => console.log(error))
    // },
    // getFish: (req, res) => {
    //     let {fish} = req.params

    //     axios.get(`http://acnhapi.com/fish/${fish}`)
    // }
}