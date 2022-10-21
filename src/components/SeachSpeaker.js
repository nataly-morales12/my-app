import React, {useState} from 'react';
import {Box, Button,Select,MenuItem,IconButton, Modal,FormControl, InputLabel} from "@mui/material"
import Speaker from './SpeakerGet'
import {getSpeaker} from '../services/spekersAxios'
import SearchIcon from '@mui/icons-material/Search';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //p: 4,
    width: '35%',
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

const SpeakerSearch = (props) => {

    const speakers = props.speakers
    const [open, setOpen] = useState(false)
    const [id, setId] = useState("")
    const [speaker , setSpeaker] = useState ({
        id: "",
        model: "",
        mark: "",
        connectivityTechnology: "",
        color: "",
        price: "", 
        speakerType: "",
        _v: 0
    })

    const handleOpenModal = () => {
        setOpen(true)
    }
    const handleCloseModal = () => {
        setOpen(false)
    }

    const handleChangeId = (event) =>{
        setId(event.target.value)
    }

    const search = async () =>  {
        const response = await getSpeaker(id)
        const SpeakerSeach = response.data
        console.log(response.data)
        if (response.status === 200) {

            setSpeaker({
                id: SpeakerSeach.id,
                model: SpeakerSeach.model,
                mark: SpeakerSeach.mark,
                connectivityTechnology: SpeakerSeach.connectivityTechnology,
                color: SpeakerSeach.color,
                price: SpeakerSeach.price, 
                speakerType: SpeakerSeach.speakerType,
                _v: 0
            })
        }
        
    
}

    return(
        <>
            <IconButton 
                onClick={handleOpenModal}
            >
                <SearchIcon 
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
                <form >

                    <Box 
                        sx={style}
                    >
                        <br/>
                        <h1 align="center">Search</h1><br/>
                        <FormControl fullWidth>
                            <InputLabel id="id">ID Speaker</InputLabel>
                            <Select
                                fullWidth
                                labelId="id"
                                name='id'
                                id="id"
                                value={id}
                                onChange={handleChangeId}
                                label="Id Speaker"
                            >
                                {
                                    speakers.map(item => (
                                        <MenuItem value={item.id}>{item.id}</MenuItem>
                                        
                                    ))
                                }    
                            </Select>
                        </FormControl>
                        <br></br>
                        <center>
                        <Button
                            variant="contained"
                            size = "large"
                            onClick={search}
                                
                        >
                           SEARCH
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
                        <Speaker speakers= {speaker} />
                        <br></br>
                    </Box>
                    </form>
            </Modal>
        
        
        </>        
    )
}

export default SpeakerSearch;