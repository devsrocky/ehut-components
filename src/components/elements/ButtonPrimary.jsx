import React from 'react';
import { Link } from 'react-router-dom';



const Button = ({ name, link}) => {

    const style = {
        padding: '10px 20px 10px 20px',
        background: 'var(--thirdClr)',
        textTransform: 'uppercase',
        lineHeight: '16px',
        fontSize: '12px',
        fontWeight: '600',
        borderRadius: '8px',
        color: 'var(--secondary)'

    }

  return (
    <Link to={`${link}`} style={style}>
        {name}
    </Link>
  );
};

export default Button;
