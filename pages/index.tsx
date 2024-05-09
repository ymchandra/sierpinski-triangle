import Head from 'next/head'
import React, {useState} from "react";
import STriangle from "../components/striangle";
import {Params, useDefault} from "../components/params";
import Properties from "../components/properties";

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
                <div className={"grid lg:grid-cols-3 gap-4 w-full sm:grid-cols-1 md:grid-cols-2"}>
                    <Properties model={model} onChange={setModel}>
                        <div className={'mt-8'}>
                            <button name={'Create'} className={"run"} onClick={createSTriangle}>Create</button>
                            <button name={'Reset'} className={"reset"} onClick={reset}>Reset</button>
                        </div>
                    </Properties>
                    <div id="sTriangle" className={"sm:col-span-1 sm:row-span-1 lg:col-span-2 lg:row-span-2"} hidden={model.show}>
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
