import React from 'react';
import './Footer.css'
import { getFullYear, getFooterCopy } from '../utils/utils'

export function Footer(props) {
    return (
        <footer className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
        </footer>
    )
}
