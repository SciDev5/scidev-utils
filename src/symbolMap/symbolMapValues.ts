import { PropertiesOf } from "../type/PropertiesOf";

export function symbolMapValues<T extends {[l:symbol]:unknown}>(v:T):PropertiesOf<T>[] {
    return Reflect.ownKeys(v).map(i=>v[i as keyof T]);
}