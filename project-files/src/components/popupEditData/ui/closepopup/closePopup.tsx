import { CrossIcon } from "@/resources/components-icons/crossIcon";
import { popupStore } from "@/stores/popupStore/popupStore";
import "./closePopup.css";

export function ClosePopup() {
    const togglePopup = popupStore.togglePopup;
    return (
        <button
            className="close-popup"
            onClick={() => togglePopup()}
        >
            <CrossIcon />
        </button>
    );
};