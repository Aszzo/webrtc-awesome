import asyncComponent from './AsyncComponent';
export const Media = asyncComponent(() => import(/* webpackChunkName: "media" */ "./pages/getMedia/index"));
export const MediaTransfer = asyncComponent(() => import(/* webpackChunkName: "widgetTransfer" */ "./pages/mediaTransfer/index"));