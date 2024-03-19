import React from 'react';
import {clsnx} from '@becks256/clsnx';
import { InfoIcon } from '../'
import './Message.css';

export const Message = ({children, kind = 'info', className}) => {

  const ICONS = {
    info: <InfoIcon size='s' />
  }
  const WhichIcon = () => ICONS[kind]
  return (
    <div className={clsnx(`message message--${kind}`, {className})}>
      <div className='message-icon'>
        <WhichIcon />
      </div>
      <div className='message-content'>
        {children}
      </div>
    </div>
  )
}