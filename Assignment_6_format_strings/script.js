function formatNames(arr) {
    return arr.map(name =>
        name.charAt(0).toUpperCase() + name.slice(1)
    ).join(', ');
}

console.log(formatNames(["luke", "garrett", "jacob"]));
