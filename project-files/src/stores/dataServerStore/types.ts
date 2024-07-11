export interface IAutoData {
    id: number;
    year: number;
    price: number;
    mark: string;
    color: string;
    model: string;
    latitude: number;
    longitude: number;
};

export interface IFormInput {
    mark: string;
    model: string
    price: number;
    [key: string]: string | number;
};

export type TIdActiveCard = number | string