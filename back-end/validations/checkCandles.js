const checkName = (req, res, next) => {
    console.log("name is being checked");
    if (req.body.name) {
        console.log("we've got a name here!");
        next();
    } else {
        res.status(400).json({error: "We need a name..."})
    }
}

const validateUrl = (req, res, next) => {
    if (
        req.body.url.substring(0, 7) === "http://" || 
        req.body.url.substring(0, 8) === "https://"
    ) {
        console.log("URL checks out! because tim likes console logs")
        next();
    } else {
        res.status(400).json({error: "Tim noticed your URL does not match 'http://' or 'https://' "})
    }
}
module.exports = { checkName, validateUrl }