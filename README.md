
# Messenger application


## Demo

![2023-07-04 03-26-28](https://github.com/FedotovN/messenger-app/assets/53238017/ae114158-4528-42e7-bd26-5ca1f0583d06)

## Tech Stack
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

**Other:** lodash, moment, vue-i18n, tippy, e.t.c
 
## Features <sub><sup> Some of them may be not on prod yet </sup></sub>

- Light/dark mode toggle and adaptive design using Tailwind CSS
- Internalization with i18n library (Ru-En)
- Realtime messaging and message status ( sending / sended / read )
  - Message read status update on user view (using Intersection API)
- Firebase Auth with password recovery and email verification
  - Forms validation using Vuelidate
  - Random password generator
- Image upload to Firebase Storage for sharing pictures
  - Messages can contain up to 8 pictures - even GIF!
  - You can paste an image to input field
- Profile editing
  - Avatar image upload
  - Random avatar powered by Multiavatar API
- Emoji picker 🤟

## Related

- [Password generator](https://github.com/FedotovN/passwordGenerator)
- [Multiavatar API](https://github.com/multiavatar/Multiavatar)
