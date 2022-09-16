import React from "react";
import { useWindowEvent } from "./useWindowEvent";

export class Keybind {
    shiftKey = false;
    ctrlKey = false;
    altKey = false;
    metaKey = false;
    isStrict = false;
    constructor(readonly keyName:string) {}

    get shift() {
        this.shiftKey = true;
        return this;
    }
    get alt() {
        this.altKey = true;
        return this;
    }
    get ctrl() {
        this.ctrlKey = true;
        return this;
    }
    get meta() {
        this.metaKey = true;
        return this;
    }
    strict(isStrict=true) {
        this.isStrict = isStrict;
        return this;
    }

    check(e:KeyboardEvent) {
        if (e.key.toLowerCase() !== this.keyName.toLowerCase()) return false;
        if (this.isStrict)
            return (
                e.shiftKey === this.shiftKey &&
                e.altKey   === this.altKey   &&
                e.metaKey  === this.metaKey  &&
                e.ctrlKey  === this.ctrlKey
            );
        else
            return (
                ( !this.shiftKey || e.shiftKey ) &&
                ( !this.altKey   || e.altKey   ) &&
                ( !this.metaKey  || e.metaKey  ) &&
                ( !this.ctrlKey  || e.ctrlKey  )
            );
    }
    toString() {
        return `Keybind['${this.keyName}',${[
            this.shiftKey?"⇧":null,
            this.altKey?"⌥":null,
            this.ctrlKey?"⌃":null,
            this.metaKey?"⌘":null,
        ].join("")}]`;
    }
}

export function useKeybind(binding:Keybind|Keybind[],handler:()=>void,deps:React.DependencyList=[]) {
    useWindowEvent("keydown",e=>{
        if (binding instanceof Array ?
            binding.some(v=>v.check(e)) :
            binding.check(e)
        )
            handler();
    },[
        binding instanceof Array ?
            binding.map(v=>v.toString()).sort().join("") :
            binding.toString(),
        ...deps,
    ]);
}