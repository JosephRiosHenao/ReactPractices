import React from 'react'

export default function TodoCreate() {

    const onClickButton = () => {
        
    }

  return (
    <>
        <input 
            type="button" 
            className='button-create' 
            value="+" 
            onClick={() => onClickButton}
        />
    </>
  )
}

