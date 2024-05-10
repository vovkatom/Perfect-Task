import { useState, useId } from 'react';
import { useDispatch } from 'react-redux';
import { support } from '../../../../redux/auth/auth-operations';
import css from './need-help-modal.module.css';
import clsx from 'clsx';

const INITIAL_STATE = {
  email: '',
  message: '',
};

const NeedHelpModal = () => {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(support(formData));

      reset();
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const reset = () => {
    setFormData({ ...INITIAL_STATE });
  };

  const emailId = useId();
  const commentsId = useId();

  const { email, message } = formData;

  const inputClassName = clsx(css.modalInput, css.modalControl);
  const textareaClassName = clsx(css.modalInput, css.modalControlText);
  const buttonClassName = clsx(css.modalButton, css.modalControl);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className={inputClassName}
            type="email"
            id={emailId}
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email address"
            required
          />
        </div>
        <div>
          <textarea
            className={textareaClassName}
            id={commentsId}
            name="message"
            value={message}
            onChange={handleChange}
            rows="4"
            placeholder="Comment"
            required
          />
        </div>
        <button className={buttonClassName} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default NeedHelpModal;