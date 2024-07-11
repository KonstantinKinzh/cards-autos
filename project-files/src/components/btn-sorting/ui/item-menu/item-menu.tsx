import { MouseEventHandler } from "react";
import "./item-menu.css";

interface IItemMenu {
  nameItem: string;
  handleClick: MouseEventHandler<HTMLParagraphElement>;
  handleCloseMenu: MouseEventHandler<HTMLParagraphElement>;
};

export function ItemMenu(props: IItemMenu) {
  const { nameItem, handleClick, handleCloseMenu } = props;
  return (
    <div className="item-menu">
      <p
        onClick={(e) => { handleClick(e), handleCloseMenu(e) }}
        className="menu-sorting-item">
        {nameItem}
      </p>
    </div>
  );
};