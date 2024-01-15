import React from 'react';

export function HiddenScrollbarDiv() {
    return (
        <div className="scrollableDiv">
            {/* Your content goes here */}
            {[...Array(20)].map((_, index) => (
                <p key={index}>Scrollable Content {index}</p>
            ))}
        </div>
    );
}

export function HiddecnScrollbarWithCss() {
    return (
        <div className="scrollableDivContainer">
            <div className="scrollableDiv">
                {/* Your content goes here */}
                {[...Array(20)].map((_, index) => (
                    <p key={index}>Scrollable Content {index}</p>
                ))}
            </div>
        </div>
    );
}
