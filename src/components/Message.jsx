import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from '../redux/messages/messages';

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messages.value);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const newMessage = () => {
    dispatch(fetchMessages());
  };

  return (
    <div className="message-container">
      <h1 className="message">{message.text}</h1>
      <button onClick={newMessage} type="button">
        Generate
      </button>
    </div>
  );
};

export default Message;
