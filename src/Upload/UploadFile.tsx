import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default ({
  fileList = [],
  data = {},
  onChange,
  buttonProps = {},
  text = 'Upload',
}) => {
  const handleChange = ({ file, fileList }) => {
    if (file.status === 'done') {
      if (onChange) {
        onChange(
          fileList.map((v) => ({
            name: v.name,
            size: v.size,
            type: v.type,
            url: v.url || v.response.result,
            uid: v.uid,
          })),
        );
      }
    }
  };

  return (
    <Upload
      action="/api/file/uploadFile"
      name="multipartFile"
      data={data}
      onChange={handleChange}
      fileList={fileList}
      onRemove={(file) => {
        // console.log(file);
        if (onChange) {
          onChange(fileList.filter((v) => v.uid !== file.uid));
        }
      }}
    >
      <Button {...buttonProps} icon={<UploadOutlined />}>
        {text}
      </Button>
    </Upload>
  );
};
