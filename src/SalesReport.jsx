// SalesReport.jsx
import React from 'react';

const salesData = [
  {
    date: '12/09/2024',
    orderNo: 256,
    partyName: 'Udham Mobile',
    phoneNo: '+919988996440',
    txnType: 'Sale',
    status: 'Paid',
    paymentType: 'Cash',
    items: [
      { name: 'IPH 11 PRO MAX LCD OG', hsnSac: '', quantity: 1, price: 55.0, amount: 55.0 },
    ],
  },
  {
    date: '12/09/2024',
    orderNo: 255,
    partyName: 'sahil store',
    phoneNo: '',
    txnType: 'Sale',
    status: 'Paid',
    paymentType: 'Cash',
    items: [
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
    ],
  },
  {
    date: '12/09/2024',
    orderNo: 254,
    partyName: 'sahil store',
    phoneNo: '',
    txnType: 'Sale',
    status: 'Paid',
    paymentType: 'Cash',
    items: [
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 35.0, amount: 35.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
    ],
  },
  {
    date: '12/09/2024',
    orderNo: 254,
    partyName: 'sahil store',
    phoneNo: '',
    txnType: 'Sale',
    status: 'Paid',
    paymentType: 'Cash',
    items: [
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 35.0, amount: 35.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 98.0, amount: 98.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 55.0, amount: 55.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 65.0, amount: 65.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 65.0, amount: 65.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 23.0, amount: 23.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 65.0, amount: 65.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 61.0, amount: 61.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
      { name: 'IPH 14 PRO MAX SPEAKER', hsnSac: '', quantity: 1, price: 15.0, amount: 15.0 },
    ],
  },
];

export default function SalesReport() {
  
  const grandTotal = salesData.reduce((gt, sale) => {
    const subTotal = sale.items.reduce((sum, x) => sum + x.amount, 0);
    return gt + subTotal;
  }, 0);

  return (
    <div
      style={{
        maxWidth: 900,
        margin: '0 auto',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: 16 }}>
        <h1 style={{ margin: 0 }}>Rk Spare</h1>
        <div>Phone no.: 9041561884&nbsp;|&nbsp;Email: rkspare98@gmail.com</div>
        <h2 style={{ marginTop: 8, textDecoration: 'underline' }}>Sale Report</h2>
        <div style={{ textAlign: 'left', fontWeight: 'bold', marginTop: 8 }}>
          Duration: Till 13/09/2024
        </div>
      </header>

      {salesData.map((sale, idx) => {
         
        const subTotal = sale.items.reduce((sum, x) => sum + x.amount, 0);
        const totalAmount = subTotal;
        const receivedAmount = subTotal;
        const balanceAmount = totalAmount - receivedAmount; 

        return (
          <table
            key={idx}
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginBottom: 32,
            }}
          >
            <thead>
              <tr>
                {[
                  'Date',
                  'Order No.',
                  'Party Name',
                  'Phone No',
                  'Txn Type',
                  'Status',
                  'Total Amount',
                  'Payment Type',
                  'Received/Paid Amount',
                  'Balance Amount',
                ].map((th) => (
                  <th
                    key={th}
                    style={{
                      border: '1px solid #ccc',
                      padding: '4px 8px',
                      fontSize: 14,
                      background: '#eee',
                    }}
                  >
                    {th}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr style={{ background: '#f9f9f9' }}>
                <td style={{ border: '1px solid #ccc', padding: '4px 8px' }}>{sale.date}</td>
                <td style={{ border: '1px solid #ccc', padding: '4px 8px' }}>{sale.orderNo}</td>
                <td style={{ border: '1px solid #ccc', padding: '4px 8px' }}>{sale.partyName}</td>
                <td style={{ border: '1px solid #ccc', padding: '4px 8px' }}>{sale.phoneNo}</td>
                <td style={{ border: '1px solid #ccc', padding: '4px 8px' }}>{sale.txnType}</td>
                <td style={{ border: '1px solid #ccc', padding: '4px 8px' }}>{sale.status}</td>
                <td style={{ border: '1px solid #ccc', padding: '4px 8px' }}>
                  ₹ {totalAmount.toFixed(2)}
                </td>
                <td style={{ border: '1px solid #ccc', padding: '4px 8px' }}>{sale.paymentType}</td>
                <td style={{ border: '1px solid #ccc', padding: '4px 8px' }}>
                  ₹ {receivedAmount.toFixed(2)}
                </td>
                <td style={{ border: '1px solid #ccc', padding: '4px 8px' }}>
                  ₹ {balanceAmount.toFixed(2)}
                </td>
              </tr>

              <tr>
                <td colSpan="10" style={{ padding: 0 }}>
                  <table
                    style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                    }}
                  >
                    <thead>
                      <tr>
                        {['#', 'Item Name', 'HSN/ SAC', 'Quantity', 'Price/ Unit', 'Amount'].map(
                          (th) => (
                            <th
                              key={th}
                              style={{
                                border: '1px solid #ddd',
                                padding: '2px 6px',
                                fontSize: 13,
                                background: '#ddd',
                              }}
                            >
                              {th}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {sale.items.map((item, i) => (
                        <tr key={i}>
                          <td
                            style={{
                              border: '1px solid #ddd',
                              padding: '2px 6px',
                              fontSize: 13,
                            }}
                          >
                            {i + 1}
                          </td>
                          <td
                            style={{
                              border: '1px solid #ddd',
                              padding: '2px 6px',
                              fontSize: 13,
                            }}
                          >
                            {item.name}
                          </td>
                          <td
                            style={{
                              border: '1px solid #ddd',
                              padding: '2px 6px',
                              fontSize: 13,
                            }}
                          >
                            {item.hsnSac}
                          </td>
                          <td
                            style={{
                              border: '1px solid #ddd',
                              padding: '2px 6px',
                              fontSize: 13,
                            }}
                          >
                            {item.quantity}
                          </td>
                          <td
                            style={{
                              border: '1px solid #ddd',
                              padding: '2px 6px',
                              fontSize: 13,
                            }}
                          >
                            ₹ {item.price.toFixed(2)}
                          </td>
                          <td
                            style={{
                              border: '1px solid #ddd',
                              padding: '2px 6px',
                              fontSize: 13,
                            }}
                          >
                            ₹ {item.amount.toFixed(2)}
                          </td>
                        </tr>
                      ))}

                      <tr style={{ background: '#f1f1f1', fontWeight: 'bold' }}>
                        <td
                          colSpan="3"
                          style={{
                            border: '1px solid #ddd',
                            padding: '2px 6px',
                            fontSize: 13,
                          }}
                        >
                          Sub-Total
                        </td>
                        <td
                          style={{
                            border: '1px solid #ddd',
                            padding: '2px 6px',
                            fontSize: 13,
                          }}
                        >
                          {sale.items.length}
                        </td>
                        <td
                          style={{
                            border: '1px solid #ddd',
                            padding: '2px 6px',
                            fontSize: 13,
                          }}
                        />
                        <td
                          style={{
                            border: '1px solid #ddd',
                            padding: '2px 6px',
                            fontSize: 13,
                          }}
                        >
                          ₹ {subTotal.toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}

      <div style={{ textAlign: 'right', fontSize: 16, marginTop: 16 }}>
        <strong>Total Sale: ₹ {grandTotal.toFixed(2)}</strong>
      </div>
    </div>
  );
}
