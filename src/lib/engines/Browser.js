import Engine from '../Engine.js';

/**
 * @implements {Engine}
 */
export default class BrowserEngine {
    /**
     * @param {() => void} callback
     */
    onResize(callback) {
        window.addEventListener('resize', callback);
    }

    /**
     * @param {(theme: string) => void} callback
     */
    onThemeChange(callback) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                callback('dark');
            } else {
                callback('light');
            }
        });
    }

    async getTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    async isMaximized() {
        return false;
    }

    async minimize() {
        window.blur();
    }

    async maximize() {
        window.focus();
    }

    async unmaximize() {
        window.focus();
    }

    async close() {
        window.close();
    }
}
