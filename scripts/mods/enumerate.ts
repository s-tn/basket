export default function enumerate(list: any[]) {
    return list.map((value, index) => [index, value]);
}