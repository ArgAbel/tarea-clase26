import { createSlice } from '@reduxjs/toolkit';
import { type TareaWithId } from '../../utilidades/tarea.interface.ts';

   

const initialState: TareaWithId[] = [];
   initialState[3]={name:'juan', lastname:'perez',id: crypto.randomUUID(), email:'asd@gaa.com'};
   initialState[1]={name:'ana', lastname:'gomez', id: crypto.randomUUID(), email:'asd@gaa.com'};
   initialState[2]={name:'luis', lastname:'lopez', id: crypto.randomUUID(), email:'fsd@gaa.com'};
   initialState[0]={name:'maria', lastname:'garcia',id: crypto.randomUUID(), email:'hsd@gaa.com'};
export const TareasSlices = createSlice({
  name: 'users',  
  initialState,// como tiene el mismo nombre, no es necesario poner initialState: initialState
  reducers: {},
});

export default TareasSlices.reducer;