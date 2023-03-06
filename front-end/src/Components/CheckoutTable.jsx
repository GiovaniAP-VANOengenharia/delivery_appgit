import React from 'react';
import { calcCartTotal, fixDecimals } from '../Utils';
// import MyContext from '../Context/MyContext';

function CheckoutTable() {
  const cartProducts = localStorage.getItem('products');
  const cart = JSON.parse(cartProducts);
  const totalValue = calcCartTotal(cart);

  const tableHeaders = [
    'Item', 'Descrição', 'Quantidade',
    'Valor Unitário', 'Sub-total', 'Remover Item'];

  return (
    <>
      <table>
        <thead>
          <tr>
            { tableHeaders.map((header) => (
              <th key={ header }>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          { cart.map((product, index) => {
            const { name, price, quantity } = product;

            return (
              <tr key={ name }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  { index + 1 }
                </td>

                <td
                  data-testid={ `customer_checkout__element-order-table-name-${index}` }
                >
                  { name }
                </td>

                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  { quantity }
                </td>

                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  { `R$: ${price}` }
                </td>

                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  {`R$: ${fixDecimals(quantity * price)}`}
                </td>

                <td>
                  <button
                    type="button"
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                  >
                    Remover
                  </button>
                </td>
              </tr>

            );
          }) }
        </tbody>
      </table>

      <div data-testid="customer_checkout__element-order-total-price">
        { `Total: R$ ${totalValue}` }
      </div>
    </>
  );
}

export default CheckoutTable;
