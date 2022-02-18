/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const copyToClipboard = (value: any): void => {
  navigator.clipboard.writeText(value)
}
