const { getHTML, getVillager, getBugs, getBug, getArt, getArts, getFossils, getFossil, getFish, getSea,  getFortune, getFishes, getSeaCreatures, getTurnipCalculator, getKK} = require(`./controller`)


// creating my url endpoint

module.exports = (app) => {
    app.get(`/`, getHTML)
    app.get(`/api/villager/:villager`, getVillager)

    app.get(`/bugs`, getBugs)
    app.get(`/api/bug/:bug`, getBug)

    app.get(`/fishes`, getFishes)
    app.get(`/api/fish/:fish`, getFish)

    app.get(`/sea`, getSeaCreatures)
    app.get(`/api/sea/:sea`, getSea)

    app.get(`/art`, getArt)
    app.get(`/api/art/:art`, getArts)

    app.get(`/fossils`, getFossils)
    app.get(`/api/fossil/:fossil`, getFossil)

    app.get(`/kk`, getKK)

    app.get(`/turnip`, getTurnipCalculator)

    app.get(`/fortunes`, getFortune)

}
