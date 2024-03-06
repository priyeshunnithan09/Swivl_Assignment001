const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, 'secretkey', (err, decodedToken) => {
        if (err) return res.status(401).json({ message: 'Invalid token' });

        req.user = decodedToken;
        next();
    });
};
exports.isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Forbidden, admin access required' });
    }
    next();
};