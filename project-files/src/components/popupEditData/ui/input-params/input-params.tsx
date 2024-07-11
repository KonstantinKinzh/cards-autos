import "./input-params.css";

interface IInputParams {
    title: string;
    onSetValueInput: React.ChangeEventHandler<HTMLInputElement>;
    name: string;
}

export function InputParams(props: IInputParams) {
    const { title, onSetValueInput, name } = props;
    return (
        <div className="input-params">
            <span
                className="param-card">
                {title}
            </span>
            <input
                onChange={onSetValueInput}
                className="param-card-input"
                type="text"
                name={name}
            />
        </div>
    );
};