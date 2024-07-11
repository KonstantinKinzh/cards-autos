import { ItemMenu } from "../item-menu";
import { dataServerStore } from "@/stores/dataServerStore/dataServerStore";
import "./menu-sorting.css";

interface IMenuSorting {
    toggleMenu: React.MouseEventHandler
}

export function MenuSorting(props: IMenuSorting) {
    const { toggleMenu } = props;
    const sortingDate = dataServerStore.sortingDate;
    const sortingPrice = dataServerStore.sortingPrice;

    return (
        <div onClick={toggleMenu} className="external-area">
            <div
                onClick={(e) => e.stopPropagation()}
                className="menu-sorting">

                <p className="menu-title">
                    Сортировка
                </p>

                <ul>
                    <li>
                        <ItemMenu
                            nameItem="По цене"
                            handleClick={sortingPrice}
                            handleCloseMenu={toggleMenu}
                        />
                    </li>
                    <li>
                        <ItemMenu
                            nameItem="По дате"
                            handleClick={sortingDate}
                            handleCloseMenu={toggleMenu}
                        />
                    </li>
                </ul>

            </div>
        </div>
    );
};