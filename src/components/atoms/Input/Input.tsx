import React, { FC, ChangeEvent } from 'react'
import styled from 'styled-components/macro'
import { BaseInput } from './Styles'
interface InputTS {
  className?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputTS> = ({ className, value, onChange }) => {
  return (
    <>
      <BaseInput className={className} type="text" value={value} onChange={onChange} />
    </>
  )
}

export default Input
