const ErrorMessage = ({error}) => {

return (    <article>
                {error.message}
            </article>
    )
}

export default ErrorMessage;