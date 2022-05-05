import React from 'react';
import { useFormik } from 'formik'

type SignIn = {
  email: string,
  password: string
}

export const SignIn = (props: { onSubmit: (values: SignIn) => {} }) => {
  const formik = useFormik<SignIn>({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      props.onSubmit(values)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">First Name</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Last Name</label>
      <input
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  )
}