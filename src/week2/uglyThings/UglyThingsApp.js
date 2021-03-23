import React from 'react'
import Form from './UglyThingsForm.js'
import Things from './Things.js'
import { ContextProvider } from './UglyThingsContext.js'
import './UglyThingsApp.css'

function UglyThingsApp() {
    return (
        <div>
            <ContextProvider>
                <Form />
                <Things />
            </ContextProvider>
        </div>
    );
}

export default UglyThingsApp