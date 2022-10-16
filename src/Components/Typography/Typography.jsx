import React from 'react';
import './Typography.scss';

export const Heading = ({ title }) => (
    <h1 className="heading">{title}</h1>
);

export const SubHeading = ({ title }) => (
    <span className="subHeading">{title}</span>
);
export const SmallSubHeading = ({ title }) => (
    <span className="smallSubHeading">{title}</span>
);
export const StylishHeading = ({ title }) => (
    <span className="stylishHeading">{title}</span>
);
export const Text = ({ title }) => (
    <p className="text">{title}</p>
);