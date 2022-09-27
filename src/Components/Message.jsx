import React from 'react';
import { auth } from '../firebase';
// import { collection, orderBy, query, updateDoc } from "firebase/firestore";
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const style = {
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name: `mt-[-4rem] text-gray-600 text-xs`,
    sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full object-contain`,
    received: `bg-green-600 shadow-lg text-white float-left rounded-br-full object-contain`,
};

const Chat = ({ message }) => {
// const Delete = async () => {
//     const q = query(collection(db, 'messages'), orderBy('timestamp'));
//     await updateDoc(q, {
//         text: `This Message Deleted by: ${message.name}`,
//     });
// }

    return (
        <pembox>
        <div
        className={`${style.message} ${  message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`}`}        >
        <p className={style.name}>{message.name}({message.timeloged})</p>
        <p className={`${  message.uid === auth.currentUser.uid ? `mr-[-10pc]` : `ml-[-5pc] px-1`}`}>{message.text}</p>
            {/* <DeleteForeverIcon onClick={Delete} /> */}
        </div>
      </pembox>
    )
}

export default Chat;