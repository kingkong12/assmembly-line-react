declare module 'smeui-interfaces/constants' {
  import { apiRoutes } from 'constants/apiRoutes'

  type routes = typeof apiRoutes
  interface ApiRoutes extends routes {}

  export type AssemblyLineStagesTS = Array<string>
}
