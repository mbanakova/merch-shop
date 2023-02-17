import { defineStore } from 'pinia'

export const useOwnerStore = defineStore('ownerStore', {

  state: () => ({
    legal: {
      IP: 'ИП Mr Xxxx',
      INN: 'ИНН xxxxxxxxxx',
      OGRNIP: 'ОГРНИП xxxxxxxxxxxxxx',
    },
    contacts: {
      phone: '+79999999999',
      email: 'mrx@thiswebsite.com',
    },
    social: {
      vk: {
        link: 'vk.com/xxx',
        icon: 'vk'
      },
      telegram: {
        link: 'tme.com/xxx',
        icon: 'telegram'
      },
      youtube: {
        link: 'youtube.com/xxx',
        icon: 'youtube'
      },
    }
  })
})