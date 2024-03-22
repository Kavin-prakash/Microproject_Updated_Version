import { getByTestId, render, screen, fireEvent, getByText } from '@testing-library/react';
import Registration from '../Components/Registration';
import axios from 'axios';
import { BrowserRouter,Routes } from 'react-router-dom';


jest.mock('axios');
jest.mock('react-router-dom');


describe("Registration TestCases", () => {
    test("Testing Registration Heading", () => {
        render(<Registration />);
        const registrationheading = screen.getByTestId("registration-heading");
        expect(registrationheading).toBeInTheDocument();
        expect(registrationheading).toHaveTextContent("Registration");
    })

});

describe("Testing the Input Fields", () => {
    test("Testing the Input Fields", () => {
        render(<Registration />);
        const fnamefield = screen.getByTestId("firstnamefield");
        expect(fnamefield).toBeInTheDocument();

        const lnamefield = screen.getByTestId("lastnamefield");
        expect(lnamefield).toBeInTheDocument();

        const emailfield = screen.getByTestId("emailfield");
        expect(emailfield).toBeInTheDocument();

        const pwdfield = screen.getByTestId("passwordfield");
        expect(pwdfield).toBeInTheDocument();

        const confirmpwdfield = screen.getByTestId("confirmpasswordfield");
        expect(confirmpwdfield).toBeInTheDocument();



    });

});


describe("Testing the input placholder", () => {
    test("Testing the Placeholder", () => {
        render(<Registration />);
        const fnameplaceholder = screen.getByPlaceholderText("First Name.....");
        expect(fnameplaceholder).toBeInTheDocument();
    });
    test("Testing the Placeholder", () => {
        render(<Registration />);
        const lnameplaceholder = screen.getByPlaceholderText("Last Name....");
        expect(lnameplaceholder).toBeInTheDocument();
    });
    test("Testing the Placeholder", () => {
        render(<Registration />);
        const emailplaceholder = screen.getByPlaceholderText("Email.....");
        expect(emailplaceholder).toBeInTheDocument();


    });
    test("Testing the Placeholder", () => {
        render(<Registration />);
        const pwdplaceholder = screen.getByPlaceholderText("Password.....");
        expect(pwdplaceholder).toBeInTheDocument();


    });
    test("Testing the Placeholder", () => {
        render(<Registration />);
        const confirmpwdplaceholder = screen.getByPlaceholderText("Confirm Password.....");
        expect(confirmpwdplaceholder).toBeInTheDocument();
    });

});

describe("Testing the Inputfield is empty", () => {
    test("Test the fname field is empty or not ", () => {
        render(<Registration />);
        const checkfname = screen.getByTestId('firstnamefield');
        expect(checkfname).toBeInTheDocument();
        expect(checkfname).toHaveTextContent('');
    });
    test("Test the lname field is empty or not ", () => {
        render(<Registration />);
        const checklname = screen.getByTestId('lastnamefield');
        expect(checklname).toBeInTheDocument();
        expect(checklname).toHaveTextContent('');
    });
    test("Test the email field is empty or not ", () => {
        render(<Registration />);
        const checkemail = screen.getByTestId('emailfield');
        expect(checkemail).toBeInTheDocument();
        expect(checkemail).toHaveTextContent('');
    });
    test("Test the password field is empty or not ", () => {
        render(<Registration />);
        const checkfpassword = screen.getByTestId('passwordfield');
        expect(checkfpassword).toBeInTheDocument();
        expect(checkfpassword).toHaveTextContent('');
    });
    test("Test the confirmpassword field is empty or not ", () => {
        render(<Registration />);
        const checkconfirmpassword = screen.getByTestId('confirmpasswordfield');
        expect(checkconfirmpassword).toBeInTheDocument();
        expect(checkconfirmpassword).toHaveTextContent('');
    });

});

