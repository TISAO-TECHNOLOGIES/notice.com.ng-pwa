import React, { FC, ReactElement, useState } from 'react';

 type postCardInfoParamType = {
   authorName: String,
   authorLink: String,
   authorImg: String,
   articleDate: String
 };

const postCardInfo: FC<postCardInfoParamType> = ({articleDate, authorLink, authorImg}) : ReactElement => {

 return(
    <div class="post-card-info">
      <ul class="list-inline">
          <li>
              <a href="{ authorLink }">
                  <img src="{ authorImg }" alt="">
              </a>
          </li>
          <li>
              <a href="{ authorLink }">{ authorName }</a>
          </li>
          <li class="dot"></li>
          <li>{ articleDate }</li>
      </ul>
    </div>
 );
}

function btn() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }


export default exportObj;