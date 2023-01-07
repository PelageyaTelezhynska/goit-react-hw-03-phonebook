import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Component } from 'react';
import styled from 'styled-components';
import { StyledForm, Label, StyledField, Button } from './ContactForm.styled';

const ErrorText = styled.div`
  padding: 8px;
  margin-top: 8px;
  color: #ef4827;
`;

const nameInputId = nanoid();
const numberInputId = nanoid();
const initialValues = {
  name: '',
  number: '',
};
const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});
export class ContactForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <StyledForm>
          <Label htmlFor={nameInputId}>
            Name
            <StyledField
              type="text"
              id={nameInputId}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage
              name="name"
              render={message => <ErrorText>{message}</ErrorText>}
            />
          </Label>
          <Label htmlFor={numberInputId}>
            Number
            <StyledField
              type="tel"
              name="number"
              id={numberInputId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage
              name="number"
              render={message => <ErrorText>{message}</ErrorText>}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    );
  }
}

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   initialValues = {
//     name: '',
//     number: '',
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <Formik initialValues={this.initialValues}>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor={this.nameInputId}>
//             Name
//             <input
//               type="text"
//               value={name}
//               id={this.nameInputId}
//               onChange={this.handleChange}
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//           <label htmlFor={this.numberInputId}>
//             Number
//             <input
//               type="tel"
//               value={number}
//               onChange={this.handleChange}
//               name="number"
//               id={this.numberInputId}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <button type="submit">Add contact</button>
//         </form>
//       </Formik>
//     );
//   }
// }
