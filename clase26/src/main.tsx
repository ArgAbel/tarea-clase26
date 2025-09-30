import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import BasicTable from './assets/Tabla/Tabla';
import { store } from '../src/assets/store/index.ts';
import { Provider} from 'react-redux';
import UserForm from './assets/userform/UserForm.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> 
    <BasicTable rows={[]} />
    <UserForm />
    </ Provider>
  </StrictMode>,
)
