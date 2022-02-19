module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd021a6620e5aaabb646615d92d1c082a'),
  },
});
