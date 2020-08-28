import React from 'react';
import './custom-button.styles.scss';

// this is custom button so that we can use it at multiple places
const CustomButton = ({children, ...otherProps}) =>(
   <div>
       <button className ='custom-button' type='submit' {...otherProps}>
           {children}

       </button>
    </div>
 
)

export default CustomButton;