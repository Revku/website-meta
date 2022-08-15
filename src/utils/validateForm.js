export const validateForm = (title, author, description, url) => {
    const newErrors = {};
    let errorsCount = 0;

    if (!title) {
        newErrors.title = true;
        errorsCount++;
    }

    if (!author) {
        newErrors.author = true;
        errorsCount++;
    }
    
    if (!description) {
        newErrors.description = true;
        errorsCount++;
    }
    
    if (!url) {
        newErrors.url = true;
        errorsCount++;
    }

    if (errorsCount == 0) {
        return true;
    } else {
        return newErrors;
    }
}