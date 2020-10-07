export interface Product {
  age: number;
  id: string;
  type: string;
  imageUrl: string;
  name: string;
  snippet: string;
  price: number;
  discount: number;
  screen: string;
  capacity: string;
  ram: string;
  newPrice?: number;
}

export interface Match {
  isExact: boolean;
  path: string;
  url: string;
  params: object;
}
