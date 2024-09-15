import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '@/src/redux/reducer';
import '@/styles/globals.css';
import '@/styles/enquiryForm.css';
import '@/styles/clientReview.css';
import '@/styles/default-style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const store = createStore(rootReducer);

function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <Provider store={store}>
      <>
        <Toaster
          toastOptions={{
            position: "top-center",
          }}
        />
        <Component {...pageProps} />
      </>
    </Provider>
  );
}

export default App;