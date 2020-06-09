import { Response, Request, Body } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { IProduct, Products } from "../data/Products.ts";

let products = Products

interface ICtx {
  params : { id:string },
  request: Request,
  response: Response;
}

const getAll = ({ response }: ICtx) => {
  response.status = 200;
  response.body = {
    messange: "Products successfull",
    products,
  };
};

const getById = ({ params, response }: ICtx) => {
  let product = products.find((product) => product.id === params.id);
  if (product) {
    response.status = 200;
    response.body = {
      messange: "Existing product",
      product,
    };
  } else {
    response.status = 404;
    response.body = {
      messange: "Product Not found",
    };
  }
};

const create = async ({ request, response }: ICtx) => {
  let { value }: Body = await request.body();
  if (!value) {
    response.status = 404;
    response.body = {
      messange: "Product Not found",
    };
  } else {
    let newProduct: IProduct = {
      id: v4.generate(),
      name: value.name,
      price: value.price,
    };
    products.push(newProduct);
    response.status = 200;
    response.body = {
      messange: "New product create",
      newProduct,
    };
  }
};

const update = async ({ request, response, params }: ICtx ) => {
  let { value } = await request.body();
  let product = products.find((product) => product.id === params.id);
  if (!product) {
    response.status = 404;
    response.body = {
      messange: "Product Not found",
    };
  } else {
    products = products.map((product) =>
      product.id === params.id ? { ...product, ...value } : product
    );
    response.status = 200;
    response.body = {
      messange: "Product update",
      products,
    };
  }
};

const remove = ({ params, response }: ICtx) => {
  products = products.filter((product) => product.id !== params.id);
  response.status = 200;
  response.body = {
    messange: "Product delete",
    products,
  };
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};