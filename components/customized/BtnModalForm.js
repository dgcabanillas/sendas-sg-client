import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Close } from '@material-ui/icons';
import { Card, IconButton, makeStyles, Modal, Typography } from '@material-ui/core';
import CDivider from 'components/customized/CDivider';

const useStyles = makeStyles(theme => ({
    modal: {
        padding: theme.spacing(7, 0),
        display: 'flex', 
        flexDirection: 'column',
    },
    root: props => ({
        width: props.width || 500,
        maxWidth: '98%',
        position: 'relative',
        margin: 'auto',
        overflow: 'hidden',
        borderRadius: '1rem',
    }),
    content: {
        height: '100%',
        overflowY: 'auto',
        display: 'flex',
    },
    close: {
        width: 50,
        flexShrink: 0,
        background: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 18,
    },
    inputContainer: {
        display:'flex', 
        flexDirection:'column',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        padding: 16,
    },
    title: {
        textAlign: 'center', 
        fontWeight: 600, 
        padding: '10px 0',
        color: theme.modal.title,
    }
}));

const BtnModalForm = ( props ) => {

    const { Button, title, Form, width } = props;
    const classes = useStyles({ width });

    const [open, setOpen] = useState(false);
    const toggleModal = () => setOpen(!open);

    return (
        <>
            <Button onClick={toggleModal}/>
            <Modal
                open={open}
                //onClose={toggleModal}
                className={classes.modal}
            >   
                <>
                <div className={classes.root}>
                    <div className={classes.content}>
                        <div className={classes.close} >
                            <IconButton size="medium" onClick={toggleModal}>
                                <Close htmlColor="white" />
                            </IconButton>
                        </div>
                        <Card square className={classes.inputContainer}>
                            {   
                                title 
                                && 
                                <>
                                    <Typography 
                                        variant="h5"
                                        className={classes.title}
                                    >{ title }</Typography>
                                    <CDivider h={[10, 12]}/>
                                </>
                            }
                            { Form && <Form toggleModal={toggleModal}/> }
                        </Card>
                    </div>
                </div>
                </>
            </Modal>
        </>
    )
}

BtnModalForm.propTypes = {
    Button: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    Form: PropTypes.func.isRequired,
    width: PropTypes.number,
}

export default BtnModalForm
