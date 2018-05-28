export function headerNode() {
    let titleText = document.createElement('title'),
        logoTitle = document.createElement('link'),
        viewPort = document.createElement('meta');

    logoTitle.rel = 'shortcut icon';
    logoTitle.href = 'favicon.ico';

    titleText.innerHTML = 'Test task MST';

    viewPort.name = 'viewport';
    viewPort.content = 'width=device-width, initial-scale=1, shrink-to-fit=no';

    document.head.appendChild(viewPort);
    document.head.appendChild(logoTitle);
    document.head.appendChild(titleText);
}