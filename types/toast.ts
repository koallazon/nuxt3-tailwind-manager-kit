export interface ToastOptions {
  timeout?: number
  closeOnClick?: boolean
  pauseOnHover?: boolean
  draggable?: boolean
}

export interface Toast extends ToastOptions {
  id: string
  resolve: (value: boolean) => void
  message: string
}

export interface State {
  toasts: Toast[]
}
