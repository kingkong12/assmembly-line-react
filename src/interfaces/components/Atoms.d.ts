declare module 'smeui-interfaces/components/atoms' {
  import { ChangeEvent } from 'react'
  export interface InputTS {
    className?: string
    value?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  }
}
