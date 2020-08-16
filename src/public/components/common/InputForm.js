import React from 'react'

const InputForm = ({
   type,
   placeholder,
   className,
   name,
   value,
   onChange,
   submitted,
   requiredField,
}) => {
    return (
        <React.Fragment>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={className}
            />
            {submitted && !value && <div className="warning-block">
                {requiredField} is required
            </div>}
        </React.Fragment>
    )
};

export default InputForm