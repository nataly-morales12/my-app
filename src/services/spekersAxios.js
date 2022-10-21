import axios from 'axios'

const baseUrl = 'https://prueba-dusky-eight.vercel.app'

export async function getSpeakers(){
  try{
      const response = await axios({
          url: `${baseUrl}/speakers`,
          method: 'GET',
      })
      
      return response

  }catch(error){
    console.log(error)
  }
}

export async function getSpeaker(speaker){
  try{
    console.log("hola");
      const response = await axios({
          url: `${baseUrl}/speakers/${speaker}`,
          method: 'GET',
      })
      //console.log(response);
      return response
      
  }catch(error){
    console.log(error)
  }
}

export async function getPriceIva(price){
  try{
    console.log("hola");
      const response = await axios({
          url: `${baseUrl}/speakers//iva/${price}`,
          method: 'GET',
      })
      
      return response
      
  }catch(error){
    console.log(error)
  }
}

export async function saveSpeaker(dataValues){

  try{
    const response = await axios({
        url: `${baseUrl}/speakers`,
        method: 'POST',
        data: dataValues,
    })
    

  }catch(error){
    console.log(error)

  }
}



export async function deleteSpeakers(speaker){

  const response = await axios.delete(`${baseUrl}/speakers/${speaker}`)
  .then(response => {
    window.alert('Speaker Eliminated')
    window.location.reload()
  })
  .catch(error => {
    console.log(error)
  })
}

