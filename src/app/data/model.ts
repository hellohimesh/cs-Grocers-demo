export class Project { 
    id: number;
    name: string;
    cost?: number;
    total_cost?: number;
    first_flight?: string;
    launch?: string;
    status: string;
}
export class Person {
    id: number;
    name: string;
    year_joined: number;
    job: string;
    missions: string[];
    crewWith?: { 
        id: number,
        name: string
    }[];
    manager?: any;
}

export class groceryMock {
warehousecode: number;
warehousename: string;
pallet:string;
BoxTote:string;
UPC:string;
itemCode:number;
itemDescription:string;
Quantity:number;
cost:number;
total:number;
invoice:number;
ByUSer:string;
}

export class setup {
warehousecode: number;
warehousename: string;
    commodity: string;
    markdown: number;
    bucket: string;
}