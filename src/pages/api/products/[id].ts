import { NextApiRequest, NextApiResponse } from "next";
import Database from "@database/products";

const ProductId = async (request: NextApiRequest, response: NextApiResponse) => {
    try {

        const db = new Database();
        const productId = request.query.id as string;

        const product = await db.getById(productId);

        response.status(200).json(product);
    } catch (e) {
        console.error(e)
        response.status(404).end();
    }
}

export default ProductId;