import "./App.css";
import Routers from "./routers/Routers";
import { ConfigProvider, message } from "antd";
import { Provider } from "react-redux";
import store from "./reduxs/store";

console.log(process.env.APP_ID);

message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
  rtl: true,
  prefixCls: "my-message",
});

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {},
      }}
    >
      <Provider store={store}>
        <Routers />
      </Provider>
    </ConfigProvider>
  );
}

export default App;
