import React from 'react';
import { UncontrolledCarousel, DivCarousel } from './styled'
import Baton from '../images/1.png';
import chocoNestle from '../images/2.png';
import serenata from '../images/4.png';

function Example() {
    const items = [
        {
            key: 1,
            src: Baton
        },
        {
            key: 2,
            src: chocoNestle
        },
        {
            key: 2,
            src: serenata
        },
    ];

    return (
        <DivCarousel id='produtos'>
            <UncontrolledCarousel items={items} />
        </DivCarousel>



    );
}

export default Example;
