import {useState,useEffect} from 'react'

export default function useShiftsFetch(){
  const [shifts,setShifts] = useState([])

  const getData = async () => {
    try {
      const response = await fetch('asd')
      if(!response.ok){
        throw new Error(response)
      }
      const data = await response.json()
      setShifts(data)
    } catch (error) {
      console.error('Ocurrio un error')
    }
  }

  useEffect(() => {
    getData()

    return () => {
      setShifts([])
    }
  },[])

  return {
    shifts
  }
}