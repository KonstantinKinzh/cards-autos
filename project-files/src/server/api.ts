import { IAutoData, IAutoDataRes } from "./types";
import { dataServerStore } from "@/stores/dataServerStore/dataServerStore";
const getAuto = dataServerStore.getAuto;

const fetchData = async () => {
    let res = null;
    try {
        res = await fetch("https://test.tspb.su/test-task/vehicles");
    }
    catch (e) {
        console.error(e);
    } finally {
        if (res === null) return;
        processServerAnswer(res)
    };
};


const processServerAnswer = (res: Response) => {
    if (res.ok) {
        console.log("Запрос прошол успешно");
        serverDataProcessor(res);
    } else {
        console.log("Запрос прошол не успешно");
    };
};


const serverDataProcessor = async (res: Response) => {
    const autos: IAutoData[] = [];
    const autosData = await res.json();
    autosData.forEach((autoData: IAutoDataRes) => {
        autos.push({
            id: autoData.id,
            mark: autoData.name,
            year: autoData.year,
            price: autoData.price,
            color: autoData.color,
            model: autoData.model,
            latitude: autoData.latitude,
            longitude: autoData.longitude
        });
    });
    getAuto(autos);
};


export { fetchData };