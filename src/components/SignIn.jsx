import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useHistory } from 'react-router-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

import useSignIn from '../hooks/useSignIn';

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    display: 'flex',
    padding: 15,
  },
  formContainer: {
    backgroundColor: theme.colors.containerBackground,
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <View style={styles.button}>
          <Text fontWeight="bold" style={{ color: theme.colors.barText }}>
            Sign in
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const history = useHistory();
  const [signIn] = useSignIn();

  const onSubmit = async values => {
    try {
      await signIn(values);
      history.push('/repositories');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
