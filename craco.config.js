// 用于覆盖webpack默认配置

const path = require('path');

const pathResolve = pathUrl => path.join(__dirname, pathUrl);

module.exports = {
  webpack: {
  // 配置webpack的路径别名，如：@代表src文件夹
    alias: {
      '@assets': pathResolve('src/assets'),
      '@common': pathResolve('src/common'),
      '@components': pathResolve('src/components'),
      '@hooks': pathResolve('src/hooks'),
      '@pages': pathResolve('src/pages'),
      '@redux': pathResolve('src/redux'),
      '@utils': pathResolve('src/utils'),
      "@services": pathResolve('src/services'),
    }
  },
};
