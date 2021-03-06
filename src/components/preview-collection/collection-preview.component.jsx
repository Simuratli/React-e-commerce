import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPreview = ({title,items})=>{
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item,idx)=>idx < 4 )
                    .map(({id,...others})=>{
                        return (<CollectionItem key={id} {...others} />)
                    })
                }
            </div>
        </div>
    )
}

export default CollectionPreview;