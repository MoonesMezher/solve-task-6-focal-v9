const response = (success, data = null, message) => {
    return {
        success,
        message,
        data
    }
}

module.exports = response