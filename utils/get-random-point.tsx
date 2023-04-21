import {BASE_POINTS} from "../components/striangle";

const getRandomIndex = (max: number) => {
    return Math.floor(Math.random() * max);
}
type ViewPoint = {
    newX: number
    newY: number
    newColor: string
}

const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

export type RandomPointProps = {
    basePoints: BASE_POINTS,
    x: number,
    y: number,
    distance: number,
    topDotsColor: string,
    rightDotsColor: string,
    leftDotsColor: string
}
const getRandomPoint = (options: RandomPointProps): ViewPoint => {
    let newX, newY, newColor;
    const rand = getRandomIndex(3);
    if (rand === 0) {
        newX = lerp(options.x, options.basePoints.x1, options.distance);
        newY = lerp(options.y, options.basePoints.y1, options.distance);
        newColor = options.topDotsColor;
    } else if (rand === 1) {
        newX = lerp(options.x, options.basePoints.x2, options.distance);
        newY = lerp(options.y, options.basePoints.y2, options.distance);
        newColor = options.leftDotsColor;
    } else {
        newX = lerp(options.x, options.basePoints.x3, options.distance);
        newY = lerp(options.y, options.basePoints.y3, options.distance);
        newColor = options.rightDotsColor;
    }
    return {
        newX,
        newY,
        newColor
    } as ViewPoint
}

export default getRandomPoint
