export type Params = {
    show: boolean
    dots: number
    distance: number
    options: Options
}

type Options = {
    baseRadius: number
    baseDotsColor: string
    dotsRadius: number
    topDotsColor: string
    rightDotsColor: string
    leftDotsColor: string
}

export function useDefault(): Params {
    return {
        show: false,
        dots: 1,
        distance: 0.5,
        options: {
            baseRadius: 10,
            baseDotsColor: '#0000FF',
            dotsRadius: 1,
            topDotsColor: 'violet',
            leftDotsColor: 'red',
            rightDotsColor: 'cyan',
        },
    }
}

export function updateOptions(current: Params, param: string, value: string | number): Params {
    const options: Options = {...current.options};
    switch (param) {
        case "baseRadius":
            options.baseRadius = value as number;
            break;
        case "baseDotsColor":
            options.baseDotsColor = value as string;
            break;
        case "dotsRadius":
            options.dotsRadius = value as number;
            break;
        case "topDotsColor":
            options.topDotsColor = value as string;
            break;
        case "leftDotsColor":
            options.leftDotsColor = value as string;
            break;
        case "rightDotsColor":
            options.rightDotsColor = value as string;
            break;
    }
    return {...current, options};
}
