declare const c3_runtimeInterface: C3_runtimeInterface;

export default function gravity(menu: ModMenu) {
    (menu.content.querySelector('#gravity-changer') as HTMLInputElement & CustomEventTarget)._nativeEventListener('input', (event) => {
        const val: string = ((event as InputEvent).target as HTMLInputElement).value;

        menu.setGravity(parseFloat(val));
    
        c3_runtimeInterface._localRuntime._pluginManager._allBehaviors[0].SetGravity(parseInt(val));
    });
}