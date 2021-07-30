import { TableContainer, Table } from '@material-ui/core';
import EnhancedTableHead from 'components/customized/Table/EnhancedTableHead';

const columns = [
    { field: 'nombre', headerName: 'Nombre', width: 300 },
    { field: 'apellido', headerName: 'Apellido', width: 300 },
    { field: 'fecha_registro', headerName: 'F. Registro', width: 120 },
    { field: 'pagos', headerName: 'Pagos Pend.', type: 'number', width: 120 },
    { field: 'deudas', headerName: 'Deudas Pend.', type: 'numner', width: 120 },
    { field: 'pdps', headerName: 'Promesas pago', type: 'number', width: 120 },
];

const TableUsers = ({ users }) => {
    return (
        <TableContainer>
            <Table>
                {/*<EnhancedTableHead />*/}
            </Table>
        </TableContainer>
    )
}

export default TableUsers
