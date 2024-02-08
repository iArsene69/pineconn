import crypto from "crypto";

const generateRandomToken = () => {
    const randomToken = crypto.randomBytes(32).toString("hex");
    console.log(randomToken);
}

generateRandomToken()