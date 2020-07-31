import React from 'react';
import style from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems'
import Message from './Message/Message'

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d =>
        <DialogItems name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m =>
        <Message message={m.message} />)
    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'
                        value={state.newMessageBody} /></div>
                    <div><button onClick={onSendMessageClick}>
                        Send</button></div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;