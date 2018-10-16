import * as React from 'react';

interface CardBodyItemProps {
    name:      string,
    className: string,
    value:     string
}

export const CardBodyItem: React.SFC<CardBodyItemProps> = (props) => {
    return (
        <div>
            <strong>{props.name}: </strong>
            <span className={props.className}>{props.value}</span>
        </div>
    );
};