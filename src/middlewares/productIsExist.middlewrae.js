const products = require("../models/Product");
const response = require("../utils/responseSchema");

const productIsExist = (req, res, next) => {
    try {
        const { id } = req.params;

        let product = products.find(e => e.id === +id);

        if(!product) {
            return res.status(404).json(
                response(false, null, "Not Found")
            )
        }

        req.DATA = product;

        next();
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = productIsExist;