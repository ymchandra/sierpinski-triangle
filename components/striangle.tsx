import React from "react";
import {random} from "underscore";
import getRandomPoint, {RandomPointProps} from "../utils/get-random-point";

const SVG_HEIGHT= 1000;
const SVG_WIDTH= 1000;
export interface BASE_POINTS {
    x1: number
    y1: number
    x2: number
    y2: number
    x3: number
    y3: number
}

const INITIAL_POINTS = {
    x1: SVG_WIDTH/2,
    y1: 10,
    x2: 10,
    y2: SVG_HEIGHT - 10,
    x3: SVG_WIDTH - 10,
    y3: SVG_HEIGHT - 10,
} as BASE_POINTS;

type Props = {
    show: boolean
    totalPoints: number
    distance: number
    baseRadius: number
    baseDotsColor: string
    dotsRadius: number
    topDotsColor: string
    rightDotsColor: string
    leftDotsColor: string
}
const STriangle = ({show, totalPoints, distance, baseRadius, baseDotsColor, dotsRadius, topDotsColor, rightDotsColor, leftDotsColor}: Props) => {
    if (!show) {
        return (<></>);
    }
    const newPoints = [
        <circle key={1} cx={INITIAL_POINTS.x1} cy={INITIAL_POINTS.y1} r={baseRadius} fill={baseDotsColor}/>,
        <circle key={2} cx={INITIAL_POINTS.x2} cy={INITIAL_POINTS.y2} r={baseRadius} fill={baseDotsColor}/>,
        <circle key={3} cx={INITIAL_POINTS.x3} cy={INITIAL_POINTS.y3} r={baseRadius} fill={baseDotsColor}/>,
    ];
    const randomPointOptions: RandomPointProps = {
        basePoints: INITIAL_POINTS,
        x: random(SVG_WIDTH),
        y: random(SVG_HEIGHT),
        distance,
        topDotsColor,
        rightDotsColor,
        leftDotsColor
    };
    let randomPoint = getRandomPoint(randomPointOptions);
    newPoints.push(<circle key={4} cx={randomPoint.newX} cy={randomPoint.newY} r={dotsRadius} fill={randomPoint.newColor}/>);
    for (let i = 0; i < totalPoints; i++) {
        randomPointOptions.x = randomPoint.newX;
        randomPointOptions.y = randomPoint.newY;
        randomPointOptions.distance = distance;
        randomPoint = getRandomPoint(randomPointOptions);
        newPoints.push(<circle key={i + 5} cx={randomPoint.newX} cy={randomPoint.newY} r={dotsRadius} fill={randomPoint.newColor}/>);
    }
    return (
        <svg height={SVG_HEIGHT} width={SVG_WIDTH}>
            {newPoints}
        </svg>
    );
}

export default STriangle