import React, {useState} from 'react';
import {Box,TextField,Button, IconButton, Modal} from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { getPriceIva} from '../services/spekersAxios'
import { AlternateEmailRounded } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //p: 4,
    width: '35%',
    height: '95%',
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingLeft:'20px',
    paddingRight:'20px',
    background: '#fff', 
    borderRadius: '15px',
    boxShadow: '1px 1px 20px #333'
};

const FormSpeaker = (props) => {

    const handleSaveRegister = props.handleSaveRegister
    const [open, setOpen] = useState(false);
    const [formValues, setformValues] = useState({
        id: "",
        model: "",
        mark: "",
        connectivityTechnology: "",
        color: "",
        price: "", 
        speakerType: "",
        _v: 0
    })

    const priceIva = async () =>  {
        const response = await getPriceIva(formValues.price)
        const iva = response.data
        
        if (response.status === 200) {
            const name ="price"
            const value = iva.priceIva
            setformValues({ ...formValues, [name]: value})
        }
        
    }

    const handleChange = (event) =>{
        const { name, value } = event.target
        setformValues({ ...formValues, [name]: value})

    }

    const onblurFinal = (e) =>{
        priceIva();
    }
    const handleOpenModal = () => {
        setOpen(true)
    }
    const handleCloseModal = () => {
        setOpen(false)
    }

    const onClick = () =>{
        
        handleSaveRegister(formValues);
    }

    return (

        <>
            <IconButton 
                onClick={handleOpenModal}
            >
                <AddCircleIcon  
                    style={{
                        width: '20%',
                        height: '20%',
                        color: "blue"
                    }}
                />
            </IconButton>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <form onSubmit={onClick} >

                    <Box 
                        sx={style}
                    >
                        
                        <h1 align="center">Add Speaker</h1>

                        <TextField fullWidth 
                            name='id'
                            id='id'
                            value={formValues.id} 
                            placeholder="ID" 
                            label="ID" 
                            onChange={handleChange} />
                        <br/>
                        <TextField fullWidth  
                            name='model'
                            id='model'
                            value={formValues.model} 
                            placeholder="model" 
                            label="Model" 
                            onChange={handleChange} />
                        <br/>
                        <TextField fullWidth 
                            name='mark'
                            id='mark'
                            value={formValues.mark} 
                            placeholder="mark" 
                            label="Mark" 
                            onChange={handleChange} />
                        <br/>
                        <TextField fullWidth 
                            name='connectivityTechnology'
                            id='connectivityTechnology'
                            value={formValues.connectivityTechnology} 
                            placeholder="Technology" 
                            label="Technology" 
                            onChange={handleChange} />
                        <br/>
                        <TextField fullWidth 
                            name='color'
                            id='color'
                            value={formValues.color} 
                            placeholder="color" 
                            label="color" 
                            onChange={handleChange} />
                        <br/>
                        <TextField fullWidth 
                            name='price'
                            id='price'
                            value={formValues.price} 
                            placeholder="price" 
                            label="price" 
                            onChange={handleChange} 
                            onBlur={onblurFinal}/>
                        <br/>
                        <TextField fullWidth 
                            name='speakerType'
                            id='speakerType'
                            value={formValues.speakerType} 
                            placeholder="Speaker Type" 
                            label="Speaker Type" 
                            onChange={handleChange} 
                             />
                        <br/>
                        
                        <center>
                        <Button
                            variant="contained"
                            size = "large"
                            type="submit"
                                
                        >
                            ADD
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button
                            variant="contained"
                            size = "large"
                            onClick={handleCloseModal}
                                
                        >
                            CANCEL
                        </Button> </center>
                        <br/>
                    </Box>
                    </form>
            </Modal>
        
        
        </>        
        
    )
} 

export default FormSpeaker;
