
export default {
    get: (avatar) => {
        if (avatar) {
            return `${process.env.VUE_APP_API_HOST}/uploads/profile/${avatar}`
        }
        return ''
    }
}
