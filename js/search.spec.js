import React from 'react'
import Search, {Unwrapped as UnwrappedSearch} from './search'
import ShowCard from './showCard'
import preload from '../public/data.json'
import {Provider} from 'react-redux'
import {shallow, render} from 'enzyme'
import {shallowToJson} from 'enzyme-to-json'
import store from './store'
import {setSearchTerm} from './actionCreators'

test('Search snapshot test', ()=> {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
//
test('seach should render a show card for each show', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />)
  expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

test('search should render correct amount of shows based on search', () => {
  const searchWord = 'house'
  store.dispatch(setSearchTerm(searchWord))
  const component = render(
    <Provider store={store}>
      <Search shows={preload.shows}/>
    </Provider>)
  // const component = shallow(<Search />)
  // component.find('input').simulate('change', {target: {value: searchWord}})
  const showCount = preload.shows.filter((show) => {return`${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0}).length
  expect(component.find('.show-card').length).toEqual(showCount)
})
