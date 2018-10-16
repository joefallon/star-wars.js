import * as React from 'react';

interface CardHeaderTitleProps {
    title: string
}

export const CardHeaderTitle: React.SFC<CardHeaderTitleProps> = (props) => {
    return (
        <h2>{props.title}</h2>
    );
};