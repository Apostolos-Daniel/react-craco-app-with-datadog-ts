import React from "react";
import "./App.css";
import { datadogRum } from "@datadog/browser-rum";

function App() {
  var [hasPaid, SetPaid] = React.useState(false);
  const [amount, SetAmount] = React.useState<{ Amount: number | null }>({
    Amount: null,
  });
  const apiEndpoint = "http://localhost:3000/status";

  const handlePayment = () => {
    // implementation details
    datadogRum.setGlobalContextProperty("backend", {
      endpoint: apiEndpoint,
    });

    fetch(apiEndpoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        SetPaid(true);
        SetAmount(data);
      })
      .catch((error) => console.error(error));
  };

  // To execute code after hasPaid has actually changed
  React.useEffect(() => {
    datadogRum.setGlobalContextProperty("payment", {
      hasPaid: hasPaid,
      amount: amount.Amount,
    });
    datadogRum.addAction("payment", {
      hasPaid: hasPaid, // for example, 42.12
      amount: amount.Amount, // for example, ['tomato', 'strawberries']
    });
  }, [hasPaid, amount]); // Effect dependency on hasPaid

  //style="font-size : 20px; width: 100%; height: 100px;
  return (
    <div className="App">
      <header className="App-header">
        {!hasPaid && (
          <div>
            <button
              data-dd-action-name="Payment"
              type="button"
              onClick={handlePayment}
              style={{
                fontSize: "200px",
                height: "300px",
                width: "1000px",
              }}
            >
              💸 Pay 💸
            </button>
          </div>
        )}
        {hasPaid && <div>Paid £{amount.Amount ?? "N/A"}</div>}
      </header>
    </div>
  );
}

export default App;
