const ErrorMessage = ({error}) => {

    const getErrorMessage = (status) => {
        const errorCodeMessage = {
            "418":"418 I'm a tea pot 🫖, silly"
        }

        return errorCodeMessage[status] || "Oops… something went wrong, try again 🤕";
    }

return (    <article>
                {getErrorMessage(error.response.status)}
            </article>
    )
}

export default ErrorMessage;