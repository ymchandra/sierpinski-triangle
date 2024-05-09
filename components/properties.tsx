import {Params, updateOptions} from "./params";
import {GithubPicker} from "react-color";
import React from "react";

type Props = {
    model: Params
    onChange: Function
    children: React.ReactNode
}
const Properties = ({model, onChange, children}: & Props) => {
    return (
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
                           onChange({...model, dots: parseInt(e.target.value)})
                       }}/>
            </div>
            <div className={"relative mt-4 border-2 w-1/2"}>
                <label htmlFor="distance" className={"helperLabel"}>Distance Probability</label>
                <input id="distance" placeholder="Distance Probability"
                       type={"range"}
                       min={0}
                       max={1}
                       step={0.1}
                       value={model.distance}
                       onChange={(e) => {
                           onChange({...model, distance: parseFloat(e.target.value)})
                       }}/>
                <label className={"valueLabel"}>{model.distance}</label>
            </div>
            <div className={"relative mt-4 border-2 w-1/2"}>
                <label htmlFor="base_radius" className={"helperLabel"}>Base Radius</label>
                <input id="base_radius" placeholder="Base Radius"
                       type={"range"}
                       min={1}
                       max={20}
                       step={1}
                       value={model.options.baseRadius}
                       onChange={(e) => {
                           onChange(updateOptions(model, "baseRadius", parseInt(e.target.value)))
                       }}/>
                <label className={"valueLabel"}>{model.options.baseRadius}</label>
            </div>
            <div className={"relative mt-4 border-2 w-1/2"}>
                <label htmlFor="dots_radius" className={"helperLabel"}>Dots Radius</label>
                <input id="dots_radius" placeholder="Dots Radius"
                       type={"range"}
                       min={1}
                       max={20}
                       step={1}
                       value={model.options.dotsRadius}
                       onChange={(e) => {
                           onChange(updateOptions(model, "dotsRadius", parseInt(e.target.value)))
                       }}/>
                <label className={"valueLabel"}>{model.options.dotsRadius}</label>
            </div>
            <div className={"grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-1/2 mt-4"}>
                <div className={"relative mt-4"}>
                    <label className={"helperLabel"}>Base dots color</label>
                    <GithubPicker
                        onChange={(color) => {
                            onChange(updateOptions(model, "baseDotsColor", color.hex))
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
                            onChange(updateOptions(model, "topDotsColor", color.hex))
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
                            onChange(updateOptions(model, "rightDotsColor", color.hex))
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
                            onChange(updateOptions(model, "leftDotsColor", color.hex))
                        }}
                        onChangeComplete={() => {
                        }}
                        color={model.options.leftDotsColor}
                    />
                </div>
            </div>
            {children}
        </div>
    );
}

export default Properties
