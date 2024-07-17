'use client'

import { useEffect } from 'react';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { signIn } from 'next-auth/react';

const GoogleSignInButton = () => {
  useGoogleOneTapLogin({
    onSuccess: credentialResponse => {
    console.log(credentialResponse);
      signIn('google', { callbackUrl: '/' });
    },
    onError: () => {
      console.log('Login Failed');
    },
  });

  return null;
};

export default GoogleSignInButton;