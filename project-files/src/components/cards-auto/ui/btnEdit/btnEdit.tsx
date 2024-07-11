import { observer } from "mobx-react";
import { popupStore } from "@/stores/popupStore/popupStore";
import { dataServerStore } from "@/stores/dataServerStore/dataServerStore";
import { useRef } from "react";
import { EditIcon } from "@/resources/components-icons/editIcon";
import "./btnEdit.css";

type TIdProp = {
    id: number;
};

export const BtnEdit = observer((props: TIdProp) => {
    const { id } = props;
    const idStr = id.toString();
    const togglePopup = popupStore.togglePopup;
    const getDataActiveCard = dataServerStore.getDataActiveCard;
    let btnEditRef = useRef<HTMLButtonElement>(null);

    return (
        <button
            id={idStr as string}
            ref={btnEditRef}
            className="btn-edit"
            onClick={() => {togglePopup(); getDataActiveCard(id)}}
        >
            <EditIcon />
        </button>
    );
});