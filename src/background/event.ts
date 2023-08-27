import { getNoticeCount } from './apis'
import job from './schedule'
import { onMessage } from './utils'

const formatText = (count: number) => {
  if (count === 0) {
    return ''
  }
  return String(count)
}

export const noticeBadge = () => {
    console.log("zhixin");
console.log( chrome.runtime.getURL("popup/index.html"));
    chrome.action.onClicked.addListener(function (tab) {
    console.log('onClicked')
    chrome.tabs.create({
        'url': chrome.runtime.getURL("popup/index.html")
    });
});
  const fetchCount = async () => {
    const countInfo = await getNoticeCount()
    chrome.action.setBadgeText({ text: formatText(99) })
  }
  chrome.action.setBadgeBackgroundColor({
    color: '#cb0004'
  })
    
  fetchCount()

  onMessage('set-badge-bg', (params) => {
    chrome.action.setBadgeText({ text: formatText(params.total) })
  })

  onMessage('refresh-badge-bg', () => {
    fetchCount()
  })

  job.register(fetchCount)
}
