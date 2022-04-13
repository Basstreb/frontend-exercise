export function up(v, n) {
    return Math.ceil(v * Math.pow(10, n)) / Math.pow(10, n);
}