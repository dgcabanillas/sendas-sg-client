import React from 'react';
import ItemArea         from './ItemArea';
import BtnAgregarArea   from './BtnAgregarArea';
import CDivider         from 'components/customized/CDivider';
import { 
    BoxContainer, 
    ListContainer 
} from 'components/customized/CustomBox';

const Areas = ({ areas }) => {
    return (
        <BoxContainer>
            <BtnAgregarArea />
            <CDivider />
            <ListContainer>
                { areas.map((area) => <ItemArea key={area.id_area} area={area} />) }
            </ListContainer>
        </BoxContainer>
    )
}

export default Areas;
