import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  
  <Auth0Provider
  domain="dev-trkrfug210dm7e6k.us.auth0.com"
    clientId="Y7Nwe5g4oIQivxg6YoF6skc2Er0m0lOk"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,
);
