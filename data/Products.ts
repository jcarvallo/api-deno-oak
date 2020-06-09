export interface IProduct {
  id?: string;
  name: string;
  price: string;
}

export let Products: IProduct[] = [
  {
    id: "ad58bbeb-2219-4e35-84e7-8522d299c55e",
    name: "Laptop",
    price: "12.000",
  },
  {
    id: "0ce02584-0b46-4428-b60e-604d32e7033f",
    name: "Monitor",
    price: "8.000",
  },
  { id: "b145bcaf-f141-4d80-a5c2-c1bfa88acfda", name: "PC", price: "7.000" },
];
