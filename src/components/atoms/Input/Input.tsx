import React, { FC } from 'react'

import { BaseInput } from './Styles'
import { InputTS } from 'smeui-interfaces/components/atoms'

//TODO: write unit test case for input component
const Input: FC<InputTS> = ({ placeHolder, className, value, onChange }) => {
  return (
    <>
      <BaseInput
        className={className}
        placeholder={placeHolder}
        type="text"
        value={value}
        maxLength={20} // assumption
        onChange={onChange}
      />
    </>
  )
}

export default Input
