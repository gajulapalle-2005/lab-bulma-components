import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';

// const CoolButton = ({isSuccess, children}) =>
// {
//     const buttonClass = `button ${isSuccess ? 'is-success' : ''}` ;
//     return <button className={buttonClass} > {children}</button>;
// };

// CoolButton.propTypes = {
//     isSuccess: PropTypes.bool,
//     children : PropTypes.node.isRequired,
// };


function CoolButton(){
    return (
        <div>
        
        <button  class="button is-success">Button 1</button>
        <button  class="button">Button 2</button>
        <button  class="button is-small is-danger is-rounded ">Button 1</button>

<button  class="button is-small is-success">Button 2</button>

        </div>
    );
}

export default CoolButton;