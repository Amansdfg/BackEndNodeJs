export function isFullName(value){
    const parts=value.trim().split(" ");
    if(parts.length!==2){
        return false;
    }
    return parts.every((part)=>part[0]===part[0].toUpperCase());
}
export function isNotNull(value){
    return value.trim()!=='';
}
export function isEmail(value){
    return value.includes("@")
}
export function isStartWithCapital(value){
    return value[0]===value[0].toUpperCase();
}