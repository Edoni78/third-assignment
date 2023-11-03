import React from 'react'
import './Popup.css'
import { useState } from 'react'
import { data } from './Data'

const Popup = () => {

    const [popUp, setPopUp] = useState(false);

    const handlePopUp = () => {
        setPopUp(!popUp)
    }

  return (
    <div>
    <div className='container'>

        <div className='button'>
            <button className='btn' onClick={handlePopUp}>show popup</button>
        </div>
        
    </div>

    {
        popUp && (
            <div className='body'>

                <div className='box'>

                    <div className='heading'>
                        <p className='left'>Color Theme</p>
                        <p className='right'>Change theme</p>
                    </div>

                    <div className='box-main'>

                        {
                            data.map((item) => {
                                return (
                                    <div className='font-color' key={item.id}>
                                    <p>{item.text}</p>
        
                                    <div className='hexColor'>
                                        <p>{item.hexCode}</p>
                                        <button style={{ backgroundColor: item.hexCode }} ></button>
                                    </div>
                                </div>
                                )
                            })
                        }

                    </div>

                    <div className='buttons'>
                        <div className='containing'>
                            <button className='cancel'  onClick={() => setPopUp(false)}>Cancel</button>
                            <button className='save'>Save</button>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
    </div>
  )
}

export default Popup
