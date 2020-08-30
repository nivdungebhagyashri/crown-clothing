import React from 'react';
import {connect} from 'react-redux';


import MenuItem from './../menu-items/menu-item.component'
import {selectDirectorySections} from './../../redux/directory/directory-selector';
import {createStructuredSelector } from 'reselect';

const  Directory =({sections})=> (
            <div className ='directory-menu'>
                {
                    sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem  {...otherSectionProps}/>
                    ))
                }
            </div>
)

const mapStateToProps = createStructuredSelector ({
  sections: selectDirectorySections
});

        

export default connect(mapStateToProps)(Directory);