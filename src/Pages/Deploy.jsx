import React, { useState } from 'react';
import { DropDown } from '../Components';

const Deploy = () => {
  const [selectedOrg, setSelectedOrg] = useState();
  const [orgText, setOrgText] = useState('Select Org');

  const handleOrgButtonClick = () => {
    setSelectedOrg(orgText)
  }

  return (
    <>
      <div className='bg-slate-200'>
        <div className='h-24'>
          Space left for some reason
        </div>
        <div className='bg-purple-500 h-screen'>
          <div className='flex justify-center items-center h-full'>
            <div>
              <DropDown
                bgColor={'bg-purple-500'}
                placeholderText={'Org'}
                mainText={orgText}
                handleClick={handleOrgButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Deploy