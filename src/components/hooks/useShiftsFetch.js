import {useState,useEffect} from 'react'

export default function useShiftsFetch(){
  const [shifts,setShifts] = useState([])

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/turnos')
      if(response.ok){
        const data = await response.json()
        setShifts(data)
      }
      
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    
    getData()

   
  },[])

  return {
    shifts
  }
}