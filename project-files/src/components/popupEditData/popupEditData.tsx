import { ClosePopup } from "./ui/closepopup";
import { InputParams } from "./ui/input-params";
import { BtnChangeData } from "./ui/btn-change-data";
import { dataServerStore } from "@/stores/dataServerStore/dataServerStore";
import { popupStore } from "@/stores/popupStore/popupStore";
import "./popupEditData.css"

export function PopupEditData() {
    const togglePopup = popupStore.togglePopup;
    const setValueInput = dataServerStore.setValueInput;
    const updateAutoData = dataServerStore.updateAutoData;

    return (
        <div
            className="popup-edit-data-area"
            onClick={() => togglePopup()}>
            <div
                onClick={(e) => e.stopPropagation()}
                className="popup-edit-data">
                <div
                    className="popup-edit-data-wrapper">
                    <ClosePopup />

                    <p className="title-popup">Изменить данные</p>

                    <div className="params-card">
                        <InputParams
                            title="Марка"
                            name="mark"
                            onSetValueInput={setValueInput} />
                        <InputParams
                            title="Цена"
                            name="price"
                            onSetValueInput={setValueInput} />
                        <InputParams
                            title="Модель"
                            name="model"
                            onSetValueInput={setValueInput}
                        />
                    </div>

                    <BtnChangeData
                        title="Изменить"
                        onUpdateAutoData={updateAutoData}
                        onTogglePopup={togglePopup}
                    />

                </div>
            </div>
        </div>
    );
};