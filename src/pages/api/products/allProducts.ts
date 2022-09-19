// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// Database
import Database from '@database/products'

// Aqui manipulo las respouestas que pueden dar la conexion a la Database al crear API
const AllProducts = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const db = new Database()
    const allEntries = await db.getAll();
    const length = allEntries.length;

    response.status(200).json({ length, data: allEntries })
  } catch (e) {
    console.error(e);
    response.status(500).send({ length: 0, data: [], error: 'Something went wrong' })
  }
}

export default AllProducts;