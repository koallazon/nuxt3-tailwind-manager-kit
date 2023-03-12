export interface ToastOptions {
  timeout?: number
  closeOnClick?: boolean
}

export interface Toast extends ToastOptions {
  id: string
  resolve: (value: boolean) => void
  message: string
}

export interface State {
  toasts: Toast[]
}
