import React from "react";


const Card = (props) => {
    return (<div className="card" style="width: 18rem;">
    <img className="card-img-top" src={props.imageUrl} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
    </div>
  </div>)
    
}



card.propstypes={
    imageUrl: propstypes.string,
    title: propstypes.string,
    text: propstypes.string,
    buttonUrl: propstypes.string,
    buttonLabel: propstypes.string
}

export default Card