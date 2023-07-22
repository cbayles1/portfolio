
import BubbleLink from '../(components)/BubbleLink';

export default function BackButton({margin=4}) {
    return (
        <BubbleLink href="./" name="Go Back" initBgColor='nero' initTextColor='oat' target='_self' margin={margin}></BubbleLink>
    );
}