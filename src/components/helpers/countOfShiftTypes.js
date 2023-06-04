export default function countOfShiftTypes(arr){
  let peluqueria = 0
  let veterinaria = 0

  arr.array.forEach(element => {
    if(element.shiftType === 'Peluqueria'){
      peluqueria++
    }else{
      veterinaria++
    }
  });

  return [peluqueria, veterinaria]
}