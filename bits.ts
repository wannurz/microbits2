//% weight=100 color=#610C04 icon="\uf10c"
namespace Parkwan {
    // แสดง LED บน micro:bit เป็นรูปแบบเฉพาะ
    //% blockId="id_showled" block="show custom LED pattern"
    export function fn_showled(): void {
        basic.showLeds(`
            # . . . #
            # . . . #
            . . # . .
            . . . . #
            # # # # #
        `);
    }

    // ทำงานซ้ำตลอดเวลา
    //% blockId="id_forever" block="run forever"
    export function fn_forever(): void {
        basic.forever(function () {
            fn_showled();
        });
    }
}
