module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5ce64da3e7bf16a5681512905c6c1d29'),
  },
});
