import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import GoogleButton from 'react-google-button'
import { MdSupervisedUserCircle } from 'react-icons/md';
import { auth } from '../firebase';

const style = {
  wrapper: `flex justify-center`,
  button: `w-10 md:w-11 lg:w-12 object-cover hover:w-11 hover:md:w-12 hover:lg:w-13`,
  Ico: `w-[100%] h-[30vh] object-cover text-white`
}

const SignIn = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    const googlegetin = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }

  return (
    <div className={style.wrapper}>
        { !user ? <GoogleButton onClick={googlegetin}  /> : <button onClick={() => auth.signOut()} className={style.button} >{ user.photoURL ? <img src={user.photoURL} style={{ borderRadius: '50px' }} alt="" /> : <MdSupervisedUserCircle className={style.Ico} /> }</button> }
    </div>
  )
}

export default SignIn;