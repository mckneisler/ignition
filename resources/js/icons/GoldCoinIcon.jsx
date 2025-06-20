import * as React from "react";

export function GoldCoinIcon(props) {
    return (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="8" />
            <text x="12" y="16" fontSize="10" textAnchor="middle" stroke="currentColor">$</text>
        </svg>
    );
}
