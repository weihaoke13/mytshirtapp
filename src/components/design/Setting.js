import React from 'react';
const urlImgBase = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/';


const Settings =({color,upperText,lowerText,uploadImage,textSize,textColor,saveDesign})=>{
    return(
        <div className='card bg-light container'>
            <h3 className='text-center'>Settings</h3>
            <h4 > Change T-shirt Color</h4>
            <div className='tshirt-color'>
                <img onClick={color} src={`${urlImgBase}black.png`} alt='black-tshirt' id='black'></img>
                <img onClick={color} src={`${urlImgBase}white.png`} alt='white-tshirt' id='white'></img>
                <img onClick={color} src={`${urlImgBase}grey.png`} alt='grey-tshirt' id='grey'></img>
                <img onClick={color} src={`${urlImgBase}blue.png`} alt='blue-tshirt' id='blue'></img>
                <img onClick={color} src={`${urlImgBase}red.png`} alt='red-tshirt' id='red'></img>
            </div>
            <hr/>
            <h4>Write Text</h4>
            <input onChange={upperText} type='text' className='form-control form-control-sm mb-2' placeholder='Upper Text' />
            <input onChange={lowerText} type='text' className='form-control form-control-sm' placeholder='Lower Text' />
            <hr/>
            <h4>Upload Image</h4>
            <div className='form-group'>
                <input onChange={uploadImage} type='file' className='form-control-file mb-2'></input>
            </div>
            <hr />
            <h4>Text Size</h4>
            <input onChange={textSize} type='range' min='15' max='42'></input>
            <hr />
            <h4>Text Color</h4>
            <select onChange={textColor} className='form-control form-control-sm mb-2'>
                <option>White</option>
                <option>Black</option>
                <option>Red</option>                
                <option>Blue</option>
                <option>Green</option>
            </select>
            <hr/>
            <button className='btn btn-primary btn-sm mb-2' id='saveDesign' onClick={saveDesign}>Save</button>

        </div>
    )
}

export default Settings;