import PropertiesOf from "../ts/PropertiesOf";

export function symbolMapValues<T extends {[l:symbol]:unknown}>(v:T):PropertiesOf<T>[] {
    return Reflect.ownKeys(v).map(i=>v[i as keyof T]);
}