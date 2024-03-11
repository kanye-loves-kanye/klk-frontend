import React from "react"
import { Card, CardImg} from 'reactstrap';


const CollectionIndex = ({collections}) => {
  return (
    <>
      <div className='collection-body'>
        <h1>Collection</h1>
        
          {collections?.map((collections, index) => {
            return(
                <Card key={index} className='collection-cards'>
                  <CardImg  src={collections.user_id} alt="" className="item-picture"/>
                </Card>
            )
          })}
        
      </div>
    </>
  )
}

export default CollectionIndex