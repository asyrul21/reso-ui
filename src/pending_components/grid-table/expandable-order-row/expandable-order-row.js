import React from "react";
import classnames from "classnames";
import UpdateOrderStatusButtons from "../../../../../components/update-order-status-buttons/update-order-status-buttons";
import { formatNumberToAmountAndCurrency } from "../../../../../utils/amount";
import GenericButton from "../../../../../components/buttons/generic-button/generic-button";

const ExpandableOrderTableRow = ({
  orderItem,
  expanded = false,
  onUpdateStatus = () => {},
  onClickAddTrackingInfo = () => {},
  blockUpdateStatusButtons = false,
}) => {
  const containerClasses = classnames({
    component_expandable_row_container: true,
    component_expandable_row_container_expanded: expanded,
  });

  const handleClickUpdateStatus = (status) => {
    onUpdateStatus(status);
  };

  const currency = orderItem.currency;
  return (
    <div className={containerClasses}>
      <div className="component_expandable_row_inner_container">
        <div className="component_expandable_row_overview_container">
          <p>
            <span className="component_expandable_row_header">Ref:</span>
            <span>{" " + orderItem._id}</span>
          </p>
        </div>
      </div>
      <div className="component_expandable_row_inner_container">
        <div className="component_expandable_row_details_container">
          <div className="component_expandable_row_customer_details">
            <div className="component_expandable_row_vertical_group">
              <p className="component_expandable_row_header">
                Customer Details
              </p>
              <p className="component_expandable_row_text">
                Name: {orderItem.user.name}
              </p>
              <p className="component_expandable_row_text">
                Mobile: {orderItem.user.mobile}
              </p>
              <p className="component_expandable_row_text">
                Email: {orderItem.user.email}
              </p>
            </div>

            <div className="component_expandable_row_vertical_group">
              <p className="component_expandable_row_header">
                Shipping Address
              </p>
              <p className="component_expandable_row_text">
                {orderItem.shippingAddress.line1}
              </p>
              <p className="component_expandable_row_text">
                {orderItem.shippingAddress.line2}
              </p>
              <p className="component_expandable_row_text">
                {orderItem.shippingAddress.postalCode},{" "}
                {orderItem.shippingAddress.city}
              </p>
              <p className="component_expandable_row_text">
                {orderItem.shippingAddress.state}
              </p>
              <p className="component_expandable_row_text">
                {orderItem.shippingAddress.country}
              </p>
            </div>
          </div>
          <div className="component_expandable_row_payment">
            <div className="component_expandable_row_vertical_group">
              <p className="component_expandable_row_header">Payment Details</p>
              <p className="component_expandable_row_text">
                Method: {orderItem.paymentMethod.toUpperCase()}
              </p>
              <p className="component_expandable_row_text">
                Date : {orderItem.paymentResult.updateTime.slice(0, 15)}
              </p>
              <p className="component_expandable_row_text">
                Status:
                <span className="bold">
                  {" "}
                  {orderItem.paymentResult.status.toUpperCase()}
                </span>
              </p>
            </div>
            {orderItem.paymentResult.receiptUrl && (
              <div className="component_expandable_row_vertical_group">
                <a
                  href={orderItem.paymentResult.receiptUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Payment Receipt
                </a>
              </div>
            )}
            <div className="component_expandable_row_vertical_group">
              <p className="component_expandable_row_header">Prices Paid</p>
              <p className="component_expandable_row_text">
                Items Price:{" "}
                {`${formatNumberToAmountAndCurrency(
                  orderItem.totalItemsPrice,
                  currency
                )}`}
              </p>
              <p className="component_expandable_row_text">
                Tax Price:{" "}
                {`${formatNumberToAmountAndCurrency(
                  orderItem.taxPrice,
                  currency
                )}`}
              </p>
              <p className="component_expandable_row_text">
                Shipping Price:{" "}
                {`${formatNumberToAmountAndCurrency(
                  orderItem.shippingPrice,
                  currency
                )}`}
              </p>
              <p className="component_expandable_row_text">
                Total Price:{" "}
                {`${formatNumberToAmountAndCurrency(
                  orderItem.totalPrice,
                  currency
                )}`}
              </p>
            </div>
          </div>
          <div className="component_expandable_row_order_items">
            <div className="component_expandable_row_vertical_group">
              <p className="component_expandable_row_header">Order Items</p>
              <div className="component_expandable_row_table_container">
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Item</th>
                      <th>Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderItem.orderItems.map((item, id) => {
                      return (
                        <tr key={id}>
                          <td>{id + 1}</td>
                          <td className="component_expandable_row_table_item_name">
                            {item.name}
                          </td>
                          <td>{item.quantity}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="component_expandable_row_actionPanel_container">
          <UpdateOrderStatusButtons
            namespaces={["processing", "shipped", "delivered"]}
            value={orderItem.status}
            disabled={blockUpdateStatusButtons}
            className="component_expandable_row_actionPanel"
            onUpdate={(s) => {
              handleClickUpdateStatus(s);
            }}
          />
          <GenericButton
            fullWidth
            text="Edit Tracking/Delivery Info"
            onClick={onClickAddTrackingInfo}
            disabled={blockUpdateStatusButtons}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpandableOrderTableRow;
