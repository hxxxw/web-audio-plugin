import { ref, watch } from 'vue'
import { getLocalObj, setLocalObj } from './utils'

export const useLocalRef = <T>(keyName: string, defaultValue?: T) => {
  const localInfo = ref<T>(getLocalObj(keyName) || defaultValue || null)

    watch(localInfo, (newVal) => {
        chrome.action.onClicked.addListener(() => { 
            console.log("11111");
            
        })
    setLocalObj(keyName, newVal)
  })

  return localInfo
}
