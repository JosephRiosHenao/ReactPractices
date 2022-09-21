const CACHE_ELEMENTS = [
    './',
    './src/main.jsx',
    './register.js',
    '/vite.svg'
]

const CACHE_NAME = 'v1_contador_app'

self.addEventListener('install', (e)=>{
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache=>{
            cache.addAll(CACHE_ELEMENTS).then(()=>{
                self.skipWaiting()
            }).catch(err=>console.log(err))
        })
    )
})