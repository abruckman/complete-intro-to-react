import React from 'react'
import ShowCard from './showCard'
import {shallow} from 'enzyme'
import {shallowToJson} from 'enzyme-to-json'
import preload from '../public/data.json'


test('Search snapshot test', ()=> {
  const show = preload.shows[0]
  const component = shallow(<ShowCard key={show.imdbID} {...show} />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
