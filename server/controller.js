const axios = require('axios')
const { response } = require('express')
const path = require('path')

// getting from acnhapi
// get website first, get axios second

module.exports = {
    getHTML: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"))       
    },

    getVillager: (req, res) => {
        let {villager} = req.params

        axios.get(`http://acnhapi.com/v1/villagers/${villager}`)
        .then(response => {
            console.log("VILLAGER")
            res.status(200).send(response.data)
        })
        .catch(error => console.log(error))
    },

    getBugs: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/bugs.html"))
    },

    getBug: (req, res) => {
        let {bug} = req.params

        axios.get(`http://acnhapi.com/v1/bugs/${bug}`).then(response => {
            console.log(response.data)
            res.status(200).send(response.data)
        })
        .catch(error => console.log(error))
    },


    getFishes: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/fishes.html"))
    },
    getFish: (req, res) => {
        let {fish} = req.params

        axios.get(`http://acnhapi.com/v1/fish/${fish}`).then(response => {
            res.status(200).send(response.data)
        })
        .catch(error => console.log(error))
    },


    getSeaCreatures: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/sea.html"))
    },
    getSea: (req, res) => {
        let {sea} = req.params

        axios.get(`http://acnhapi.com/v1/sea/${sea}`).then(response => {
            res.status(200).send(response.data)
        })
        .catch(error => console.log(error))
    },


    getArt: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/art.html"))
    },
    getArts: (req, res) => {
        let {art} = req.params

        axios.get(`http://acnhapi.com/v1/art/${art}`).then(response => {
            res.status(200).send(response.data)
        })
        .catch(error => console.log(error))
    },


    getFossils: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/fossils.html"))
    },
    getFossil: (req, res) => {
        let {fossil} = req.params

        axios.get(`http://acnhapi.com/v1/fossils/${fossil}`).then(response => {
            res.status(200).send(response.data)
        })
        .catch(error => console.log(error))
    },
    

    getTurnipCalculator: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/turnip.html"))
    },

    getKK: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/kk.html"))
    },


    getFortune: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/fortunes.html"))         
    },
    getFortunes: (req, res) => {
        let randomFortunes = fortunes[randomIndex(fortunes.length)];
        res.sendFile(path.join(__dirname, "../public/fortunes.html"))
        res.status(200).send(randomFortunes);
    }
}