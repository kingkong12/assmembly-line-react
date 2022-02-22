// /* eslint-disable @typescript-eslint/no-explicit-any */
// import Debug from 'debug'
// import { ServicesLogger } from 'smeui-interfaces/services'

// const debugLogger = (
//   namespace: string,
//   logLevel: string,
//   enabledLogger: boolean,
//   ...msgs: any[]
// ): void => {
//   const debugLogger = Debug(`${namespace}:${logLevel}`)

//   if (enabledLogger) Debug.enabled(`${namespace}:${logLevel}:*`)

//   // eslint-disable-next-line prefer-spread
//   return debugLogger.apply(undefined, ['%O', ...msgs])
// }

// export const Logger = (namespace: string): ServicesLogger => {
//   return {
//     silly: (...msgs: any[]): void => debugLogger(namespace, 'silly', false, ...msgs),
//     verbose: (...msgs: any[]): void => debugLogger(namespace, 'verbose', false, ...msgs),
//     debug: (...msgs: any[]): void => debugLogger(namespace, 'debug', false, ...msgs),
//     info: (...msgs: any[]): void => debugLogger(namespace, 'info', false, ...msgs),
//     warn: (...msgs: any[]): void => debugLogger(namespace, 'warn', false, ...msgs),
//     error: (...msgs: any[]): void => debugLogger(namespace, 'error', true, ...msgs),
//   }
// }

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const Logger = (): void => {}
