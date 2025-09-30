import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import { useState, type FormEvent } from 'react';
import {type TareaWithId  } from '../../../src/utilidades/tarea.interface.ts';

interface UserFormProps {
  initialValues?: Partial<TareaWithId>;
  onSubmit?: (Tarea: Partial<TareaWithId>) => void;
}

export function UserForm({ initialValues, onSubmit }: UserFormProps) {
  const [formData, setFormData] = useState<Partial<TareaWithId>>(
    initialValues || { name: '', lastname: '' }
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name?.trim() || !formData.lastname?.trim()) return;
    onSubmit(formData);
  };

  return (
    <Box component='form' onSubmit={handleSubmit}>
      <Typography variant='h6' mb={2}>
        {initialValues ? 'Editar Tarea' : 'Crear Tarea'}
      </Typography>

      <Stack spacing={2}>
        <TextField
          label='Tarea'
          name='name'
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
        />
        
        <Button type='submit' variant='contained' color='primary'>
          {initialValues ? 'Guardar Cambios' : 'Crear Usuario'}
        </Button>
      </Stack>
    </Box>
  );
}

export default UserForm;