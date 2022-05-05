import React from 'react';
import {act, fireEvent, render, waitFor} from '@testing-library/react';
import {SignIn} from "./SignIn";

it('submits form', async () => {
  const signIn = jest.fn()
  const {container} = render(<SignIn onSubmit={signIn} />)

  fireEvent.change(container.querySelector(`[name="email"]`), {target: {value: 'email'}});
  fireEvent.change(container.querySelector(`[name="password"]`), {target: {value: 'password'}});
  fireEvent.click(container.querySelector(`button[type="submit"]`))

  await waitFor(() => {
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// this is required as we need to wait for react to execute state updatesg
    expect(signIn).toHaveBeenCalledWith({ email: 'email', password: 'password' })
  });
})