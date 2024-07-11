import { makeAutoObservable } from "mobx";

class PopupStore {

    isOpenPopup = false;

    constructor() {
        makeAutoObservable(this);
    };

    togglePopup = () => {
        this.isOpenPopup = !this.isOpenPopup;
    };
}

const popupStore = new PopupStore();
export { popupStore };