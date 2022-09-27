import { addDoc, collection, serverTimestamp  } from 'firebase/firestore';
import React from 'react'
import { auth, db } from '../firebase';

const style = {
    form: `mb-2 h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[20%] bg-green-500`,
};

const SendMessage = ({scroll}) => {
    const [input, setInput] = React.useState('');

    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            alert('Please enter a valid message')
            return
        }
        const hr = new Date().getHours();
        const min = new Date().getMinutes();
        const month = new Date().getMonth();
        const yr = new Date().getFullYear();
        const day = new Date().getDay();
        const APM = hr >= 12 ? 'PM' : 'AM';
        const { uid, displayName } = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp(),
            timeloged:  `${yr}/${month}/${day} ${hr}:${min} ${APM}`
        })
        setInput('');
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }


    return (
        <div>
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type='text'
        placeholder='Type Nice thing'
      />
      <button className={style.button} type='submit'>
        Send
      </button>
    </form>
        </div>
    )
}

export default SendMessage