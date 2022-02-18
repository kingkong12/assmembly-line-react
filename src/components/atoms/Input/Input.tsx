import React, { FC } from 'react'

import { BaseInput } from './Styles'
import { InputTS } from 'smeui-interfaces/components/atoms'

const Input: FC<InputTS> = ({ className, value, onChange }) => {
  return (
    <>
      <BaseInput className={className} type="text" value={value} onChange={onChange} />
    </>
  )
}

export default Input
