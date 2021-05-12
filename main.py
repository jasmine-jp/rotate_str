basic.show_string("/")
for i in range(5):
    for n in range(5):
        if led.point(i, n):
            arr.append([n, i])
l = len(arr)

def on_forever():
    x = 0
    y = 1
    arr[0] = rotate(arr[0], 10)
basic.forever(on_forever)

def rotate(arr: List[number], angle: number):
    rad = angle / 180 * Math.PI
    X = arr[0] * Math.cos(rad) - arr[1] * Math.sin(rad)
    Y = arr[0] * Math.sin(rad) + arr[1] * Math.cos(rad)
    if abs(X) < 0.01:
        X = 0
    if abs(Y) < 0.01:
        Y = 0
    return [X, Y]