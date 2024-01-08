export const getSpecialtyRender = (specialtyId, specialtyName) => {
  switch(specialtyId){
      case 0:
          return <p key={specialtyId} className='react'>{specialtyName}</p>;
      case 1:
          return <p key={specialtyId} className='java'>{specialtyName}</p>;
      case 2:
          return <p key={specialtyId} className='ruby'>{specialtyName}</p>;
      default:
          return <p></p>;
  }
}