import React from 'react';
import Chat from './Components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Components/load';
import Navbar from './Components/Navbar';
import { auth } from './firebase';

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[93vh] bg-gray-100 mt-0 shadow-xl border relative`,
  sectionContain: `flex flex-col h-[6vh] text-white text-2xl bg-gray-700 mt-0 shadow-xl border relative`
};

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />;

  return (
    <div className={style.appContainer}>
      <h2 className={style.sectionContain}>Niko Public Chat { user ? '(Loged)' : '' }</h2>
      <section className={style.sectionContainer}>
            {/* Navbar */}
              <Navbar />
            {/* Chat Component */}
            {user ? <Chat /> : null}
      </section>
    </div>
  )
}

export default App;