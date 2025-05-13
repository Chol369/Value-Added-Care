import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  accept?: string;
  onFileChange?: (file: File | null) => void;
}

export function FileInput({
  label = "Upload file",
  accept,
  onFileChange,
  ...props
}: FileInputProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // Generate a unique ID for the input field for accessibility
  const inputId = React.useMemo(() => `file-input-${Math.random().toString(36).substring(2, 11)}`, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileName(file ? file.name : null);
    if (onFileChange) {
      onFileChange(file);
    }
  };

  const handleBrowseClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-vac-dark font-medium mb-2">
          {label}
        </label>
      )}
      <div className="border border-dashed border-gray-300 rounded-lg p-4 text-center">
        <i className="fas fa-upload text-gray-400 text-2xl mb-2" aria-hidden="true"></i>
        <p className="mb-2">
          {fileName ? fileName : "Drag and drop your file here, or click to browse"}
        </p>
        <input
          id={inputId}
          type="file"
          ref={inputRef}
          onChange={handleFileChange}
          accept={accept}
          className="hidden"
          aria-label={label}
          {...props}
        />
        <Button
          type="button"
          variant="link"
          className="text-vac-purple underline"
          onClick={handleBrowseClick}
          aria-controls={inputId}
        >
          Browse files
        </Button>
      </div>
    </div>
  );
}
