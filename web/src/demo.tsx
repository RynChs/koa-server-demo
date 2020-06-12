import * as React from 'react';
import { getClassName } from './service';

export function Demo() {
    const { useState } = React;
    let [className, setClassName]: [string[], any] = useState([]);

    return (
        <>
            <button onClick={ async () => setClassName(await getClassName()) }>获取班级列表</button>
            <button onClick={ () => setClassName(className = [])}>重置</button>
            <div>{ className.join('') }</div>
        </>
    )
}