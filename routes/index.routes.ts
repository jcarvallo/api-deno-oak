import { Router } from "https://deno.land/x/oak/mod.ts";
import { ProductController } from "../controllers/index.ts";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Welcome to my API of Products in Deno & Oak Framework ";
});

router.get("/products", ProductController.getAll);
router.get("/products/:id", ProductController.getById);
router.post("/products", ProductController.create);
router.put("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.remove);


export default router;