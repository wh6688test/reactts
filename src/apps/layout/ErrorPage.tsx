import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Divider from '../../components/commons/Divider';
import {errorDisplay} from '../../assets/scss/App.scss';

function ErrorPage() {
    return (
       <>
       <Divider/>
       <div>
          <h1 className="errorDisplay">Something Went Wrong</h1>
       </div>
       </>
      
    );
}

export default ErrorPage;