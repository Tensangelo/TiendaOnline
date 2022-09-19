// Esto simula el consumo de un database
import allData from './data';

class Database {
    constructor() {}

    // consulta para traer todos los productos
    async getAll(): Promise<TProduct[]> {
        const asArray = Object.values(allData)
        return await asArray;
    }

    // consulta para traer un producto por id
    async getById(id: string): Promise<TProduct | null> {
        if (!Object.prototype.hasOwnProperty.call(allData, id)) {
            return null;
        }

        const entry = allData[id]
        return await entry
    }
}

export default Database;