import React from 'react';
import { shallow } from 'enzyme';
import Confirmation from './Confirmation';


describe("Confirmation Should", ()=>{
    it("render the props passed in",()=>{
        //Arrange
            const firstName = "foo", email = "bar@bar.com"
            const wrapper = shallow(<Confirmation {...{firstName,email}}/>)
        //Act
        //Rendering is the action
        //Assert
            wrapper.contains(firstName);
            wrapper.contains(email)

    })
})