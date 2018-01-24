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
warehousecode: string;
warehousename: string;
pallet:string;
BoxTote:string;
UPC:string;
itemCode:string;
itemDescription:string;
Quantity:string;
cost:string;
total:string;
invoice:string;
ByUSer:string;
}

export class setup {
warehousecode: string;
warehousename: string;
    commodity: string;
    markdown: string;
    bucket: string;
}