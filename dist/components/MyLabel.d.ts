/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
     * this is a the message to display
     */
    label: string;
    /**
     * the size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * the color of the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * whether or not to capitalize all letters
     */
    allCaps?: boolean;
    /**
     * color picker
     */
    fontColor?: string;
}
/**
 * Label component for interaction
 */
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, }: Props) => JSX.Element;
