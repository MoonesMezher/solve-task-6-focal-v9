const fs = require("fs");

const writeFile = (data) => {
    const filename = `products-${new Date().getTime()}.json`

    try {
        fs.writeFileSync(filename, data, "UTF-8");
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = writeFile