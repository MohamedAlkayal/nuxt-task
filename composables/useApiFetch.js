export const useApiFetch = (path, opts) => {
    return useFetch('https://sync-api.boodaidictionary.com/public/api' + path, {
        ...opts,
        headers: {
            Accept: 'application/json',
            api_key: 'sync2023',
        },
    })
}
