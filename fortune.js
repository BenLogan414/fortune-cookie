
const getFortune = async () => {
    const url = require('./fortunes.json')
    return url[Math.floor(Math.random() * 7)]
}

module.exports = getFortune