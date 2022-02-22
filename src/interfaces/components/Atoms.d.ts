declare module 'smeui-interfaces/components/atoms' {
  import { ChangeEvent } from 'react'

  export interface TypographyTS {
    toUpperCase?: boolean
  }

  export interface InputTS {
    className?: string
    value?: string
    placeHolder?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    // .. more props can be added later
  }
}
