import "./bundle-modules";
import "./main-common";

export function staticAssets() {
    (<any>require).context("file-loader!./", true, /\/[^\.\/]*(.ios)?.(css|xml)$/);
}
