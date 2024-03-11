import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {Provider} from 'react-redux';
import store from './Helper/Redux/store.jsx';
import {ThemeProvider} from '@material-tailwind/react';
import {AuthProvider} from './Context/AuthContext.jsx';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
