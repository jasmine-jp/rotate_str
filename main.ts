let arr: number[][] = []
basic.showString("A")
for (let i = 0; i < 5; i++) {
    for (let n = 0; n < 5; n++) {
        if (led.point(i, n)) {
            arr.push([i, n])
        }
    }
}

basic.forever(() => {
    for (let i = 0; i < arr.length; i++) {
        led.unplot(Math.round(arr[i][0]), Math.round(arr[i][1]))
    }
    basic.pause(50)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = rotate(arr[i], 10)
        led.plot(Math.round(arr[i][0]), Math.round(arr[i][1]))
    }
    basic.pause(50)
})

function rotate(arr: number[], angle: number): number[] {
    let rad = angle / 180 * Math.PI
    let X = (arr[0]-2) * Math.cos(rad) + (arr[1]-2) * Math.sin(rad)
    let Y = (arr[0]-2) * Math.sin(rad) - (arr[1]-2) * Math.cos(rad)
    return [X+2, 2-Y]
}