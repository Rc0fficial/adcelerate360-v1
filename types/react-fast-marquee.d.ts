declare module 'react-fast-marquee' {
  import { ReactNode, CSSProperties } from 'react';

  export interface MarqueeProps {
    /**
     * Inline style for the container div
     * Type: object
     * Default: {}
     */
    style?: CSSProperties;
    /**
     * Class name to style the container div
     * Type: string
     * Default: ""
     */
    className?: string;
    /**
     * Whether to automatically fill blank space in the marquee with copies of the children or not
     * Type: boolean
     * Default: false
     */
    autoFill?: boolean;
    /**
     * Whether to play or pause the marquee
     * Type: boolean
     * Default: true
     */
    play?: boolean;
    /**
     * Whether to pause the marquee when hovered
     * Type: boolean
     * Default: false
     */
    pauseOnHover?: boolean;
    /**
     * Whether to pause the marquee when clicked
     * Type: boolean
     * Default: false
     */
    pauseOnClick?: boolean;
    /**
     * The direction the marquee is sliding
     * Type: "left" or "right"
     * Default: "left"
     */
    direction?: 'left' | 'right' | 'up' | 'down';
    /**
     * Speed calculated as pixels/second
     * Type: number
     * Default: 50
     */
    speed?: number;
    /**
     * Duration to delay the animation after render, in seconds
     * Type: number
     * Default: 0
     */
    delay?: number;
    /**
     * The number of times the marquee should loop, 0 is equivalent to infinite
     * Type: number
     * Default: 0
     */
    loop?: number;
    /**
     * Whether to show the gradient or not
     * Type: boolean
     * Default: false
     */
    gradient?: boolean;
    /**
     * The rgb color of the gradient as an array of length 3
     * Type: Array<number> of length 3
     * Default: [255, 255, 255]
     */
    gradientColor?: [number, number, number];
    /**
     * The width of the gradient on either side
     * Type: string or number
     * Default: 200
     */
    gradientWidth?: number | string;
    /**
     * A callback for when the marquee finishes scrolling and stops. Only calls if loop is non-zero.
     * Type: Function
     * Default: null
     */
    onFinish?: () => void;
    /**
     * A callback for when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead).
     * Type: Function
     * Default: null
     */
    onCycleComplete?: () => void;
    /**
     * A callback for when the marquee starts.
     * Type: Function
     * Default: null
     */
    onMount?: () => void;
    /**
     * The children rendered inside the marquee
     * Type: ReactNode
     * Default: null
     */
    children?: ReactNode;
  }

  export default function Marquee(props: MarqueeProps): JSX.Element;
}
