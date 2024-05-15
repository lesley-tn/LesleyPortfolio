import { proxy } from 'valtio'
import { useProxy } from 'valtio/utils'

const store = proxy({ 
    open: false,
    currentModel: null, 
    modelSelectionEnabled: {
        Twentee: true,
        FocuStudy: true,
        Predict: true,
        Kennispunt: true,
        Catan: true,
        AboutMe: true,
        ContactMe: true,
    }, 
    setOpen: (open) => {
        store.open = open; 
    },

    setModelSelectionEnabled: (model, enabled) => {
        store.modelSelectionEnabled[model] = enabled;
      },
});

export const useStore = () => useProxy(store)
