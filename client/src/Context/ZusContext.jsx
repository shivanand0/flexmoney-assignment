import create from 'zustand'

const useAlertStore = create((set) => ({
    open: false,
    message: "",
    type: "success",
    setAlert: () => set((open, message, type) => ({ open: open, message: message, type: type })),
}))

export default useAlertStore