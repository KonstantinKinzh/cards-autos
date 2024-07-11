import { MenuSorting } from "./ui/menu-sorting";
import { useState } from "react";
import "./btn-sorting.css";

export function BtnSorting() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleMenu = () => {
        setIsOpenMenu(prev => !prev);
    };

    return (
        <div className="btn-sorting-container">
            <div className="wrapper">
                <button
                    onClick={toggleMenu}
                    className="btn-sorting" />
            </div>
            {
                isOpenMenu &&
                <MenuSorting
                    toggleMenu={toggleMenu}
                />}
        </div>
    );
};