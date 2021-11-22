export interface Product {
    id: number;
    title: string;
    description: string;
    price: string;
    data: string;
    categories: {
        category :  Category[]
    }
  }

  export interface Category{
    id: number,
    name : string
  }
  
  
  