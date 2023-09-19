# react-craco-app-with-datadog-ts

An example react app using craco, typescript and datadog

```
npx create-react-app my-app --template typescript
```

https://create-react-app.dev/docs/adding-typescript/

https://craco.js.org/docs/getting-started/

Replace `react-scripts ` with `craco`

```
cd my-app
npm i -D @craco/craco
touch craco.config.ts
```

## Connect Datadog RUM and Datadog Traces

Real User Monitoring and Traces are really powerful as standalone products to make your frontend and backend observable respectively. It's even better if you can [connect the two](https://docs.datadoghq.com/real_user_monitoring/connect_rum_and_traces/?tab=browserrum).

## Rename user actions

It's often desirable to [change user action name](https://docs.datadoghq.com/real_user_monitoring/browser/tracking_user_actions/#declare-a-name-for-click-actions).

E.g., you can add the `data-dd-action-name` tag in any HTML element, e.g. a button, with the action name you prefer over the default action name the RUM SDK chooses for you.

```
<button
    data-dd-action-name="Payment"
    type="button"
    onClick={handlePayment}
    style={{ fontSize: "200px", height: "300px", width: "1000px"
    }}>
    💸 Pay 💸
</button>
```

## Custom Actions

Adding your own action is often useful because you might want to enrich an action. Website interactions often indicate the health of your business transactions.

```
datadogRum.addAction('payment', {
    'hasPaid': hasPaid, // for example, 42.12
    'amount': amount.Amount, // for example, ['tomato', 'strawberries']
})
```
