import {getSpeakers, deleteSpeakers, saveSpeaker} from '../services/spekersAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';
import Speaker from './Speaker'

const SpeakerController = () => {
    
    const [speaker, setSpeaker] = useState([])

    //delete
    const deleteRegister = (id) => {
        deleteSpeakers(id)
    }

    const saveRegister = (data) => {
        saveSpeaker(data)
    }

    
    useEffect(() => {
        async function loadSpeaker() {
            const response = await getSpeakers()

            if (response.status === 200) {
                setSpeaker(response.data)
            }
        }

        loadSpeaker()
        
    }, [])

    

    return (
        <>
            <Box>
                <br/><br/>
                <Speaker speaker={speaker} deleteRegister={deleteRegister} saveRegister = {saveRegister} />
            </Box>
        
        </>
    )
}
export default SpeakerController