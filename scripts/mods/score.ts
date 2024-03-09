export default function score(menu: ModMenu) {
    (menu.content.querySelector('#score-submit') as HTMLButtonElement & CustomEventTarget)._nativeEventListener('click', () => {
        const score = parseInt((menu.content.querySelector('#score') as HTMLInputElement).value);
        menu.content.querySelector('#score-value')!.textContent = String(score);

        console.log(score);

        menu.scoreTarget = score;
    });

    (menu.content.querySelector('#score') as HTMLInputElement & CustomEventTarget)._nativeEventListener('input', (event: Event) => {
        menu.setScoreTarget(((event as KeyboardEvent).target as HTMLInputElement)!.value);
    });
}