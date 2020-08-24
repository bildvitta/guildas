import { Dialog } from 'quasar'

export function createDialog (title, message) {
  Dialog.create({
    title: title,
    message: message,
    ok: {
      unelevated: true,
      color: 'purple-5'
    }
  })
}