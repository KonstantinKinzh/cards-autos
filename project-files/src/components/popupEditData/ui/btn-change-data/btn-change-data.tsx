import "./btn-change-data.css";

interface IBtnChangeData {
    title: string;
    onUpdateAutoData: React.MouseEventHandler<HTMLButtonElement>;
    onTogglePopup: React.MouseEventHandler<HTMLButtonElement>;
};

export function BtnChangeData(props: IBtnChangeData) {
    const { title, onUpdateAutoData, onTogglePopup } = props;
    return (
        <button
            onClick={(e) => {
                onUpdateAutoData(e);
                onTogglePopup(e)
            }}
            className="btn-change-data">
            {title}
        </button>
    );
};