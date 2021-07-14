//MEDIA
const media = (array) => {
  const accumulator = array.reduce((accumulator=0,item)=> accumulator = accumulator + item)
  return accumulator/array.length
}
//MEDIANA
const mediana = (array) => {
  array = array.sort((a,b) => a-b)
  let middle = Math.floor(array.length / 2)
  if(array.length % 2 == 0){
    return media(array.slice(middle-1,middle+1))
  }
  return array[middle]
}
//MODA
const moda = (array) => {
  let auxObject = {}
  for (let item of array) {
    if(!auxObject.hasOwnProperty(item)){
      auxObject[item] = 1
    }else{
      auxObject[item] = auxObject[item] + 1
    }
  }
  let auxArray = Object.values(auxObject)
  let max = Math.max(auxArray)
  
}