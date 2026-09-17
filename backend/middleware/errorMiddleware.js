export const errorMiddleware = (err, req, res, next) => {
    console.error(err);

    if (err.name === 'ValidationError') {
        const errors = Object.values(err.errors).map(error => error.message);
        return res.status(400).json({
            message: "Validation Failed",
            errors: errors
        });
    }

    // Handle invalid MongoDB ObjectIds (like "hello")
    if (err.name === 'CastError') {
        return res.status(400).json({
            message: "Invalid ID format",
            error: `The provided value '${err.value}' is not a valid employee ID.`
        });
    }

    res.status(500).json({
        message: "Internal Server Error",
        error: err.message
    });
};