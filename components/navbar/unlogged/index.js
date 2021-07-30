import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { Hidden } from '@material-ui/core';
import AuthButton       from 'components/customized/AuthButton';
import SpreadMenu       from 'components/customized/SpreadMenu';
import SpreadMenuItem   from 'components/customized/SpreadMenuItem';
import RouterContext    from 'src/context/router/router.context';

const Unlogged = ( props ) => {

    const { landing } = props;

    const { gotoLanding, gotoRegister, gotoLogin } = useContext(RouterContext);

    return (
        <>
            <Hidden xsDown>
                { !landing && <AuthButton onClick={gotoLanding}> inicio </AuthButton> }
                <AuthButton onClick={gotoLogin}> ingresar </AuthButton>
                <AuthButton onClick={gotoRegister}> registrar </AuthButton>
            </Hidden>
            <Hidden smUp>
                <SpreadMenu>
                    { !landing && <SpreadMenuItem onClick={gotoLanding} text='inicio' /> }
                    <SpreadMenuItem onClick={gotoLogin} text='ingresar' />
                    <SpreadMenuItem onClick={gotoRegister} text='registrar' />
                </SpreadMenu>
            </Hidden>
        </>
    )
}

Unlogged.defaultProps = {
    landing: false,
}

Unlogged.propTypes = {
    landing: PropTypes.bool,
}


export default Unlogged;
