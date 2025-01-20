import jwt from "jsonwebtoken"
export const authmiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token missing or invalid" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId; // Correct assignment
        next(); // Pass control to the next middleware/route
    } catch (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};
