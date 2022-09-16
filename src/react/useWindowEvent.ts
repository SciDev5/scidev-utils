import { DependencyList, useEffect } from "react";

export function useWindowEvent<Ev extends keyof WindowEventMap>(evName:Ev,handler:((e:WindowEventMap[Ev])=>void)|null,deps?:DependencyList) {
    useEffect(()=>{
        if (handler === null) return;
        addEventListener(evName,handler);
        return ()=>
            removeEventListener(evName,handler);
    },[
        evName,
        deps ? handler===null : handler,
        ...deps??[],
    ]);
}