import { Client } from "@openfort/ecosystem-js/client";

class EcosystemWallet extends Client {
    constructor({ clientId, redirectUri, logoutRedirectUri }: { clientId: string, redirectUri: string, logoutRedirectUri: string }) {
        super({
            redirectUri: redirectUri,
            logoutRedirectUri: logoutRedirectUri,
            baseConfig: {
                ecosystemWalletDomain: 'http://localhost:3000',
                publishableKey: clientId,
                ecosystemPublishableKey: 'pk_test_8e982c92-f7a3-59dd-8e7f-accb19aaf4ef',
            },
            appearance: {
                icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDA5NS45IDEwMDk3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDA5NS45IDEwMDk3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCgkuc3Qxe2ZpbGw6I0ZGMkUyOTt9DQo8L3N0eWxlPg0KPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iNTA0OC4xIiBjeT0iNTA0OC41IiByPSI1MDQ3LjgiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04ODkwLjIsNDQwMWMtMTEyLjMtNjE0LjgtMzgyLTExNzUuMy03NjUuMy0xNjM3LjFjLTY1Ni41LTc5MS4xLTE2NDcuNi0xMjk1LTI3NTUuOC0xMjk1SDI1OTcuNQ0KCWMtNDQ3LjMsNS43LTgwOC4yLDM3MC4xLTgwOC4yLDgxOC44djU1MjEuOGMwLDQ0OC42LDM2MC45LDgxMy4xLDgwOC4yLDgxOC44aDI3NzEuNmMxMTA4LjcsMCwyMDk5LjMtNTAzLjksMjc1NS44LTEyOTUNCgljMzgzLjctNDYyLjIsNjUzLTEwMjIuMyw3NjUuMy0xNjM3LjFjMzguNi0yMTAuMSw1OC4zLTQyNi4zLDU4LjMtNjQ3LjdDODk0OC42LDQ4MjYuOCw4OTI4LjgsNDYxMSw4ODkwLjIsNDQwMXogTTUzNzkuNiw3MzMzLjZoLTIxDQoJYy0yMjUtMS00NDIuMy0zNC41LTY0Ny41LTk2LjFjLTM2OS40LTExMC45LTY5OS41LTMxMi44LTk2NC4yLTU3OS43Yy0xNzguMS0xNzkuNi0zMjYuNy0zODguNi00MzcuNi02MTkuMg0KCWMtNTIuNi0xMDkuNi05Ni45LTIyNC4xLTEzMi0zNDIuNWMtNjAuNS0yMDUuMi05My00MjIuOC05My02NDcuN2MwLTIyNSwzMi41LTQ0Mi4xLDkzLTY0Ny43YzE4LTYwLjUsMzguMi0xMTkuNyw2MC41LTE3OC4xDQoJYzIxLjEtNTQuOCw5OS42LTUyLjIsMTE3LjUsMy45YzE4LjksNTkuMiw0MC4zLDExNy4xLDY0LDE3My43YzEwMS43LDI0Mi4xLDI0Ny4zLDQ2MS40LDQyNi43LDY0Ny43DQoJYzIxMi43LDIyMC43LDQ3Mi45LDM5NS40LDc2NC4yLDUwNy41aDBjNTMuMSwyMC40LDEwNy4xLDM4LjcsMTYyLjEsNTQuOWMxODkuMSw1NS41LDM4OS4yLDg1LjMsNTk2LjMsODUuMw0KCWM0NTIuMSwwLDgxOC44LDM2Ni42LDgxOC44LDgxOC44QzYxODcuNSw2OTYzLjQsNTgyNyw3MzI3LjksNTM3OS42LDczMzMuNnogTTc1NjAuNiw1Njk2LjVjLTE4LDYwLjUtMzguMiwxMTkuNy02MC41LDE3OC4xDQoJYy0yMS4xLDU0LjgtOTkuNiw1Mi4yLTExNy41LTMuOWMtMTguOS01OS4yLTQwLjMtMTE3LjEtNjQtMTczLjdjLTEwMS43LTI0Mi4xLTI0Ny4zLTQ2MS40LTQyNi43LTY0Ny43DQoJYy0zODQuNi0zOTkuMS05MjQuNS02NDcuNy0xNTIyLjYtNjQ3LjdjLTE5OC42LDAtMzgwLjctNzAuNy01MjIuNS0xODguNGMtMTgxLTE1MC4yLTI5Ni4yLTM3Ni44LTI5Ni4yLTYzMC4zDQoJYzAtMjE3LjIsODQuNi00MTQuNiwyMjIuNi01NjEuMmMxNDcuMS0xNTYuMywzNTQuOS0yNTQuNyw1ODUuNy0yNTcuNmgyMWM5MDIuNSwzLjksMTY4MS44LDUzMS41LDIwNDkuMywxMjk1DQoJYzUyLjYsMTA5LjYsOTYuOSwyMjQuMSwxMzIsMzQyLjVjNjAuNSwyMDUuMiw5Myw0MjIuOCw5Myw2NDcuN0M3NjU0LDUyNzQuMSw3NjIxLjUsNTQ5MC44LDc1NjAuNiw1Njk2LjV6Ii8+DQo8L3N2Zz4NCg==',
                logo: 'https://blog-cms.openfort.xyz/uploads/dos_icon_logo_eb409648a4.svg',
                name: 'DOS ID',
                reverseDomainNameSystem: 'com.dos.id'
            }
        });

        // Use a Proxy to allow for new method additions
        return new Proxy(this, {
            get: (target, prop) => {
                if (prop in target) {
                    const value = target[prop as keyof EcosystemWallet];
                    return typeof value === 'function' ? value.bind(target) : value;
                }
                return undefined;
            }
        });
    }

    // Add new methods here
    newMethod() {
        console.log('This is a new method in the new SDK');
    }

    // Override existing methods here
    someExistingMethod(...args: any[]) {
        console.log('This method has been overridden in the new SDK');
        return super.login(...args);
    }
}

export default EcosystemWallet;