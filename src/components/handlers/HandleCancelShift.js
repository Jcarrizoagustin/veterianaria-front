export default function HandleCancelShift(id){
  // TODO cancelar turnos
  if(confirm('Seguro que desea cancelar el turno ?')){
    console.log("Turno " + id + " cancelado")
  }
}