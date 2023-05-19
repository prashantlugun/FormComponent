import React, { ChangeEvent } from 'react';
import { FileuploadProps } from './type';

const Fileupload = ({
    id,
    name,
    multiple,
    accept,
    disabled,
    required,
    maxSize,
    sx
}: FileuploadProps) => {
    const validateFile = (file: File) => {
        const allowedTypes = ['image/jpeg', 'image/png'];
        const maxFileSize = maxSize || 5 * 1024 * 1024; // Default: 5MB

        if (!allowedTypes.includes(file.type)) {
            alert('Only JPEG and PNG images are allowed.');
            return false;
        }

        if (file.size > maxFileSize) {
            alert(`File size exceeds the limit of ${maxFileSize / (1024 * 1024)}MB.`);
            return false;
        }

        return true;
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;

        if (files && files.length > 0) {
            const file = files[0];

            if (validateFile(file)) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    const fileContent = e.target?.result;
                    console.log('File content:', fileContent);
                    // Perform further actions with the file content if needed
                };

                reader.readAsDataURL(file);
            }
        }
    };

    return (
        <div>
            <input
                type="file"
                id={id}
                name={name}
                multiple={multiple ? true : false}
                disabled={disabled ? true : false}
                required={required ? true : false}
                accept={accept}
                onChange={onChangeHandler}
                style={sx}
            />
        </div>
    );
};

export default Fileupload;
