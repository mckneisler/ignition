import * as React from "react";

export function GoldCoinIcon(props) {
    return (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="8" />
            <text x="12" y="16" fontSize="10" textAnchor="middle" stroke="currentColor">$</text>
        </svg>
    );
}

export function CascadeNumbersIcon(props) {
    return (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <text x="6" y="7" fontSize="10" textAnchor="middle" stroke="currentColor">1</text>
            <text x="11" y="12" fontSize="10" textAnchor="middle" stroke="currentColor">2</text>
            <text x="16" y="17" fontSize="10" textAnchor="middle" stroke="currentColor">3</text>
        </svg>
    );
}

export function CascadeLettersIcon(props) {
    return (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <text x="6" y="7" fontSize="10" textAnchor="middle" stroke="currentColor">A</text>
            <text x="11" y="12" fontSize="10" textAnchor="middle" stroke="currentColor">B</text>
            <text x="16" y="17" fontSize="10" textAnchor="middle" stroke="currentColor">C</text>
        </svg>
    );
}

export function CascadeNumbersBorderIcon(props) {
    return (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="2" />
            <text x="6" y="8" fontSize="6" textAnchor="middle" stroke="currentColor">1</text>
            <text x="12" y="14" fontSize="6" textAnchor="middle" stroke="currentColor">2</text>
            <text x="18" y="20" fontSize="6" textAnchor="middle" stroke="currentColor">3</text>
        </svg>
    );
}
