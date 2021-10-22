import React, { useState } from 'react';
interface Props {
  component: React.FC<any>;  
  props?: any[];
}
const alertStyles = {
    color: 'red',
    background: "salmon",
    border: "1px solid #000",
    width: "200px",
    height: "200px",
    margin: "0 auto"
}
const WithError: React.FC<Props> = ({component: Component, props}) => {
    const [alert, setAlert] = useState(false);

    if(!Component) return null
    return (<div style={alertStyles}>
        {alert && <div>This is alert from something</div>}
        <Component {...props} setAlert={setAlert}/>
    </div>)
}

export default WithError