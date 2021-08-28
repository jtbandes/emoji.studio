import * as hooks from "./hooks"
// @ponicode
describe("hooks.useEventListener", () => {
    test("0", () => {
        let callFunction: any = () => {
            hooks.useEventListener({}, "Jean-Philippe", () => undefined, [false, "Chief Product Officer", 7588892])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            hooks.useEventListener({}, "Pierre Edouard", () => undefined, [false, true, 9876])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            hooks.useEventListener({}, "Pierre Edouard", () => undefined, [false, true])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            hooks.useEventListener({}, "George", () => undefined, [false, false, "bc23a9d531064583ace8f67dad60f6bb"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            hooks.useEventListener({}, "Pierre Edouard", () => undefined, [true, "Sales", "c466a48309794261b64a4f02cfcc3d64"])
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
            hooks.useBase64HashState(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            hooks.useBase64HashState("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            hooks.useBase64HashState("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            hooks.useBase64HashState("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            hooks.useBase64HashState(7588892)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            hooks.useBase64HashState(NaN)
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
