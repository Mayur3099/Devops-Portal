import React, { useState } from "react";

import { SearchBar, ChoiceBox } from "../Components";

const clusters = [
    {
        'name': 'India',
        'state': 'Live'
    },
    {
        'name': 'UAE',
        'state': 'Live'
    },
    {
        'name': 'Malaysia',
        'state': 'Down'
    }
]

const namespaces = {
    'India': [
        {
            'name': 'instore',
            'state': 'Live'
        },
        {
            'name': 'upi',
            'state': 'Live'
        },
        {
            'name': 'aur nhi pta ab',
            'state': 'Live'
        }
    ],
    'UAE': [
        {
            'name': 'instore mysore',
            'state': 'Live'
        },
        {
            'name': 'upi manali',
            'state': 'Live'
        },
        {
            'name': 'aur nhi pta ab',
            'state': 'Live'
        }
    ],
    'Malaysia': [
        {
            'name': 'instore africa',
            'state': 'Live'
        },
        {
            'name': 'upi no',
            'state': 'Live'
        },
        {
            'name': 'aur nhi pta ab',
            'state': 'Live'
        }
    ],
}

const pods = {
    'instore': [
        {
            'name': 'vjhakdfbvjk',
            'state': 'Live'
        },
        {
            'name': 'skjhdfb',
            'state': 'Live'
        },
        {
            'name': 'hkajvbdfjvhsbdjfbvl',
            'state': 'Live'
        }
    ],
    'upi': [
        {
            'name': 'adbfbsdfb',
            'state': 'Live'
        },
        {
            'name': 'vajkhdfnvjlksd',
            'state': 'Live'
        },
        {
            'name': 'adv',
            'state': 'Live'
        }
    ]
}
    
const Micro = () => {
    const [selectedCluster, setSelectedCluster] = useState('');
    const [selectedNamespace, setSelectedNamespace] = useState('');
    const [selectedPod, setSelectedPod] = useState('');
    const [dropDownFlag, setDropDownFlag] = useState(false);

    return (
        <>
            <div className="flex flex-col">
                <div className="flex justify-center py-6">
                    <div className="w-1/2">
                        <SearchBar />
                    </div>
                </div>

                <div className="flex">
                    <div className="bg-gray-200 w-full rounded-lg mx-10 mt-4 pt-8 px-8 min-h-56 ">
                        <div className='w-1/2 mb-4 pb-2'>
                            <ChoiceBox
                                data={clusters}
                                updateSelectedData={setSelectedCluster}
                                placeholderText='Choose a Cluster'
                                dropDownFlag={dropDownFlag}
                                setDropDownFlag={setDropDownFlag}
                            />
                        </div>
                        <div className='w-1/2 my-4 py-2'>
                            <ChoiceBox
                                data={namespaces.hasOwnProperty(selectedCluster) ? namespaces[selectedCluster] : []}
                                updateSelectedData={setSelectedNamespace}
                                placeholderText='Choose a Namespace'
                                dropDownFlag={dropDownFlag}
                                setDropDownFlag={setDropDownFlag}
                            />
                        </div>
                        <div className='w-1/2 my-4 py-2'>
                            <ChoiceBox
                                data={pods.hasOwnProperty(selectedNamespace) ? pods[selectedNamespace] : []}
                                updateSelectedData={setSelectedPod}
                                placeholderText='Choose a Pod'
                                dropDownFlag={dropDownFlag}
                                setDropDownFlag={setDropDownFlag}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Micro;