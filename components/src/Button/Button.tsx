import React, { FC } from 'react';

export interface ButtonProps {
    label: string;
}

export const Button: FC<ButtonProps> = ({ label }) => {
    return <button>{label}</button>;
}
