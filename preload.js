const { contextBridge } = require('electron/renderer')
const { doRead, findAllWords } = require('./complet')


contextBridge.exposeInMainWorld('api', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,

  doRead: () => doRead(),
  findAllWords: (word, cnt) => findAllWords(word, cnt)
})
