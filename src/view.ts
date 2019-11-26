import asyncComponent from './AsyncComponent';

export const MediaTransferOnline = asyncComponent(() => import(/* webpackChunkName: "media" */ "./pages/mediaTransferOnline/index"));
export const MediaTransfer = asyncComponent(() => import(/* webpackChunkName: "widgetTransfer" */ "./pages/mediaTransfer/index"));