import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import { QuillModules_System, QuillFormats_System} from '../utils/quill';
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
                    {submitted && !state.selectedOption && <div className="help-block" style={{marginBottom: '15px'}}>Plese Select Gmail/Outlook</div>}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" name='from' value={state.from} onChange={onChange} />
                    {submitted && !state.from && <div className="help-block">Email is required</div>}
                    {submitted && state.from && !isValidate.from && <div className="help-block">Wrong Format</div>}
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" name='password' value={state.password} onChange={onChange} />
                    {submitted && !state.password && <div className="help-block">Email Password is required</div>}
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="To" name='to' value={state.to} onChange={onChange} />
                    {submitted && !state.to && <div className="help-block">Receiver Email is required</div>}
                    {submitted && state.to && !isValidate.to && <div className="help-block">Wrong Format</div>}
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" name='subject' value={state.subject} onChange={onChange} />
                    {submitted && !state.subject && <div className="help-block">Subject is required</div>}
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