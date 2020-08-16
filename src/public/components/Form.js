import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import { QuillModules_System, QuillFormats_System} from '../utils/quill';
import InputForm from './common/InputForm'
import styles from './Style.css'

const Form = ({state, submitted, isValidate, onChange, onChangeHandlerQuill, onClick}) => {

    return(
        <div className="container">
            <div className={styles.wrapper} style={{background: '#b5b5a9'}}>
                <div style={{textAlign:'center'}}>
                    <h3 style={{color:'red',marginRight:'15px'}}>Settings</h3>
                    <label style={{marginRight:'5px'}}>
                        <input
                            name="selectedOption"
                            value="Gmail"
                            type="radio"
                            checked={state.selectedOption === 'Gmail'}
                            onChange={onChange} /> Gmail
                    </label>
                    <label style={{marginRight:'5px'}}>
                        <input
                            name="selectedOption"
                            value="Outlook"
                            type="radio"
                            checked={state.selectedOption === 'Outlook'}
                            onChange={onChange} /> Outlook
                    </label>
                    {submitted
                    && !state.selectedOption
                    && <div className="warning-block" style={{marginBottom: '15px'}}>
                        Please Select Service Gmail/Outlook</div>
                    }
                </div>
                <div className="form-group">
                    <InputForm
                        type="text"
                        placeholder="Email"
                        className="form-control"
                        name="from"
                        value={state.from}
                        onChange={onChange}
                        submitted={submitted}
                        requiredField="Email"
                    />
                    {submitted
                        && state.from
                        && !isValidate.from
                        && <div className="warning-block">Wrong Format</div>
                    }
                </div>
                <div className="form-group">
                    <InputForm
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        name="password"
                        value={state.password}
                        onChange={onChange}
                        submitted={submitted}
                        requiredField="Password"
                    />
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className="form-group">
                    <InputForm
                        type="email"
                        placeholder="Receiver Email"
                        className="form-control"
                        name="to"
                        value={state.to}
                        onChange={onChange}
                        submitted={submitted}
                        requiredField="Receiver Email"
                    />
                    {submitted
                        && state.to
                        && !isValidate.to
                        && <div className="warning-block">Wrong Format</div>
                    }
                </div>
                <div className="form-group">
                    <InputForm
                        type="text"
                        placeholder="Subject"
                        className="form-control"
                        name="subject"
                        value={state.subject}
                        onChange={onChange}
                        submitted={submitted}
                        requiredField="Subject"
                    />
                </div>
                <div className="form-group">
                    <ReactQuill
                        modules={QuillModules_System}
                        formats={QuillFormats_System}
                        value={state.body || ''}
                        onChange = {(e)=>onChangeHandlerQuill(e,'body')}
                    />
                </div>
                <div className={styles.send}>
                    <button className="btn btn-success" onClick={onClick}>
                        Send <i className="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default (Form);