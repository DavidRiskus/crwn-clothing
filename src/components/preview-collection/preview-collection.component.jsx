import React from 'react';

import './preview-collection.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component'

const PrieviewCollection = ({ title, items }) => {


    return (

        <div className='preview-collection'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>

                {/* here if item's index in the initial array is less than 4, then
                return true, add to new array, and them map through that new array
                 */}
                {items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    )
                    )}
            </div>
        </div>
    )
}

export default PrieviewCollection;