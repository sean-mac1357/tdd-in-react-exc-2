import { useState } from 'react';

const NewMessageForm = ({ onSend }) => {
    const [inputText, setInputText] = useState('');

    const _handleChange = (event) => {
        setInputText(event.target.value);
    };

    const _handleClick = (event) => {
        event.preventDefault();
        onSend(inputText);
        setInputText('')
    }

    return (
        <div>
            <input 
            type="text"
            data-testid="messageText"
            value={inputText}
            onChange={_handleChange}/>
            <button 
                type="button"
                data-testid="sendButton"
                onClick={_handleClick}>
                send
            </button>
        </div>
    );
};

export default NewMessageForm;