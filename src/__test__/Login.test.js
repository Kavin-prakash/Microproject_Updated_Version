import { getByTestId, render, screen, fireEvent, getByText,waitFor } from '@testing-library/react';
import Login from '../Components/Login';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { BrowserRouter,Routes } from 'react-router-dom';


jest.mock('axios');
jest.mock('react-router-dom');

describe("Login page testcases", () => {

    test("Testing the login page header", () => {
        render(<Login />);
        const loginheader = screen.getByTestId("loginheader");
        expect(loginheader).toBeInTheDocument();
        expect(loginheader).toHaveTextContent("Login");
    });

    // Testing the input fields
    test("Test the login email field empty  or not along with the document ", () => {
        render(<Login />);
        const emailfield = screen.getByTestId("emailfield");
        expect(emailfield).toBeInTheDocument();
        expect(emailfield).toHaveTextContent('')

    });

    test("Test the login password field empty  or not along with the document ", () => {
        render(<Login />);
        const passwordfield = screen.getByTestId("passwordfield");
        expect(passwordfield).toBeInTheDocument();
        expect(passwordfield).toHaveTextContent('')

    });

    //Testing the icon for the login page
    test("Check if the usericon are present in the Login page", () => {
        const { getByTestId } = render(<Login />);
        const testusernameicon = screen.getByTestId("nameicon");
        expect(testusernameicon).toBeInTheDocument();
    });
    test("Check if the passwordicon are present in the Login page", () => {
        const { getByTestId } = render(<Login />);
        const testpasswordicon = screen.getByTestId("passwordicon");
        expect(testpasswordicon).toBeInTheDocument();
    });

    // Testing the login button in login page 

    test("Chech the login button is present or not ", () => {
        render(<Login />);
        const textloginbutton = screen.getByTestId("loginbutton");
        expect(textloginbutton).toBeInTheDocument();
    });

});

describe("Test the Login Component", () => {

    test("render the login form with login button", async () => {
        render(<Login />);
        const buttonList = await screen.findAllByRole("button");
        console.log();
        expect(buttonList).toHaveLength(1);
    });
 
 
    test("email input field should accept email", () => {
        render(<Login />);
        const email = screen.getByPlaceholderText("Enter you email....");
        userEvent.type(email, "rajkumar");
        expect(email.value).not.toMatch("rajkumar@gmail.com");
 
    });
 
    test("password input should have type only password", () => {
        render(<Login />);
        const password = screen.getByPlaceholderText("Enter your password...");
        expect(password).toHaveAttribute("type", "password");
    });
});


describe('Login Component', () => {
    test('displays error message when invalid email and password are submitted',async  () => {
      render(<Login />);
      
      // Simulate user input for email and password fields
      fireEvent.change(screen.getByTestId('emailfield'), { target: { value: 'invalidemail' } });
      fireEvent.change(screen.getByTestId('passwordfield'), { target: { value: '123' } });
      
      // Simulate form submission
      fireEvent.click(screen.getByTestId('loginbutton'));
      
      // Wait for error messages to appear
      await waitFor(() => {
        expect(screen.getAllByText('**Invalid Email address')).toBeInTheDocument();
        expect(screen.getAllByText('**Minmun 6 chars is Required')).toBeInTheDocument();

      },{timeout:3000});
    });
  });