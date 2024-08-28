import React, { useState, useEffect } from 'react';
import { downArrow } from '../assets';

const DataChoiceBox = ({ data, updateSelectedData, placeholderText, dropDownFlag, setDropDownFlag }) => {
  const [showDropDown, setshowDropDown] = useState(false);
  const [closeDropDown, setCloseDropDown] = useState(true);
  const [selectedData, setSelectedData] = useState("");

  const handleArrowClick = () => {
    setshowDropDown(!showDropDown);
  }

  const handleDataChange = (e) => {
    setSelectedData(e.target.attributes.currentData.nodeValue)
    updateSelectedData(e.target.attributes.currentData.nodeValue)
  }

  return (
    <>
      <form class="relative flex items-center w-full mx-auto">
        <div class="relative w-full">
          <input type="text"
            class="text-gray-900 bg-transparent text-sm block w-full py-2.5 px-4 rounded-sm border-b-2 border-slate-300 focus:outline-none focus:border-gray-500 focus:text-gray-700"
            placeholder={placeholderText}
            required
            value={selectedData}
          />
        </div>

        <div className={`p-1 mx-2 hover:cursor-pointer `}
          onClick={handleArrowClick}
        >
          <img src={downArrow} alt="Arrow"
            className={`h-8 w-8 opacity-50 hover:opacity-100 ${showDropDown ? 'rotate-180' : ''}`}
          />
          {
            showDropDown ?
              <ul className='fixed flex flex-col z-20 mt-4 py-2 px-4 comfortaa-normal -translate-x-full rounded-md bg-gray-100 hover:bg-gray-50 border border-solid border-gray-400'>
                {
                  data.map(({ name, state }) => {
                    return <>
                      <li className='flex hover:text-teal-600'
                        currentData={name}
                        onClick={handleDataChange}
                      >
                        <div className={`h-2 w-2 m-2 rounded-full ${state === 'Live' ? 'bg-green-500' : 'bg-red-600'}`} />
                        {name}
                      </li>
                    </>
                  })
                }
              </ul> :
              <></>
          }
        </div>
      </form >
    </>
  )
}

export default DataChoiceBox