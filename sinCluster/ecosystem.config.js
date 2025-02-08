module.exports = {
  apps: [
    {
      name: "sinCluster",
      script: "index.js",
      instances: 0,
      exec_mode: "cluster",
    },
  ],
};
