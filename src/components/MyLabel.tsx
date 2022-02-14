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
export const MyLabel = ( {
  label = 'No Label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor = '',
}: Props ) => {
  return (
    <span className={`${size} text-${ color }`} style={{
      textTransform: allCaps ? 'uppercase' : 'none',
      color: fontColor.length > 0 ? fontColor : '',
    }} >
      { label }
    </span>
  )
};
