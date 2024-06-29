export interface IProjectTask {
    Code: string;
    Description: string;
    Quantity: number | string;
    Unit: string;
    Rate: number;
  }
  
  export interface ICatTitle {
    name: string;
    kids: IProjectTask[];
  }
  
  export interface ISubCategory {
    parentCode: string;
    Code: string;
    Description: string;
    Quantity: number | string;
    Unit: string;
    Rate: number;
    cats?: ICatTitle[];
  }
  
  export interface ICategory {
    Code: string;
    Description: string;
    Quantity: number | string;
    Unit: string;
    Rate: string;
    kids?: ISubCategory[];
  }
  
  export type IProjectPlan = ICategory[];
  
  // Example ProjectPlan data using the interfaces
  