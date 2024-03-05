(EventTarget.prototype as any)._nativeEventListener = (EventTarget.prototype as any)._nativeEventListener || EventTarget.prototype.addEventListener;

for (let Obj of [ Window, Document, HTMLIFrameElement ]) {
    Obj.prototype.addEventListener = new Proxy(Obj.prototype.addEventListener, {
        apply: (target, thisArg, args: [type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined]) => {
            if (args[1] && args[1] instanceof Function) {
                args[1] = new Proxy(args[1], {
                    apply: (target, thisArg, args2: [evt: Event]) => {
                        try {
                            if (document.querySelector("#modMenu")?.contains(args2[0].target as Node)) {
                                return false;
                            }
                        } catch {};
                        
                        return target.apply(thisArg, args2);
                    }
                });
            }

            return target.apply(thisArg, args);
        }
    });
}