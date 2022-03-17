import '../styles/globals.css'
import {CartProvider} from "react-use-cart";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "../src/Redux/rootReducer";
import {Provider} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

function MyApp({ Component, pageProps }) {

  return  <Provider store={store}>
      <CartProvider>
          <Component {...pageProps} />
      </CartProvider>
  </Provider>
}

export default MyApp
