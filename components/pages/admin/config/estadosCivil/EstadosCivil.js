import React from 'react';
import ItemEstadoCivil          from './ItemEstadoCivil';
import BtnAgregarEstadoCivil    from './BtnAgregarEstadoCivil';
import CDivider                 from 'components/customized/CDivider';
import { 
    BoxContainer, 
    ListContainer 
} from 'components/customized/CustomBox';

const EstadosCivil = ({ estadosCivil }) => {
    return (
        <BoxContainer>
            <BtnAgregarEstadoCivil />
            <CDivider />
            <ListContainer>
                { 
                    estadosCivil.map(
                        (estadoCivil) => 
                        <ItemEstadoCivil 
                            key={estadoCivil.id_estado_civil} 
                            estadoCivil={estadoCivil}
                        />
                    )
                }
            </ListContainer>
        </BoxContainer>
    )
}

export default EstadosCivil;