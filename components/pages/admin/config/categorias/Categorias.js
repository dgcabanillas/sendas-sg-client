import React from 'react';
import ItemCategoria         from './ItemCategoria';
import BtnAgregarCategoria   from './BtnAgregarCategoria';
import CDivider         from 'components/customized/CDivider';
import { 
    BoxContainer, 
    ListContainer 
} from 'components/customized/CustomBox';

const Categorias = ({ categorias }) => {
    return (
        <BoxContainer>
            <BtnAgregarCategoria />
            <CDivider />
            <ListContainer>
                { 
                    categorias.map(
                        (categoria) => 
                        <ItemCategoria 
                            key={categoria.id_categoria} 
                            categoria={categoria} 
                        />
                    )
                }
            </ListContainer>
        </BoxContainer>
    )
}

export default Categorias;
