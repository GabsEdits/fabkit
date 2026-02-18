/**
 * @interface
 */
export default class Engine {
  /**
   * @param {() => void} callback
   */
  onResize(callback) {}

  /**
   * @param {(theme: string) => void} callback
   */
  onThemeChange(callback) {}

  /**
   * @returns {Promise<string>}
   */
  getTheme() {
    return Promise.resolve("");
  }

  /**
   * @returns {Promise<boolean>}
   */
  isMaximized() {
    return Promise.resolve(false);
  }

  /**
   * @returns {Promise<void>}
   */
  minimize() {
    return Promise.resolve();
  }

  /**
   * @returns {Promise<void>}
   */
  maximize() {
    return Promise.resolve();
  }

  /**
   * @returns {Promise<void>}
   */
  unmaximize() {
    return Promise.resolve();
  }

  /**
   * @returns {Promise<void>}
   */
  close() {
    return Promise.resolve();
  }
}
