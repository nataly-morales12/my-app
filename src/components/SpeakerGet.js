import {Box} from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

const Speaker = (props) => {

    const speakers = props.speakers

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'modelSpeaker', headerName: 'Model', width: 150 },
        { field: 'markSpeaker', headerName: 'Mark', width: 120 },
        { field: 'colorSpeaker', headerName: 'Color', width: 120 },
        { field: 'priceSpeaker', headerName: 'Price', width: 120 },
        { field: 'connectivityTechnology', headerName: 'Connectivity Technology', width: 190 },
        { field: 'speakerType', headerName: 'Speaker Type', width: 200 },
        
    ]


    return ( 
       <>
        
        <Box
            sx={{
                width: '90%',
                height: '50vh',
                marginLeft:'auto',
                marginRight:'auto',
                marginBotton:'5%',
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
            


            <br></br>            
            <div style={{ height: 400, width: '100%' }}>

                <DataGrid
                    rows=
                    {
                        [
                            {
                                id: speakers.id,
                                modelSpeaker: speakers.model,
                                markSpeaker: speakers.mark,
                                colorSpeaker: speakers.color,
                                priceSpeaker: speakers.price,
                                connectivityTechnology: speakers.connectivityTechnology,
                                speakerType: speakers.speakerType

                            }
                        ]
                    }
                    
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
            <br></br>
        </Box>
        </> 
    );
}
export default Speaker