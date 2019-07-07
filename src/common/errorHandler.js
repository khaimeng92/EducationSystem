const ResponseFormat = {
    build : (object, message, statusCode, statusType)  => {
        return {
            data: object,
            statusCode: statusCode,
            message: message,
            statusType: statusType
        }
    },
    error : (message, statusCode, statusType) => {
        return {
            message: message
        }
    }
}

module.exports = ResponseFormat

