import React from "react";

const Jumbotron = () => {
    return(
        <div className="jumbotron text-center mb-5">
        <h1>A Warm Welcome!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Call to Action!</a>
  </p></div>
    );

}

export default Jumbotron;