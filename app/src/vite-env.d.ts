/// <reference types="vite/client" />

/** Vite asset import — import img from './foo.png?url' */
declare module '*?url' {
  const src: string
  export default src
}

declare module '*.png?url' {
  const src: string
  export default src
}

declare module '*.jpg?url' {
  const src: string
  export default src
}

declare module '*.jpeg?url' {
  const src: string
  export default src
}

declare module '*.webp?url' {
  const src: string
  export default src
}

declare module '*.gif?url' {
  const src: string
  export default src
}
