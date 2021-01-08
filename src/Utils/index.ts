import { message } from 'antd';

/**
 * 文件导出
 * @param exportOption 文件导出设置
 * @param exportOption.type 导出类型
 * @param exportOption.data 文件信息
 * @param exportOption.fileType blob文件类型
 * @param exportOption.fileName 导出文件名称
 */
export const exportFile = ({
  type,
  data,
  fileType,
  fileName = '',
}: {
  type: 'url' | 'blob';
  data: string | any;
  fileType?: string;
  fileName?: string;
}) => {
  const aEle = document.createElement('a');
  aEle.target = '_blank';
  switch (type) {
    case 'url':
      if (typeof data !== 'string') {
        message.error('请输入正确的url地址！');
        return;
      }
      aEle.href = data;
      break;
    case 'blob':
      if (!data) {
        message.error('请设置正确的Blob信息！');
        return;
      }
      const fileBlob = new Blob([data], { type: fileType });
      const objUrl = URL.createObjectURL(fileBlob);
      aEle.href = objUrl;
      aEle.download = fileName;
      break;
  }
  aEle.click();
};

export default {
  exportFile,
};
