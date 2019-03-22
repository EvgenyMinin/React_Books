import React from 'react';
import GeneralForm from './../GeneralForm/GeneralForm';
import GenreForm from './../GenreForm/index';
import PosterForm from './../PosterForm/PosterForm';
import InfoForm from './../InfoForm/index';

const selectedSidebar = ({selectedSidebar, bookData, errors, onChange}) => {

    switch(selectedSidebar) {
        case 'general':
            return <GeneralForm bookData={bookData} errors={errors} onChange={onChange}/>;
        case 'genre':
            return <GenreForm bookData={bookData} onChange={onChange} />
        case 'poster':
            return <PosterForm />
        case 'info':
            return <InfoForm />

        default: return <GeneralForm />
    }
}
 
export default selectedSidebar;