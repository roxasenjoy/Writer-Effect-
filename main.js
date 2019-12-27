const instance = new TypeIt('.test', {
    strings: ['Premier texte', "Deuxième texte"],
    speed:50,
    deleteSpeed:100,
    startDelay:900
    //-- Other options...
})
    .pause(250)
    .delete(5)
    .pause(250)
    .type("ligne")
    .go();