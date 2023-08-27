import { sendMessage } from './utils'

export const monitorBadgeFresh = () => {
  const triggerPath = [
    '/notification',
    '/notification/digg',
    '/notification/follow',
    '/notification/im',
    '/notification/system'
    ]
    console.log("window.location.host",window.location.host);
    
  if (window.location.host === 'juejin.cn') {
    if (triggerPath.includes(window.location.pathname)) {
      sendMessage('fresh-badge-bg', {})
    }
  }
}
