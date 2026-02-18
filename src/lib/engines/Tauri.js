import Engine from '../Engine.js';

/**
 * @implements {Engine}
 */
export default class TauriEngine {
    /**
     * @param {any} window
     */
    constructor(window) {
        this.window = window;
    }

    /**
     * @param {() => void} callback
     */
    onResize(callback) {
        this.window?.listen('tauri://resize', callback);
    }

    /**
     * @param {(theme: string) => void} callback
     */
    onThemeChange(callback) {
        this.window?.listen('tauri://theme-changed', (theme) => {
            callback(theme);
        });
    }

    async getTheme() {
        return this.window?.theme();
    }

    async isMaximized() {
        return this.window?.isMaximized();
    }

    async minimize() {
        this.window?.minimize();
    }

    async maximize() {
        this.window?.maximize();
    }

    async unmaximize() {
        this.window?.unmaximize();
    }

    async close() {
        this.window?.close();
    }
}
