import { useState } from "react";
import { Keybind } from "./useKeybind";
import { useWindowEvent } from "./useWindowEvent";

export function useKeyState(keybind:Keybind):boolean {
    const [isPressed,setPressed] = useState(false);

    useWindowEvent("keydown",e=>{
        if (keybind.check(e) && !isPressed)
            setPressed(true);
    });
    useWindowEvent("keyup",e=>{
        if (keybind.check(e))
            setPressed(false);
    });

    return isPressed;
}