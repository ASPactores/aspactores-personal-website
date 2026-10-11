/// <reference types="astro/client" />

declare module '*.css'
declare module '*.scss'
declare module '*.sass'
declare module '*.less'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.webp'

interface ImportMetaEnv {
  readonly SITE_URL?: string
  readonly PUBLIC_SITE_URL?: string
  readonly CMS_URL?: string
  readonly PUBLIC_CMS_URL?: string
  readonly PAYLOAD_URL?: string
  readonly NEXT_PUBLIC_CMS_URL?: string
  readonly PAYLOAD_API_KEY?: string
  readonly CMS_API_KEY?: string
  readonly [key: string]: any
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
