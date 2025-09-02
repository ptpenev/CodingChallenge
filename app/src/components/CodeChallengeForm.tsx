import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface InputProps {
    id: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

interface FileUploadProps {
    id: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    accept?: string;
}

interface FormDataState {
    name: string;
    email: string;
    phone: string;
    education: string;
    portfolio: string;
    resume: File | null;
    info: string;
    allowData: boolean;
}

const Input: React.FC<InputProps> = ({ id, name, type, placeholder, value, onChange, required = false }) => (
    <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full mt-[5px] p-[12px] bg-[#E8E8E8] border border-[#E8E8E8] color-[#1D1D1DA6] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
        required={required}
    />
);

const FileUpload: React.FC<FileUploadProps> = ({ id, name, onChange, accept }) => (
    <div className="mt-2">
        <label
            htmlFor={id}
            className="flex items-center justify-center w-full p-[12px] border-2 border-dashed border-[#E8E8E8] rounded-[4px] cursor-pointer hover:bg-[#E8E8E8] transition-colors"
        >

            <svg className="h-6 w-6 text-[#1D1D1D] mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16H11ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="#1D1B20" />
            </svg>

            <span className="text-[#1D1D1D] font-medium">Upload Resume/CV</span>
        </label>
        <input
            type="file"
            id={id}
            name={name}
            onChange={onChange}
            accept={accept}
            className="hidden" // The actual input is hidden, the label acts as the trigger
        />
    </div>
);

const CodeChallengeForm: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormDataState>({
        name: '',
        email: '',
        phone: '',
        education: '',
        portfolio: '',
        resume: null,
        info: '',
        allowData: false,
    });

    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes
    const [fileError, setFileError] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, type, value } = e.target;

        if (e.target instanceof HTMLInputElement) {
            if (type === 'checkbox') {
                setFormData(prevState => ({ ...prevState, [name]: e.target.checked }));
                return;
            }
            if (type === 'file') {
                const selectedFile = e.target.files ? e.target.files[0] : null;
                if (selectedFile && selectedFile.size > MAX_FILE_SIZE) {
                    setFileError('File exceeds the maximum size of 10MB');
                    setFormData(prevState => ({ ...prevState, [name]: null }));
                } else {
                    setFileError('');
                    setFormData(prevState => ({ ...prevState, [name]: selectedFile }));
                }
                return;
            }
        }

        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (fileError) {
            alert('Please resolve the file error before submitting.');
            return;
        }
        // Manually validate resume instead of using native `required` on a hidden input
        // if (!formData.resume) {
        //     alert('Please upload your resume/CV before submitting.');
        //     const resumeInput = document.getElementById('resume') as HTMLInputElement | null;
        //     // Optionally open the file picker to guide the user
        //     resumeInput?.click();
        //     return;
        // }
        console.log(formData);
        navigate("/task");
    };

    return (
        <div>
            <div className="text-left">
                <form onSubmit={handleSubmit} className="space-y-[16px]">
                    <div>
                        <label htmlFor="name" className="block text-[16px] font-[400] text-[#1D1D1D]">Full Name*</label>
                        <Input id="name" name="name" type="text" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-[16px] font-[400] text-[#1D1D1D]">Email Address*</label>
                        <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-[16px] font-[400] text-[#1D1D1D]">Phone Number</label>
                        <Input id="phone" name="phone" type="tel" placeholder="0888888888" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="education" className="block text-[16px] font-[400] text-[#1D1D1D]">Education Level</label>
                        <Input id="education" name="education" type="text" placeholder="e.g. Bachelor's in Computer Science" value={formData.education} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="portfolio" className="block text-[16px] font-[400] text-[#1D1D1D]">Portfolio or GitHub URL</label>
                        <Input id="portfolio" name="portfolio" type="text" placeholder="github.com/username" value={formData.portfolio} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="resume" className="block text-[16px] font-[400] text-[#1D1D1D]">Upload Resume/CV</label>
                        <FileUpload id="resume" name="resume" onChange={handleChange} accept=".pdf,.doc,.docx" />
                        <p className="mt-2 text-xs text-gray-500">Accepted: PDF, DOC, DOCX. Max size: 10MB.</p>
                        {fileError && (
                            <p className="mt-2 text-sm text-red-600" role="alert">{fileError}</p>
                        )}
                        {!fileError && formData.resume && (
                            <p className="mt-3 text-sm text-gray-700">Uploaded <strong>{formData.resume.name}</strong></p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="info" className="block text-[16px] font-[400] text-[#1D1D1D]">Tell Us About Yourself</label>
                        <textarea
                            name="info"
                            id="info"
                            rows={5}
                            value={formData.info}
                            onChange={handleChange}
                            className="w-full mt-2 p-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                        ></textarea>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="allowData"
                            name="allowData"
                            checked={formData.allowData}
                            onChange={handleChange}
                            className="h-4 w-4 rounded accent-[#1d1d1d]"
                            required
                        />
                        <label htmlFor="allowData" className="ml-[6px] block text-[16px] font-[400] text-[#1D1D1D] opacity-60">
                            I agree that my data will be used for the purposes of this challenge.
                        </label>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className='mt-[48px] bg-[#005F75] text-[#FAFAFA] font-[400] text-[20px] py-[8px] px-[16px] rounded-[4px] hover:bg-[#004c5e] transition-colors shadow-md focus:outline-none'
                        >
                            Start the Challenge Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CodeChallengeForm;

