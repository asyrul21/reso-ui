import React from "react";

// import base interface
import IComponent from "@interfaces/IComponent";
import IProduct from "@interfaces/IProduct";
import IThemeProps from "@interfaces/Theme";

// styles
import "./styles/Admin-Product-Panel.layout.scss";
import "./styles/Admin-Product-Panel.theme.scss";

// utils
import {
  createComponentStyles,
  createLayoutStyles,
  createThemeStyles,
} from "@utils/styles";
import { methodHasValue } from "@utils/validations";

export interface IAdminProductPanelProps extends IComponent, IThemeProps {
  countInStock: number;
  isLowStock?: boolean;
  onEdit?: () => void;
  onArchive?: () => void;
  archived?: boolean;
  salesThisMonth?: number;
  totalSales?: number;
  rowClassName?: string;
  rowStyles?: React.CSSProperties;
  editButtonClassName?: string;
  editButtonStyles?: React.CSSProperties;
  archiveButtonClassName?: string;
  archiveButtonStyles?: React.CSSProperties;
}

export const AdminProductPanel = ({
  countInStock,
  onEdit,
  onArchive,
  isLowStock = false,
  archived = false,
  salesThisMonth = 0,
  totalSales = 0,
  rootClassName,
  rootStyles = {},
  rowClassName,
  rowStyles = {},
  editButtonClassName,
  editButtonStyles = {},
  archiveButtonClassName,
  archiveButtonStyles = {},
  theme = "light",
}: IAdminProductPanelProps) => {
  const containerStyles = createComponentStyles(
    createLayoutStyles(
      {
        adminProductPanel_container: true,
      },
      rootClassName
    ),
    createThemeStyles("adminProductPanel_container_theme_", theme)
  );

  const editButtonClasses = createComponentStyles(
    createLayoutStyles(
      {
        adminProductPanel_button: true,
      },
      editButtonClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles("adminProductPanel_editButton_theme_", theme)
  );

  const archiveButtonClasses = createComponentStyles(
    createLayoutStyles(
      {
        adminProductPanel_button: true,
      },
      archiveButtonClassName,
      {
        no_select: true,
      }
    ),
    createThemeStyles("adminProductPanel_archiveButton_theme_", theme)
  );

  const rowClasses = createLayoutStyles(
    {
      adminProductPanel_row: true,
    },
    rowClassName
  );

  return (
    <div
      className={containerStyles}
      style={rootStyles}
      data-testid="admin-product-panel-root"
    >
      <p className="adminProductPanel_heading">Admin Panel</p>
      <div className={rowClasses} style={rowStyles}>
        <span className="adminProductPanel_key">Qty in Stock:</span>
        <span
          className={
            isLowStock
              ? "adminProductPanel_lowStock"
              : "adminProductPanel_count"
          }
          data-testid="admin-product-panel-countInStock"
        >
          {countInStock}
        </span>
      </div>
      <div className={rowClasses} style={rowStyles}>
        <span className="adminProductPanel_key">Sales this month:</span>
        <span data-testid="admin-product-panel-salesThisMonth">
          {salesThisMonth}
        </span>
      </div>
      <div className={rowClasses} style={rowStyles}>
        <span className="adminProductPanel_key">Total Sales:</span>
        <span data-testid="admin-product-panel-totalSales">{totalSales}</span>
      </div>
      <div
        onClick={() => {
          if (methodHasValue(onEdit)) {
            onEdit();
          }
        }}
        className={editButtonClasses}
        style={editButtonStyles}
        data-testid="admin-product-panel-edit"
      >
        Edit
      </div>
      <div
        onClick={() => {
          if (methodHasValue(onArchive)) {
            onArchive();
          }
        }}
        className={archiveButtonClasses}
        style={archiveButtonStyles}
        data-testid="admin-product-panel-archive"
      >
        {archived ? "Unarchive" : "Archive"}
      </div>
    </div>
  );
};
