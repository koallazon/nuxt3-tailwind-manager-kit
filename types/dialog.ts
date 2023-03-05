export interface Dialog {
  title: string
}

export interface State {
  dialogs: Dialog[]
}

export interface Options {
  fullscreen?: boolean
  persistent?: boolean
}
