type TProductId = string;

type TProduct = {
    id: TProductId;
    name: string;
    images: string;
    price: number;
    detail: string;
    category: string,
    stock: number,
}

type TAPIProduct = TProduct

type TAPIProductResponse = {
    length: number,
    data: TProduct[],
    error?: string,
}