import {Input} from 'antd';
import '../styles/Searcher.css';

import React from 'react'

function Searcher() {
  return (
    <Input.Search className='Searcher' placeholder='Buscar' />
    );
}

export default Searcher