import React from 'react';
import { IconButton, Button } from '@material-ui/core';
import { 
    Delete as DeleteIcon,
    Edit   as EditIcon,
} from '@material-ui/icons';
import { ItemList } from 'components/customized/CustomBox';

const ItemEstadoCivil = ({ estadoCivil }) => {
    return (
        <ItemList>
            <Button style={{ flexGrow: 1 }} variant="outlined">
                { estadoCivil.id_estado_civil }
            </Button>
            <IconButton>
                <EditIcon />
            </IconButton>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </ItemList>
    )
}

export default ItemEstadoCivil;
