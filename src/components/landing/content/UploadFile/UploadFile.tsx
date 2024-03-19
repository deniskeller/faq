import React from 'react';
import { useDropzone } from 'react-dropzone';
import s from './UploadFile.module.scss';

interface FileInputProps {
  files: File[];
  multiple?: boolean;
  label?: string;
  accept?: string;
  error?: boolean;
  errorText?: string;
  className?: string;
  onChange(files: File[]): void;
}

const UploadFile: React.FC<FileInputProps> = ({
  files,
  onChange,
  multiple = false,
  label = '',
  accept = '.pdf, .txt',
  error,
  errorText,
  className = '',
}) => {
  function onDeleteFile(lastModified: number) {
    const newArr = files.filter((file) => file.lastModified !== lastModified);
    onChange(newArr);
  }

  const uploadDropFile = React.useCallback(
    (acceptedFiles: File[]) => {
      onChange(acceptedFiles);
    },
    [onChange]
  );

  function onDropFunc(files: File[]) {
    console.log('files: ', files);
    if (files.length > 1 && multiple === true) {
      uploadDropFile(files);
    } else {
      uploadDropFile([files[0]]);
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFunc,
  });

  //обрезание строки до 15 символов
  const computedName = (file: string) => {
    if (file.length > 15) {
      const fileName = file.split('.')[0];
      const fileType = file.split('.')[1];
      const newStr = fileName.substring(0, 15);
      return newStr + '...' + '.' + fileType;
    }
    return file;
  };

  //вычисление размера файла
  const computedSize = (size: number) => {
    return (size / 1024).toFixed(2);
  };

  return (
    <>
      <div className={`${s.FileInput} ${className}`}>
        {files?.length > 0 ? (
          files.map((file, index) => {
            return (
              <>
                <div className={s.UploadFile} key={file?.name}>
                  <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={s.UploadFile_Icon}
                  >
                    <path
                      d="M24.166 3.33325H9.99935C9.11529 3.33325 8.26745 3.68444 7.64233 4.30956C7.0172 4.93468 6.66602 5.78253 6.66602 6.66659V33.3333C6.66602 34.2173 7.0172 35.0652 7.64233 35.6903C8.26745 36.3154 9.11529 36.6666 9.99935 36.6666H29.9993C30.8834 36.6666 31.7312 36.3154 32.3564 35.6903C32.9815 35.0652 33.3327 34.2173 33.3327 33.3333V12.4999L24.166 3.33325Z"
                      stroke="#7656F5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.3333 3.33325V13.3333H33.3333M15 24.9999L18.3333 28.3333L25 21.6666"
                      stroke="#7656F5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className={s.UploadFile_Name}>
                    <p>{computedName(file.name)}</p>
                  </div>

                  <div className={s.UploadFile_Size}>
                    <p>{computedSize(file.size)}MB</p>
                  </div>

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={s.UploadFile_Delete}
                    onClick={() => onDeleteFile(file.lastModified)}
                  >
                    <path
                      d="M5 5L14.8995 14.8995M5 14.9004L14.8995 5.0009"
                      stroke="#999999"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </>
            );
          })
        ) : (
          <>
            <div
              className={`${s.Empty} ${isDragActive ? s.Empty__Active : ''} ${
                error ? s.Empty__Error : ''
              }`}
              {...getRootProps()}
            >
              <input
                {...getInputProps()}
                hidden
                accept={accept}
                multiple={multiple}
              />

              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={s.Empty_Icon}
              >
                <path
                  d="M33.3844 12.8656L24.6344 4.11563C24.5182 3.99958 24.3803 3.90756 24.2286 3.84483C24.0768 3.78209 23.9142 3.74987 23.75 3.75H8.75C8.08696 3.75 7.45107 4.01339 6.98223 4.48223C6.51339 4.95107 6.25 5.58696 6.25 6.25V20C6.25 20.3315 6.3817 20.6495 6.61612 20.8839C6.85054 21.1183 7.16848 21.25 7.5 21.25C7.83152 21.25 8.14946 21.1183 8.38388 20.8839C8.6183 20.6495 8.75 20.3315 8.75 20V6.25H22.5V13.75C22.5 14.0815 22.6317 14.3995 22.8661 14.6339C23.1005 14.8683 23.4185 15 23.75 15H31.25V33.75H27.5C27.1685 33.75 26.8505 33.8817 26.6161 34.1161C26.3817 34.3505 26.25 34.6685 26.25 35C26.25 35.3315 26.3817 35.6495 26.6161 35.8839C26.8505 36.1183 27.1685 36.25 27.5 36.25H31.25C31.913 36.25 32.5489 35.9866 33.0178 35.5178C33.4866 35.0489 33.75 34.413 33.75 33.75V13.75C33.7501 13.5858 33.7179 13.4232 33.6552 13.2714C33.5924 13.1197 33.5004 12.9818 33.3844 12.8656ZM25 8.01719L29.4828 12.5H25V8.01719ZM16.875 20C15.2709 20 13.7027 20.4748 12.3681 21.3646C11.0334 22.2544 9.99195 23.5193 9.375 25C7.88316 25 6.45242 25.5926 5.39752 26.6475C4.34263 27.7024 3.75 29.1332 3.75 30.625C3.75 32.1168 4.34263 33.5476 5.39752 34.6025C6.45242 35.6574 7.88316 36.25 9.375 36.25H16.875C19.0299 36.25 21.0965 35.394 22.6202 33.8702C24.144 32.3465 25 30.2799 25 28.125C25 25.9701 24.144 23.9035 22.6202 22.3798C21.0965 20.856 19.0299 20 16.875 20ZM16.875 33.75H9.375C8.59708 33.7513 7.84666 33.4623 7.27045 32.9397C6.69425 32.4171 6.33368 31.6983 6.25925 30.924C6.18483 30.1496 6.40189 29.3754 6.86801 28.7526C7.33412 28.1297 8.01577 27.7032 8.77969 27.5562C8.77223 27.8878 8.89677 28.2087 9.12592 28.4484C9.35506 28.6881 9.67004 28.8269 10.0016 28.8344C10.3331 28.8418 10.654 28.7173 10.8937 28.4881C11.1334 28.259 11.2722 27.944 11.2797 27.6125C11.309 27.2913 11.3644 26.9731 11.4453 26.6609C11.4629 26.6099 11.477 26.5577 11.4875 26.5047C11.7878 25.5063 12.3597 24.611 13.1393 23.9188C13.9189 23.2266 14.8756 22.7646 15.9025 22.5845C16.9294 22.4045 17.9862 22.5133 18.9548 22.899C19.9234 23.2847 20.7658 23.9319 21.3879 24.7686C22.01 25.6052 22.3874 26.5983 22.4779 27.6369C22.5683 28.6756 22.3683 29.7189 21.9002 30.6505C21.4321 31.5821 20.7143 32.3653 19.827 32.9126C18.9396 33.4599 17.9176 33.7498 16.875 33.75Z"
                  fill="#999999"
                />
              </svg>

              <div className={s.Empty_Title}>
                <p>Drag & drop or click here</p>
              </div>
              <p className={s.Empty_Description}>{label}</p>
            </div>

            {errorText && errorText?.length > 0 ? (
              <div className={s.ErrorText}>
                <p>{errorText}</p>
              </div>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default UploadFile;
