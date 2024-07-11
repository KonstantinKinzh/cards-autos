import { makeAutoObservable } from "mobx";
import { IAutoData, IFormInput, TIdActiveCard } from "./types";

class DataServerStore {
    typeSorting = "date";
    isOpenMap = false;
    idActiveCard: TIdActiveCard = 0;
    autos: IAutoData[] = [];
    dataActiveCard = {}
    longitude = 0;
    latitude = 0;
    geoData = {
        latitude: 0,
        longitude: 0
    }
    formInput: IFormInput = {
        mark: "",
        model: "",
        price: 0,
    };

    constructor() {
        makeAutoObservable(this);
    };

    openMap = (id: any) => {
        this.isOpenMap = true;
        this.longitude = this.autos[id - 1].longitude;
        this.latitude = this.autos[id - 1].latitude;
    };

    setOpenMap = (isOpen: boolean) => {
        this.isOpenMap = isOpen;
    };

    setGeoData = (longitude: number, latitude: number) => {
        this.longitude = longitude;
        this.latitude = latitude;
    };

    closeMap = () => {
        this.isOpenMap = false;
    };

    public getAuto = (autos: IAutoData[]) => {
        this.autos = [...this.autos, ...autos];
    };

    public getDataActiveCard = (id: number | string) => {
        this.idActiveCard = id;
        const index = typeof id === 'number' ? id - 1 : parseInt(String(id)) - 1;
        const { mark, model, price } = this.autos[index];
        this.dataActiveCard = { mark, model, price };
    };

    public deleteAuto = (id: string) => {
        this.autos.splice(this.autos.findIndex(auto => auto.id === Number(id)), 1);
    };

    public setValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (isNaN(+value) && name === "price") {
            alert("Вводить можно только цифры");
            e.target.value = '';
        };
        this.formInput[name] = value;
    };

    public updateAutoData = () => {
        console.log("Первый рендер");
        const indexAuto = this.getIndexAuto();
        if (indexAuto >= 0) {
            this.updateAutoDetails(indexAuto);
            this.sortData();
        };
        this.resetFormInput();
    };

    public sortingDate = () => {
        this.typeSorting = "date";
        this.autos.sort((a, b) => a.year - b.year).
            map((auto, index) => auto.id = index + 1);
    };

    public sortingPrice = () => {
        this.typeSorting = "price";
        this.autos.sort((a, b) => a.price - b.price).
            map((auto, index) => auto.id = index + 1);
    };


    // Sorting functions
    private getIndexAuto = () => {
        const { idActiveCard } = this;
        return typeof idActiveCard === 'number' ? idActiveCard - 1 : Number(idActiveCard) - 1;
    };

    private updateAutoDetails = (indexAuto: number) => {
        console.log(this);
        const { formInput, autos } = this;
        this.autos[indexAuto] = {
            ...autos[indexAuto],
            mark: formInput.mark.trim() || autos[indexAuto].mark,
            model: formInput.model.trim() || autos[indexAuto].model,
            price: formInput.price || autos[indexAuto].price
        };
    };

    private sortData = () => {
        const { formInput } = this;
        if (formInput.mark.trim() || formInput.model.trim() || formInput.price) {
            this.sortingDate();
            this.sortingPrice();
        };
    };

    private resetFormInput = () => {
        this.formInput = { mark: "", price: 0, model: "" };
    };

};

const dataServerStore = new DataServerStore();
export { dataServerStore };