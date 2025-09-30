//import react as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createColumns } from '../../utilidades/util';


export interface Icolumn<t extends object>{
    nombre: string;
    id: string;
    estado: "pendiente" |"completada" | "en progreso", 
    render?:(row: t) => React.ReactNode;
}
export interface Itable<t extends object>{
    rows:t[];
    columns?:Icolumn<t>[];
}
export default function TableOfUsers<T extends object>({
    rows,
    columns,
}   :Itable<T>){const resolvedColumns=
    columns ?? (rows.length>0 ? createColumns(rows[0]):[]);

    return( <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {resolvedColumns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow hover role='checkbox' tabIndex={-1} key={i}>
                {resolvedColumns.map((column) => {
                  const cellContent: React.ReactNode = column.render
                    ? column.render(row)
                    : String((row as Record<string, unknown>)[column.id] ?? '');

                  return (
                    <TableCell key={column.id} align={column.align}>
                      {cellContent}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}



