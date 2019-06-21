import React from 'react';
import "./loading.css"


export function Loading1 () {
  return (
    <div className="loader">
      <div className="lds-dual-ring" />
    </div>
  );
}

export function Loading2() {
  return (
    <div className="loader">
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
