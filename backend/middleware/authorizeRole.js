function auhtorizeRole(role) {
    return function(req, res, next) {
        if (req.user.role !== role) {
            return res.status(403).json({message: "forbidden. admins only."});
        }
        next();
    };
}

module.exports = auhtorizeRole;