import React from 'react'
import "./styles/ResidentForm.css"

const ResidentForm = ({handleSubmit}) => {
    return (
        <form className='form' onSubmit={handleSubmit}>
			<input className='form__input' type="text" id="idLocation" placeholder="type a location id" />
			<button className='form__btn'>Search</button>
		</form>
    )
}

export default ResidentForm