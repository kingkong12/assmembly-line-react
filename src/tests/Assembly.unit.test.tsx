/* eslint-disable unicorn/filename-case */
import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
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

  describe(' Assembly Unit Test ', () => {
    it('1.1) should render Input box --> add-element', () => {
      expect(comp.find('.add-element').exists()).toBe(true)
    })

    stages.map((element, index) => {
      it(`1.2) stages ${index} should be rendered with title ${element} `, () => {
        expect(comp.find('.column-title').hostNodes().at(index).text()).toBe(element)
      })
    })

    it('1.3) should be able to enter text in input box', () => {
      const inputValue = 'Complete Assignment'
      const inputBox = comp.find('.add-element').hostNodes()
      //   console.log('inputBox', inputBox.debug())
      inputBox.simulate('change', { target: { value: inputValue } })

      expect(inputBox.instance().value).toEqual(inputValue)
    })

    it('1.3) should be able to clear input box on Enter', () => {
      const inputValue = 'Clear Input'
      const inputBox = comp.find('.add-element').hostNodes()
      //   console.log('inputBox', inputBox.debug())
      inputBox.simulate('change', { target: { value: inputValue } })

      comp.find('.input-submit').hostNodes().simulate('submit')
      expect(inputBox.instance().value).toEqual('')
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
        2) should element in thte next column
        3) when the column is the last element : It should remove the element  all together
        4) it should be place at the top.
    - right click : ( - )
        1) remove th element from the  column
        2) if the element is place in the previous column it should move to the previous coulumn
        shoudl be renderd at the bottom.

    TODO:  Add  sty;ed component testing
    - may be we can add css styled component testing to it.
    - adding snap shot-testing to it.   to it

    */
  })
})
