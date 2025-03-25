import React from 'react';
import { Dropdown, DropdownButton, ButtonGroup  } from 'react-bootstrap';

const CustomSelect = () => {

    return (
        <div className='select-sort-by'>
            <DropdownButton as={ButtonGroup} align={{ lg: 'end' }} title="Default">

            <Dropdown.Item eventKey="1">Popularity</Dropdown.Item>
            <Dropdown.Item eventKey="2">Avarage rating</Dropdown.Item>
            <Dropdown.Item eventKey="3">Newness</Dropdown.Item>
            <Dropdown.Item eventKey="4">Price: Low to Hight</Dropdown.Item>
            <Dropdown.Item eventKey="4">Price: Hight to Low</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default CustomSelect;
