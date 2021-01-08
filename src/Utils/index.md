## Utils 工具类

### 文件下载:

```tsx
import React from 'react';
import { Button } from 'antd';
import { Utils } from 'ant-nest';

const { exportFile } = Utils;
export default () => (
  <Button
    type="primary"
    onClick={() => {
      exportFile({
        type: 'url',
        data:
          'https://gw.alipayobjects.com/zos/bmw-prod/a74b9643-b1db-48b0-83b1-67d15e13b6fc/k7a3sl0s_w1988_h1310.png',
      });
    }}
  >
    URL文件下载
  </Button>
);
```
