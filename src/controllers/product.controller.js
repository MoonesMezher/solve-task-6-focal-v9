let products = require("../models/Product");
const writeFile = require("../utils/file");
const response = require("../utils/responseSchema");

class ProductsController {
    getAll(req, res) {
        try {
            return res.status(200).json(
                response(true, products, "Get all products")
            );
        } catch(err) {
            throw new Error(err);
        }
    }

    getById(req, res) {
        try {
            const product = req.DATA;

            return res.status(200).json(
                response(true, product, "Get product by id")
            )
        } catch(err) {
            throw new Error(err);
        }
    }

    exportJson(req, res) {
        try {
            writeFile(JSON.stringify(products));

            return res.status(200).json(
                response(true, null, "Exported data successfully")
            )
        } catch(err) {
            throw new Error(err);
        }
    }

    add(req, res) {
        try {
            const { name, price, category, description } = req.body;

            const data = {
                id: Math.random() * new Date().getTime(),
                name,
                price,
                category,
                description
            }

            products.push(data);

            return res.status(201).json(
                response(true, data, "Added data successfully")
            )
        } catch(err) {
            throw new Error(err);
        }
    }

    update(req, res) {
        try {
            const { name, price, category, description } = req.body;

            let product = req.DATA;

            product.name = name
            product.price = price
            product.category = category
            product.description = description

            return res.status(200).json(
                response(true, product, "Updated data successfully")
            )
        } catch(err) {
            throw new Error(err);
        }
    }

    remove(req, res) {
        try {
            const { id } = req.params;

            products = products.filter(e => e.id !== +id);

            return res.status(200).json(
                response(true, null, "Deleted data successfully")
            )
        } catch(err) {
            throw new Error(err);
        }
    }
}

module.exports = new ProductsController();