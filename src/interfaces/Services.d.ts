declare module 'smeui-interfaces/services' {
  type customLogger = (...msgs: any[]) => void
  interface ServicesLogger {
    silly: customLogger
    verbose: customLogger
    debug: customLogger
    info: customLogger
    warn: customLogger
    error: customLogger
  }
}
