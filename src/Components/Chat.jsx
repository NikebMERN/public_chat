import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useRef } from 'react';
import { db } from '../firebase';
import Message from './Message';
import SendMessage from './SendMessage';
import * as C from "./styles";

const style = {
    main: `flex flex-col p-[10px]`,
};

const Chat = () => {
    const [message, setMessage] = React.useState([]);
    const scroll = useRef();
    const refBody = useRef("");

    useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessage(messages);
        });

        if (refBody.current.scrollHeight > refBody.current.offsetHeight) {
            refBody.current.scrollTop =
              refBody.current.scrollHeight - refBody.current.offsetHeight;
          }
        return () => unsubscribe();
    }, []);




    return (
        <C.Container>
            <main className={style.main}>
                {message &&
                    message.map((messages) => (
                        <Message key={messages.id} message={messages} />
                    ))} 
            </main>
            <SendMessage scroll={scroll} />
            <span ref={scroll}></span>
        </C.Container>
    )
}

export default Chat;