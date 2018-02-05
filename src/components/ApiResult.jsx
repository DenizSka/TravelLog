import React from 'react';

const ApiResult = props => (
  <div className="main-page">

    {props.apiData.results.map(result => (
      <div key={result.id}>
        <h3> {result.name} </h3>
        <p> Address: {result.formatted_address} </p>
      </div>
          ))}
  </div>
);

export default ApiResult;
