import { GET_PRODUCTS, GET_PRODUCT } from "@/graphql/product";
import { graphql, HttpResponse } from "msw";
import { v4 as uuid } from "uuid";
const mock_products = Array.from({ length: 20 }).map((_, i) => ({
  id: uuid(),
  imageUrl: `https://picsum.photos/id/${i + 1}/200/150`,
  price: Math.floor(Math.random() * 100),
  title: `임시상품 ${i + 1}`,
  description: `임시상품 ${i + 1}`,
  createdAt: new Date(1645735501883 + i * 1000 * 60 * 60 * 24).toISOString(),
}));

const handlers = [
  graphql.query(GET_PRODUCTS, () => {
    return HttpResponse.json({
      data: {
        products: mock_products,
      },
    });
  }),
  graphql.query(GET_PRODUCT, (req) => {
    const { id } = req.variables;
    const foundProduct = mock_products.find((product) => product.id === id);
    return HttpResponse.json({
      data: {
        product: foundProduct,
      },
    });
  }),
];
export default handlers;
