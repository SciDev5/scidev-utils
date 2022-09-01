export const MathX = {
    roundToNearest(x:number,step=1) {
        return Math.round(x/step)*step;
    },
    floorToNearest(x:number,step=1) {
        return Math.floor(x/step)*step;
    },
    floorMod(x:number,y:number) {
        return (x%y+y)%y;
    },
};