import React from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

import 'bootstrap/dist/css/bootstrap.min.css';
import Divider from '../../components/commons/Divider';

function Body(/*props*/) {
    return (
       <>
       <div style={{overflow:'scroll'}}>
          <ResponsiveEmbed aspectRatio="16by9">
             <embed type="image/svg+xml" title="svg image" src="/my.svg" />
          </ResponsiveEmbed>
       </div>
          <Divider/>
       </>
    );
}

export default Body;