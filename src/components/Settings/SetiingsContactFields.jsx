import React from 'react';
import { Field } from 'redux-form';
import { Input } from '../common/FormControls';

const SettigsContactFields = ({profile}) => {
    const fild = profile.contacts.forEach()
    return (
        <div>
            {fild}
        </div>
    )
}

export default SettigsContactFields;