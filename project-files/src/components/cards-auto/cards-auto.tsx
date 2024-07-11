import { observer } from "mobx-react";
import { BtnEdit } from "./ui/btnEdit/btnEdit";
import { BtnDelete } from "./ui/btnDelete";
import { dataServerStore } from "@/stores/dataServerStore/dataServerStore";
import "./cards-auto.css";

interface ICardsAuto {
    id: number;
    mark: string;
    model: string;
    color: string;
    price: number;
    year: number;
};

export const CardsAuto = observer((props: ICardsAuto) => {
    const { id, mark, model, color, price, year } = props;
    const openMap = dataServerStore.openMap;

    return (
        <>
            <div
                key={id.toString()}
                className="auto-card"
                id={id.toString() as string}
                onClick={() => openMap(id)}
                >

                <div onClick={(e) => e.stopPropagation()} className="tools">
                    <BtnEdit id={id} />
                    <BtnDelete id={id} />
                </div>

                <div className="title">
                    <p className="name">{mark}</p>
                    <p className="model">{model}</p>
                </div>

                <div className="price-year">
                    <p className="color">Цвет: {color}</p>
                    <div className="footer">
                        <p className="price">${price}</p>
                        <p className="year">{year}</p>
                    </div>
                </div>

            </div>

        </>
    );
});