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

    it('1.4) should be able to clear input box on Enter', () => {
      //  const inputValue = ['Clear Input', 'Mithil']
      const inputValue = ['Dummy Text 1', 'Dummy Text 2', 'Dummy Text 3', 'Dummy Text 4']
      const inputBox = comp.find('.add-element').hostNodes()
      const cardElement = comp.find('.assembly-column').hostNodes()

      inputValue.forEach((addCard) => {
        inputBox.simulate('change', { target: { value: addCard } })
        comp.find('.input-submit').hostNodes().simulate('submit')
        comp.update()
      })

      // adds elements/cards to the first column
      expect(comp.find('.assembly-column').hostNodes().at(0).find('div').at(0).text()).toEqual(
        'Dummy Text 4'
      )
      expect(comp.find('.assembly-column').hostNodes().at(0).find('div').at(1).text()).toEqual(
        'Dummy Text 3'
      )

      // Simulate left click for 'Dummy CText 4' on column "Ideas"
      comp.find('.assembly-column').hostNodes().at(0).find('div').at(0).simulate('click')

      comp.update()

      // expecting it to move to next column i.e : 'Development'
      expect(comp.find('.assembly-column').hostNodes().at(1).find('div').at(0).text()).toEqual(
        'Dummy Text 4'
      )

      // expecting "Dummy Text 3" to move to the top of "Development" column
      comp.find('.assembly-column').hostNodes().at(0).find('div').at(0).simulate('click')

      comp.update()

      expect(comp.find('.assembly-column').hostNodes().at(1).find('div').at(0).text()).toEqual(
        'Dummy Text 3'
      )

      // expecting "Dummy Text 3" to move to the top of "TESTING" column
      comp.find('.assembly-column').hostNodes().at(1).find('div').at(0).simulate('click')
      comp.update()
      // expecting "Dummy Text 3" to move to the top of final column i.e :  "DEPLOYMENT"
      comp.find('.assembly-column').hostNodes().at(2).find('div').at(0).simulate('click')
      comp.update()
      // expecting "Dummy Text 3" to be Deleted from final column i.e :  "DEPLOYMENT" column
      comp.find('.assembly-column').hostNodes().at(3).find('div').at(0).simulate('click')
      comp.update()
      expect(comp.find('.assembly-column').hostNodes().at(3).find('div').exists()).toBe(false)

      // Right click on card Dummy Text 2 from column  'Ideas' , this will delete Dummy Text 1
      comp.find('.assembly-column').hostNodes().at(0).find('div').at(0).simulate('contextmenu')
      comp.update()

      expect(comp.find('.assembly-column').hostNodes().at(3).find('div').exists()).toBe(false)
    })

    /*
    TODO:  Add  styled component testing
    - may be we can add css styled component testing to it.
    - adding snap shot-testing to it.   to i
    */
  })
})
