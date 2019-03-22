import React from 'react';
import PosterForm from './../PosterForm/PosterForm';
import InfoForm from './../InfoForm/InfoForm';
import VisibleInfoGeneral from './VisibleIfoGeneral/VisibleInfoGeneral';
import VisibleInfoGenre from './VisibleInfoGenre/VisibleInfoGenre';
import './VisibleInfo.scss';

const VisibleInfo = ({selectedSidebar, bookData}) => {
        switch(selectedSidebar) {
            case 'general':
                return <VisibleInfoGeneral bookData={bookData} />;
            case 'genre':
                return <VisibleInfoGenre bookData={bookData} />
            case 'poster':
                return <PosterForm />
            case 'info':
                return <InfoForm />
    
            default: return <VisibleInfoGeneral />
        }
};
 
export default VisibleInfo;