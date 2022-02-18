/* eslint-disable unicorn/filename-case */
import React from 'react'
import Enzyme, { mount } from 'enzyme'
import { stages } from '../constants/assemblyLineStages'
import AssemblyLine from '../pages/AssemblyLine'

let comp

describe('Asslembly Line', () => {
  beforeEach(() => {
    comp = mount(<AssemblyLine stages={stages} />)
    // console.log('comp', comp)
  })
  afterEach(() => {
    comp.unmount()
  })

  /* Input box
    Type something in search box and hit enter :
       1) Search box should be empty.
       2) element  should be added to fist column
    */
  /*
    First column :
    - Add multiple elements into the first column
    - Left Click : ( + )
        1) should update list and remove element form the column
        2) should element in that next column
        3) when the column is the last element : It should remove the element  all together
        4) it should be place at the top.
    - right click : ( - )
        1) remove th element from the  column
        2) if the element is place in the previous column it should move to the previous coulumn
        shoudl be renderd at the bottom.

    TODO:  Add  sty;ed component testing if Testing permits
    - add css styled component testing to it.
    - adding snap shot-testing to it.   to it
    */
})
