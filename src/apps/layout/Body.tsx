import React from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

import 'bootstrap/dist/css/bootstrap.min.css';
//import Divider from '../../components/commons/Divider';

export function Body() {
    return (
    
       <div className="scroll">
          <ResponsiveEmbed aspectRatio="16by9">
             <embed type="image/svg+xml" title="svg image" src="/my.svg" />
          </ResponsiveEmbed>
       </div>
         
    );
}

export default Body;