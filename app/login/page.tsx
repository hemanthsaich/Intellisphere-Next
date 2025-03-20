'use client';

import { Theme, TextInput, Button, Link, InlineNotification , PasswordInput} from '@carbon/react';
import { View, Login as LoginIcon } from '@carbon/icons-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export default function Login() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log('Login attempt:', values);
      // Add login logic here
      router.push('/dashboard');
    },
  });

  return (
    <Theme theme="g100">
      <main className="auth-container">
        <div className="auth-form">
          <h1>Sign in</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <TextInput
                id="email"
                labelText="Email"
                type="email"
                {...formik.getFieldProps('email')}
                invalid={formik.touched.email && !!formik.errors.email}
                invalidText={formik.touched.email && formik.errors.email}
              />
            </div>
            <div className="form-group">
              <PasswordInput
                id="password"
                labelText="Password"
                {...formik.getFieldProps('password')}
                invalid={formik.touched.password && !!formik.errors.password}
                invalidText={formik.touched.password && formik.errors.password}
              />
            </div>
            <div className="form-actions">
              <Button type="submit" renderIcon={LoginIcon}>
                Login
              </Button>
              <Link href="/register">
                Don't have an account? Register here
              </Link>
            </div>
          </form>
        </div>
      </main>
    </Theme>
  );
}