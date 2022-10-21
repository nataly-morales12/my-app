import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material'
import React, {useEffect, useState} from 'react';
import {getSpeakers} from '../services/spekersAxios'

const DeleteData = ( props ) => {

    const index = props.index
    const handleDeleteRegister = props.handleDeleteRegister
    const [speaker, setSpeaker] = useState([])
    

    useEffect(() => {
        async function loadSpeaker() {
            const response = await getSpeakers()

            if (response.status === 200) {
                setSpeaker(response.data)
            }
        }

        loadSpeaker()
        
    }, [])

    //console.log('el index es: '+index);
    const handleDeleteClick = () => {
        const option = window.confirm('¿Do you want to delete the speaker?')
        //alert('el index es: '+index+ dataUser.id)
        if (option === true) {
            handleDeleteRegister(index)
        }
        
    };
  
    return (
        <IconButton 
            color="secondary"
            aria-label="add an alarm"
            onClick={handleDeleteClick}
        >
            <DeleteIcon 
                style={{
                    color: '#e91e63'
                }}
            />
        </IconButton>
    )
}
export default DeleteData