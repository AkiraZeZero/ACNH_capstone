const {getVillager, getBug, getBugs, getArt, getFossil, getFish, getSea, getHTML, getFortune, getFishes, getSeaCreatures, getTurnipCalculator, getFortunes} = require(`./controller`)

// const { getFortunes } = require(`../public/main`)

// creating my url endpoint

module.exports = (app) => {
    app.get(`/`, getHTML)
    app.get(`/api/:villager`, getVillager)
    // app.get(`/bugs`, getBugs)
    // app.get(`/api/:bugs`, getBug)
    // app.get(`/fishes`, getFishes)
    // app.get(`/api/:fish`, getFish)
    // app.get(`/seaCreatures`, getSeaCreatures)
    // app.get(`/sea`, getSea)
    // app.get(`/art`, getArt)
    // app.get(`/api/:art`, getArts)
    // app.get(``,)
    // app.get(``,)
    app.get(`/turnip`, getTurnipCalculator)

    app.get(`/fortunes`, getFortune)

    app.get(`/fortunes`, getFortunes)
    // app.get(`/api/:bug`, getBug)
    // app.get(`api/:fish`, getFish)
}
