import Head from 'next/head'
import React, {useState} from "react";
import {GithubPicker} from "react-color";
import STriangle from "../components/striangle";
import {Params, updateOptions, useDefault} from "../components/params";

export default function Home() {
    const [model, setModel] = useState<Params>(useDefault);
    const createSTriangle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setModel({...model, show: true});
    }

    const reset = () => {
        setModel(useDefault);
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
                        <h1 className={"mb-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"}>
                            Sierpinski Triangle
                        </h1>
                        <div className={"relative mt-4"}>
                            <label htmlFor="totalDots" className={"helperLabel"}>Total Dots</label>
                            <input aria-label={"Total Dots"} id="totalDots" placeholder="Total Dots"
                                   type={"number"}
                                   value={model.dots}
                                   onChange={(e) => {
                                       setModel({...model, dots: parseInt(e.target.value)})
                                   }}/>
                        </div>
                        <div className={"relative mt-4"}>
                            <label htmlFor="distance" className={"helperLabel"}>Distance Probability</label>
                            <input id="distance" placeholder="Distance Probability"
                                   type={"range"}
                                   min={0}
                                   max={1}
                                   step={0.1}
                                   value={model.distance}
                                   onChange={(e) => {
                                       setModel({...model, distance: parseFloat(e.target.value)})
                                   }}/>
                        </div>
                        <div className={"relative mt-4"}>
                            <label htmlFor="base_radius" className={"helperLabel"}>Base Radius</label>
                            <input id="base_radius" placeholder="Base Radius"
                                   type={"range"}
                                   min={1}
                                   max={20}
                                   step={1}
                                   value={model.options.baseRadius}
                                   onChange={(e) => {
                                       setModel(updateOptions(model, "baseRadius", parseInt(e.target.value)))
                                   }}/>
                        </div>
                        <div className={"relative mt-4"}>
                            <label htmlFor="dots_radius" className={"helperLabel"}>Dots Radius</label>
                            <input id="dots_radius" placeholder="Dots Radius"
                                   type={"range"}
                                   min={1}
                                   max={20}
                                   step={1}
                                   value={model.options.dotsRadius}
                                   onChange={(e) => {
                                       setModel(updateOptions(model, "dotsRadius", parseInt(e.target.value)))
                                   }}/>
                        </div>
                        <div className={"grid grid-cols-2 w-1/2 mt-4"}>
                            <div className={"relative mt-4"}>
                                <label className={"helperLabel"}>Base dots color</label>
                                <GithubPicker
                                    onChange={(color) => {
                                        setModel(updateOptions(model, "baseDotsColor", color.hex))
                                    }}
                                    onChangeComplete={() => {
                                    }}
                                    color={model.options.baseDotsColor}
                                />
                            </div>

                            <div className={"relative mt-4"}>
                                <label className={"helperLabel"}>Top dots color</label>
                                <GithubPicker
                                    onChange={(color) => {
                                        setModel(updateOptions(model, "topDotsColor", color.hex))
                                    }}
                                    onChangeComplete={() => {
                                    }}
                                    color={model.options.topDotsColor}
                                />
                            </div>

                            <div className={"relative mt-4"}>
                                <label className={"helperLabel"}>Right dots color</label>
                                <GithubPicker
                                    onChange={(color) => {
                                        setModel(updateOptions(model, "rightDotsColor", color.hex))
                                    }}
                                    onChangeComplete={() => {
                                    }}
                                    color={model.options.rightDotsColor}
                                />
                            </div>
                            <div className={"relative mt-4"}>
                                <label className={"helperLabel"}>Left dots color</label>
                                <GithubPicker
                                    onChange={(color) => {
                                        setModel(updateOptions(model, "leftDotsColor", color.hex))
                                    }}
                                    onChangeComplete={() => {
                                    }}
                                    color={model.options.leftDotsColor}
                                />
                            </div>
                        </div>
                        <div className={'mt-8'}>
                            <button name={'Run'} className={"run"} onClick={createSTriangle}>Run</button>
                            <button name={'Reset'} className={"reset"} onClick={reset}>Reset</button>
                        </div>
                    </div>
                    <div id="sTriangle" className={"col-span-2"} hidden={model.show}>
                        <STriangle show={model.show}
                                   dots={model.dots}
                                   distance={model.distance}
                                   options={model.options}/>
                    </div>
                </div>
            </main>
        </div>
    )
}
