import { Arr } from "../array/Arr";

export const Random = {
    strFast() {
        return Math.random().toString(36).substring(2);
    },
    str(sampleSet:string[]|readonly string[],length:number,separator=""):string {
        return Arr.genByI(length,()=>this.sample(sampleSet)).join(separator);
    },

    sample<T>(arr:T[]|readonly T[]):T {
        return arr[Random.intBelow(arr.length)];
    },

    intBelow(maxExclusive:number) {
        return Math.floor(Math.random()*maxExclusive);
    },
    floatInRange(min:number,max:number) {
        return Math.random()*(max-min)+min;
    },
    floatBetween0And(max:number) {
        return Math.random()*max;
    },
};