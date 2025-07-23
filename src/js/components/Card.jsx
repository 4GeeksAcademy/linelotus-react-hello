import React from "react";

const Card = ({text}) =>{
    return( 
         <div className="col mb-5">
    <div className="card h-100">
      <img src="https://picsum.photos/536/354" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">Find Out More!</a> 
      </div>
    </div>
  </div>
    )
}//be mindful of <a> tags!

export default Card