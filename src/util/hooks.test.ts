import * as hooks from "./hooks"
// @ponicode
describe("hooks.useEventListener", () => {
    test("0", () => {
        let callFunction: any = () => {
            hooks.useEventListener({}, "Anas", () => undefined, [9876, "c466a48309794261b64a4f02cfcc3d64", "Chief Product Officer", 7588892, "Chief Product Officer"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            hooks.useEventListener({}, "Anas", () => undefined, ["Software Engineer", true, true, true, true])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            hooks.useEventListener({}, "Michael", () => undefined, [9876, "bc23a9d531064583ace8f67dad60f6bb", "Software Engineer"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            hooks.useEventListener({}, "Jean-Philippe", () => undefined, [7588892, 9876, "Sales"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            hooks.useEventListener({}, "Edmond", () => undefined, [7588892, "bc23a9d531064583ace8f67dad60f6bb", "Marketing", "bc23a9d531064583ace8f67dad60f6bb", "Data Scientist"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            hooks.useEventListener({}, "", () => undefined, [])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("hooks.useBase64HashState", () => {
    test("0", () => {
        let callFunction: any = () => {
            hooks.useBase64HashState(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            hooks.useBase64HashState("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            hooks.useBase64HashState(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            hooks.useBase64HashState(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            hooks.useBase64HashState("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            hooks.useBase64HashState(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("hooks.useSubState", () => {
    test("0", () => {
        let callFunction: any = () => {
            hooks.useSubState(["", ""], [], undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
