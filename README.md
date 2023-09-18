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
