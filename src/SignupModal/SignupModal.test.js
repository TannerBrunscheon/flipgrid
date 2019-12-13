import React from 'react';
import { shallow, mount } from 'enzyme';
import SignupModal from './SignupModal';
import SignupForm from '../SignupForm/SignupForm';
import Confirmation from '../Confirmation/Confirmation';


describe("Signup Modal Should", ()=>{
    it("initialize with the form rendering", ()=>{
        //Arrange 
        const wrapper =  shallow(<SignupModal/>)
        //Act

        //Assert
        wrapper.contains(<SignupForm/>)
    })
    it("should change to confirmation page on submit",()=>{

        //Arrange 
        const wrapper = mount(<SignupModal/>)
        
        //Act
        wrapper.find("SignupForm").simulate("submit")
        
        //Assert
        wrapper.contains(<Confirmation/>)

    })
})