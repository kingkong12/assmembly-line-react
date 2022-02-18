declare module 'smeui-interfaces/services' {
  import { AssemblyLineStagesTS } from 'smeui-interfaces/constants'

  type customLogger = (...msgs: any[]) => void
  interface ServicesLogger {
    silly: customLogger
    verbose: customLogger
    debug: customLogger
    info: customLogger
    warn: customLogger
    error: customLogger
  }

  export interface AssemblyLineTS {
    stages: AssemblyLineStagesTS
  }
}
