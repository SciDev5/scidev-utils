import { ReverseType } from "../type/ReverseType";

export const Arr = {
    genByI<T>(len:number,filler:(i:number)=>T):T[] {
        if (len === 0) return [];
        return new Array(len).fill(0).map((v,i)=>filler(i));
    },
    genFill<T>(len:number,fill:T):T[] {
        if (len === 0) return [];
        return new Array(len).fill(fill);
    },
    nMatchI(len:number,isMatch:(i:number)=>boolean):number {
        return new Array(len).fill(0).filter((_,i)=>isMatch(i)).length;
    },
    /**
     * Combine two arrays element-wise by.
     * @param musher The callback called to combine values from each array.
     */
    mushTogether<T0,T1,R>(a:T0[],b:T1[],musher:(a:T0,b:T1)=>R):R[] {
        if (a.length !== b.length)
            throw new Error("Arr.mushToghether array lengths must match");
        return a.map((_,i)=>musher(a[i],b[i]));
    },
    reduceSum(v:number[]):number {
        return v.reduce((a,b)=>a+b);
    },
    reduceAverage(v:number[]):number {
        return this.reduceSum(v)/v.length;
    },

    conditionalReverse<T extends unknown[]>(arr:T,reverse:boolean):ReverseType<T>|T {
        return reverse ? (arr.reverse() as ReverseType<T>) : arr;
    },
};