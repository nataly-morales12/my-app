import * as React from 'react';
import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import DeleteData from './DeleteData'
import FormSpeaker from './FormSpeaker';
import SpeakerSearch from './SeachSpeaker'


const Speaker = (props) => {

    const speakers = props.speaker
    const saveRegister = props.saveRegister
    const deleteRegister = props.deleteRegister


    const handleDeleteRegister = (id) => {
        deleteRegister(id)
    }

    const handleSaveRegister = (data) => {
        saveRegister(data)
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'modelSpeaker', headerName: 'Model', width: 150 },
        { field: 'markSpeaker', headerName: 'Mark', width: 120 },
        { field: 'colorSpeaker', headerName: 'Color', width: 120 },
        { field: 'priceSpeaker', headerName: 'Price', width: 120 },
        { field: 'connectivityTechnology', headerName: 'Connectivity Technology', width: 190 },
        { field: 'speakerType', headerName: 'Speaker Type', width: 200 },
        { 
            field: 'actions', 
            headerName: 'Actions',
            sortable: false,
            width: 100,
            disableClickEventBubbling: true,
            renderCell: (params) => (
                <div style={{ cursor: "pointer" }} >
                    <DeleteData index={params.row.id} handleDeleteRegister={handleDeleteRegister} />
                    
                </div>
            )
        }
    ]

    

    return ( 
   
        <Box
            sx={{
                width: '75%',
                height: '82vh',
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
            }}
        >

            <h1 style={{color:'black'}}>Speaker's Data</h1><br/>
            
            
            <div style={{ cursor: "pointer" }} >
                <FormSpeaker  handleSaveRegister= {handleSaveRegister}/> 
                <SpeakerSearch speakers={speakers} />
    
            </div>
            
            <br></br>            
            <div style={{ height: 400, width: '100%' }}>

                <DataGrid
                    rows=
                    {
                        speakers.map(item => (
                            {
                                id: item.id,
                                modelSpeaker: item.model,
                                markSpeaker: item.mark,
                                colorSpeaker: item.color,
                                priceSpeaker: item.price,
                                connectivityTechnology: item.connectivityTechnology,
                                speakerType: item.speakerType

                            }
                        ) )
                    }
                    
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
        </Box>
    );
}
export default Speaker