import Head from 'next/head'
import React, {useState} from "react";
import {GithubPicker} from "react-color";
import STriangle from "../components/striangle";

export default function Home() {
    const [dots, setDots] = useState(1);
    const [distance, setDistance] = useState(0.5);
    const [baseRadius, setBaseRadius] = useState(10);
    const [baseDotsColor, setBaseDotsColor] = useState('#0000FF');
    const [dotsRadius, setDotsRadius] = useState(1);
    const [show, setShow] = useState(false);
    const [topDotsColor, setTopDotsColor] = useState('violet');
    const [leftDotsColor, setLeftDotsColor] = useState('red');
    const [rightDotsColor, setRightDotsColor] = useState('cyan');

    const createSTriangle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShow(true);
    }

    const reset = () => {
        setDots(1);
        setDistance(0.5);
        setBaseRadius(10);
        setBaseDotsColor('#0000FF');
        setDotsRadius(1);
        setShow(false);
    }

    return (
        <div className={'my-container'}>
            <Head>
                <title>Sierpinski Triangle</title>
                <meta name="description" content="sierpinski-triangle"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <div className={"grid grid-cols-3 gap-4 w-full"}>
                    <div id='properties'>
                        <h1 className={"mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"}>
                            Sierpinski Triangle
                        </h1>
                        <div className={"relative mt-2"}>
                            <label htmlFor="totalDots" className={"helperLabel"}>Total Dots</label>
                            <input aria-label={"Total Dots"} id="totalDots" placeholder="Total Dots"
                                   type={"number"}
                                   value={dots}
                                   onChange={(e) => {
                                       setDots(parseInt(e.target.value))
                                   }}/>
                        </div>
                        <div className={"relative mt-3"}>
                            <label htmlFor="distance" className={"helperLabel"}>Distance Probability</label>
                            <input id="distance" placeholder="Distance Probability"
                                   type={"range"}
                                   min={0}
                                   max={1}
                                   step={0.1}
                                   value={distance}
                                   onChange={(e) => {
                                       setDistance(parseFloat(e.target.value))
                                   }}/>
                        </div>
                        <div className={"relative mt-2"}>
                            <label htmlFor="base_radius" className={"helperLabel"}>Base Radius</label>
                            <input id="base_radius" placeholder="Base Radius"
                                   type={"range"}
                                   min={1}
                                   max={20}
                                   step={1}
                                   value={baseRadius}
                                   onChange={(e) => {
                                       setBaseRadius(parseInt(e.target.value))
                                   }}/>
                        </div>
                        <div className={"relative mt-2"}>
                            <label htmlFor="dots_radius" className={"helperLabel"}>Dots Radius</label>
                            <input id="dots_radius" placeholder="Dots Radius"
                                   type={"range"}
                                   min={1}
                                   max={20}
                                   step={1}
                                   value={dotsRadius}
                                   onChange={(e) => {
                                       setDotsRadius(parseInt(e.target.value))
                                   }}/>
                        </div>
                        <div className={"grid grid-cols-2 w-1/2"}>
                        <div className={"relative mt-2"}>
                            <label className={"helperLabel"}>Base dots color</label>
                            <GithubPicker
                                onChange={(color) => {
                                    setBaseDotsColor(color.hex);
                                }}
                                onChangeComplete={() => {
                                }}
                                color={baseDotsColor}
                            />
                        </div>

                        <div className={"relative mt-2"}>
                            <label className={"helperLabel"}>Top dots color</label>
                            <GithubPicker
                                onChange={(color) => {
                                    setTopDotsColor(color.hex);
                                }}
                                onChangeComplete={() => {
                                }}
                                color={topDotsColor}
                            />
                        </div>

                        <div className={"relative mt-2"}>
                            <label className={"helperLabel"}>Right dots color</label>
                            <GithubPicker
                                onChange={(color) => {
                                    setRightDotsColor(color.hex);
                                }}
                                onChangeComplete={() => {
                                }}
                                color={rightDotsColor}
                            />
                        </div>
                        <div className={"relative mt-2"}>
                            <label className={"helperLabel"}>Left dots color</label>
                            <GithubPicker
                                onChange={(color) => {
                                    setLeftDotsColor(color.hex);
                                }}
                                onChangeComplete={() => {
                                }}
                                color={leftDotsColor}
                            />
                        </div>
                        </div>
                        <button name={'Run'} className={"run"} onClick={createSTriangle}>Run</button>
                        <button name={'Reset'} className={"reset"} onClick={reset}>Reset</button>
                    </div>
                    <div id="sTriangle" className={"col-span-2"} hidden={show}>
                        <STriangle show={show}
                                   totalPoints={dots}
                                   distance={distance}
                                   baseRadius={baseRadius}
                                   dotsRadius={dotsRadius}
                                   baseDotsColor={baseDotsColor}
                                   topDotsColor={topDotsColor}
                                   leftDotsColor={leftDotsColor}
                                   rightDotsColor={rightDotsColor}/>
                    </div>
                </div>
            </main>
        </div>
    )
}
