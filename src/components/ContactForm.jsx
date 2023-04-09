import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { Form, Field, StyledError } from './phonebook.styled';

// import { addContact } from './redux/contactsSlice';
import { useDispatch } from 'react-redux';

const initialValues = {
  name: '',
  number: '',
};

// const phoneRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

// const phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object({
  name: yup.string().required(),
  number: yup
    .number()
    // .matches(phoneRegEx, 'Phone number is not valid')
    .required(),
});

export function ContactForm({ addContact }) {
  // const dispatch = useDispatch();

  // const checkContactIsAdded = newContact => {
  //   const nameContact = newContact.name.trim().toUpperCase();
  //   const findContact = contacts.find(
  //     ({ name }) => name.trim().toUpperCase() === nameContact
  //   );
  //   if (findContact) {
  //     return true;
  //   } else return false;
  // };

  // const addContact = (newContact, actions) => {
  //   const isAddedBefore = checkContactIsAdded(newContact);
  //   if (isAddedBefore) {
  //     alert('contact be already added before');
  //     return;
  //   }

  return (
    <Formik
      onSubmit={addContact}
      // onSubmit={() => dispatch(addContact('test'))}
      initialValues={initialValues}
      // validationSchema={schema}
    >
      <Form>
        <label htmlFor="name">
          <div>Name</div>
          <Field
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component={StyledError} />
        </label>
        <label htmlFor="number">
          <div>Phone number</div>
          <Field
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component={StyledError} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
