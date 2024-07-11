import { observer } from "mobx-react";
import { useRef } from "react";
import { CrossIcon } from "@/resources/components-icons/crossIcon/crossIcon";
import { dataServerStore } from "@/stores/dataServerStore/dataServerStore";
import "./btnDelete.css";

type TIdProp = {
    id: number;
};

export const BtnDelete = observer((props: TIdProp) => {
    const { id } = props;
    const idStr = id.toString();
    let btnDeleteRef = useRef<HTMLButtonElement>(null);
    const deleteAuto = dataServerStore.deleteAuto;

    return (
        <button
            id={id.toString() as string}
            ref={btnDeleteRef}
            className="btn-delete"
            onClick={() => deleteAuto(idStr)}
        >
            <CrossIcon />
        </button>
    );
});