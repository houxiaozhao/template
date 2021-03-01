module.exports = {
  apps: [
    {
      name: 'nestAPP',
      script: 'dist/main.js',
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'one two',
      instances: 4,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'prod',
      },
    },
  ],
};
